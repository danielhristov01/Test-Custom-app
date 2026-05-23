# ---- Build stage ----
  FROM node:20-alpine AS builder
  WORKDIR /app

  # Install dependencies first (better layer caching)
  COPY package*.json ./
  RUN npm ci

  # Copy the rest of your source and build
  COPY . .
  RUN npm run build

  # ---- Runtime stage ----
  FROM node:20-alpine
  WORKDIR /app
  ENV NODE_ENV=production

  # Copy only what's needed to run
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/node_modules ./node_modules

  EXPOSE 3000
  CMD ["npm", "start"]