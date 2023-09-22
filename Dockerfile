FROM node:16-alpine AS base
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Explictly copy over Yarn folder
COPY .yarn ./.yarn

# Install dependencies based on the preferred package manager
COPY .yarnrc.yml package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

ARG HOSTNAME
ARG MATOMO_URL
ARG MATOMO_SITE_ID

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during the build.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Setup hostname and host values
ENV NEXT_PUBLIC_HOSTNAME ${HOSTNAME}
ENV NEXT_PUBLIC_HOST=https://$NEXT_PUBLIC_HOSTNAME

# Setup Matomo variables
ENV NEXT_PUBLIC_MATOMO_URL ${MATOMO_URL}
ENV NEXT_PUBLIC_MATOMO_SITE_ID ${MATOMO_SITE_ID}

# Build the site for production
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner

ENV NODE_ENV production

# Disable Next.js telemetry during runtime
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
