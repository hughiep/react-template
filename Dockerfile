FROM node:22-alpine as build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Enable pnpm from corepack
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

COPY . .

# Build the app
RUN pnpm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
