# Herzens Verbundenheit - Coolify Deployment

This project is configured for deployment on Coolify using Docker.

## Files Created for Coolify

- `Dockerfile` - Multi-stage build for React/Vite app with Nginx
- `docker-compose.yml` - Coolify-compatible compose file
- `nginx.conf` - Nginx configuration for serving the React app
- `.dockerignore` - Optimizes Docker build context

## Deployment Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Add Coolify deployment configuration"
   git push origin main
   ```

2. **Deploy on Coolify**
   - Create a new project in Coolify
   - Connect your Git repository
   - Coolify will automatically detect the `docker-compose.yml` file
   - Deploy the project

## Local Testing

To test the Docker setup locally:

```bash
# Build the image
docker build -t herzens-verbundenheit-web .

# Run the container
docker run -d -p 3010:3010 --name herzens-test herzens-verbundenheit-web

# Test the website
curl http://localhost:3010

# Clean up
docker stop herzens-test && docker rm herzens-test
```

## Project Structure

- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Build**: Multi-stage Docker build (Node.js → Node.js serve)
- **Server**: Node.js with serve package
- **Port**: 3010 (configurable via environment)

## Features

- ✅ Client-side routing support
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Security headers
- ✅ Health checks
- ✅ Production-optimized build

## Environment Variables

No environment variables are required for this static frontend application.

## Custom Domain

After deployment, you can configure a custom domain in Coolify settings.
