# ---- Base ----
FROM node:18-alpine AS base

WORKDIR /app

# Habilita pnpm incluido con Node mediante Corepack
RUN corepack enable


# ---- Dependencias para compilar ----
FROM base AS deps

# Las rutas parten de la raíz del repositorio porque Root Directory está vacío.
COPY my-medusa-storefront/package.json ./
COPY my-medusa-storefront/pnpm-lock.yaml ./
COPY my-medusa-storefront/pnpm-workspace.yaml ./

# Se necesitan dependencias de desarrollo para turbo, TypeScript y medusa build.
RUN pnpm install --frozen-lockfile


# ---- Compilación ----
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY my-medusa-storefront/ ./

WORKDIR /app/apps/backend

# Genera el build autónomo en .medusa/server
RUN pnpm run build


# ---- Imagen de producción ----
FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Habilita pnpm también en la imagen final
RUN corepack enable

# Copia exclusivamente el servidor compilado de Medusa.
COPY --from=builder /app/apps/backend/.medusa/server ./

# Instala dependencias de ejecución del build generado.
RUN pnpm install --prod --frozen-lockfile

EXPOSE 9000

# Arranca el build de producción, no el código TypeScript fuente.
CMD ["pnpm", "exec", "medusa", "start"]