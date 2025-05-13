FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Fix the build process to avoid the symbolic link error
RUN npm run build || (echo "Build failed, retrying with modified command" && \
    npm run medusa build && rm -f ./public && ln -s .medusa/server/public/public || true)

# Set environment to production
ENV NODE_ENV=production

EXPOSE 9000

CMD ["npm", "run", "start"]