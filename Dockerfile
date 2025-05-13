FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN npm install

COPY . .

# Build the Medusa application (including admin)
RUN npx medusa build

# Install dependencies in the build output directory
WORKDIR /app/.medusa/server
RUN npm install

# Set environment variable for production
ENV NODE_ENV=production

# Start the Medusa server
CMD ["npm", "run", "start"]