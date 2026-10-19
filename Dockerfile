# ==============================================================================
# Multi-Stage Hardened Dockerfile for Next.js (Standalone Mode)
# Target Platform: Coolify / Docker Swarm / Kubernetes / VPS
#
# DevSecOps Hardening:
#  - Multi-stage build (build tools & devDeps discarded)
#  - Minimal attack surface (node:22-alpine)
#  - Least privilege: Unprivileged non-root user (UID/GID 1001)
#  - Next.js standalone output (~150MB image instead of ~1.2GB)
#  - Telemetry disabled (privacy & build speed)
#  - Native container healthcheck (zero-downtime deploys in Coolify)
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Dependencies Cache
# ------------------------------------------------------------------------------
FROM node:22-alpine AS deps
# libc6-compat provides compatibility for musl libc with native bindings (e.g., SWC/Sharp)
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies deterministically based on package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# ------------------------------------------------------------------------------
# Stage 2: Application Builder
# ------------------------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Compile Next.js and generate standalone artifacts (.next/standalone)
RUN npm run build

# ------------------------------------------------------------------------------
# Stage 3: Minimal Production Runtime
# ------------------------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root system user & group (Principle of Least Privilege)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set up runtime directories with proper permissions for Next.js caching
RUN mkdir -p .next/cache && chown -R nextjs:nodejs /app

# Copy public assets and pre-built standalone artifacts with least privilege ownership
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 3000

# Native healthcheck using Alpine's built-in wget (no extra packages needed)
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/ || exit 1

# Execute standalone server directly (exec form ensures proper signal handling)
CMD ["node", "server.js"]
