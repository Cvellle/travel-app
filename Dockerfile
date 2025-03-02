# Install dependencies only when needed
FROM node:16.12.0-alpine3.14 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Rebuild the source code only when needed
FROM node:16.12.0-alpine3.14 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:16.12.0-alpine3.14 AS runner
WORKDIR /app

# You only need to copy next.config.js if you are NOT using the default configuration
COPY . .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env
COPY docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENV NODE_ENV production

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "/entrypoint.sh" ]
