FROM node:18.04

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD npm start