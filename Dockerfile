# ---- Build stage ----
  FROM node:20-slim AS builder
  WORKDIR /app

  # Some native deps want build tools at install time
  RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 make g++ \
      && rm -rf /var/lib/apt/lists/*

  COPY package*.json ./
  RUN npm ci

  COPY . .
  RUN npm run build

  # ---- Runtime stage ----
  FROM node:20-slim
  WORKDIR /app
  ENV NODE_ENV=production

  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/node_modules ./node_modules

  EXPOSE 3000
  CMD ["npm", "start"]