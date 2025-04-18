# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy all source files
COPY . .

# Expose port
EXPOSE $PORT


# Start command
CMD ["npm","run","start"]