# ---- Base ----
FROM node:18-alpine AS base
WORKDIR /app

# ---- Dependencias para compilar ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build de Medusa ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

WORKDIR /app/my-medusa-storefront/apps/backend

RUN npm run build

# ---- Imagen de producción ----
FROM node:18-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# Copia el resultado compilado de Medusa
COPY --from=builder /app/my-medusa-storefront/apps/backend/.medusa ./.medusa

# Medusa requiere instalar las dependencias del build generado
WORKDIR /app/.medusa/server

RUN npm install --omit=dev

EXPOSE 9000

CMD ["npx", "medusa", "start"]