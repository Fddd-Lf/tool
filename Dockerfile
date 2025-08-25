FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm install -g pm2
EXPOSE 3000
CMD ["pm2-runtime", "start", "npm", "--", "start"]
