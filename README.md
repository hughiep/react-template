# Simple and Minimal React template

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v22.x or newer)
- [pnpm](https://pnpm.io/installation) (v10.x or newer)

### Setup environment variables

```bash
cp .env.development .env
```

Update all environment variables in `.env` file.

### Install dependencies

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open `localhost:[PORT]`, (`PORT` was set in `.env` file or default by `3001`) with your browser to see the result.

## Deployment

### Production build

Run the following command to build the project for production:

```bash
pnpm run build
```

Serve the production build folder `dist` as static content.

### Deploy with Docker and Nginx

Build the docker image

```bash
docker build -t react-template -f .docker/Dockerfile .
```

Run the docker container

```bash
docker run -p [PORT]:80 react-template
```
