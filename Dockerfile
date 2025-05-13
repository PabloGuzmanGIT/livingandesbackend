FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
COPY ./yarn.lock? .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]