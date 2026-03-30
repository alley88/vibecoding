FROM registry.cn-hangzhou.aliyuncs.com/library/node:22-alpine AS base

WORKDIR /app

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

RUN apk add --no-cache libc6-compat python3 make g++

RUN npm install -g pnpm --registry=https://registry.npmmirror.com

# ======================
# deps
# ======================
FROM base AS deps

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

# ======================
# builder
# ======================
FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED=1 \
    OUT_DIR=dist

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

# ======================
# runner
# ======================
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/dist/standalone ./

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]