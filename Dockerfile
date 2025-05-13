# Current LTS Node
# Current LTS Node
FROM node:22
WORKDIR /app

# Copy package files first (adjust paths to match your project structure)
COPY package.json .
COPY yarn.lock .
# Or if using npm:
# COPY package*.json ./

# Install dependencies
RUN yarn install
# Or if using npm:
# RUN npm install

# Copy the rest of your application
COPY . .

# Build the Medusa application
RUN yarn build
# Or if using npm:
# RUN npm run build

# Change to the build directory
WORKDIR /app/.medusa/server

# Install production dependencies in the build directory
RUN yarn install
# Or if using npm:
# RUN npm install

# Set to production mode
ENV NODE_ENV=production

# Start the server
CMD ["npm", "run", "start"]
# Or if using npm:
# CMD ["npm", "run", "start"]
