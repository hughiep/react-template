FROM node:22-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Prepare pnpm
RUN corepack enable pnpm && corepack install -g pnpm@latest-10

# Production build
FROM base AS prod
WORKDIR /app

COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . /app

RUN pnpm install --offline
RUN pnpm run build

# Nginx server
FROM nginx:1.26.3-alpine-slim

COPY --from=prod /app/dist /usr/share/nginx/html
COPY --from=prod /app/.docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
