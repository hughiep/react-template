# Vite React Web3 Template

## Development

### Setup environment variables

```bash
cp .env.example .env
```

Update value for each key in `.env` file.

### Install dependencies

```bash
pnpm install --frozen-lockfile
```

Run the development server:

```bash
pnpm run dev
```

Open `localhost:[PORT]`, (`PORT` was set in `.env` file or default by `3001`) with your browser to see the result.

## Deployment

### Production build

Run command to build project for production

```bash
pnpm run build
```

Serve production build folder `dist` as static content.

### Production by Docker with Nginx

Build docker image

```bash
docker build -t vite-react-web3-template .
```

Run docker container

```bash
docker run -p [PORT]:80 vite-react-web3-template
```
