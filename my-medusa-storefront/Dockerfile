# ---- Base ----
FROM node:20-alpine AS base

WORKDIR /app


# ---- Dependencias de compilación ----
FROM base AS deps

# El contexto sigue siendo la raíz del repositorio.
# El Dockerfile está en my-medusa-storefront/, pero COPY parte de la raíz.
COPY package.json package-lock.json* ./
COPY my-medusa-storefront/package.json ./my-medusa-storefront/package.json
COPY my-medusa-storefront/apps/backend/package.json ./my-medusa-storefront/apps/backend/package.json

RUN npm install


# ---- Build ----
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

WORKDIR /app/my-medusa-storefront/apps/backend

# El packageManager del backend solicita npm
RUN npm run build


# ---- Producción ----
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copia el servidor autónomo producido por medusa build
COPY --from=builder /app/my-medusa-storefront/apps/backend/.medusa/server ./

# Instala únicamente dependencias de producción del build generado
RUN npm install --omit=dev

EXPOSE 9000

CMD ["npx", "medusa", "start"]