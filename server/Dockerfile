FROM node:lts-alpine

WORKDIR /usr/src/raftapi

COPY package*.json ./

RUN apk --no-cache add curl
RUN npm install

COPY . .

EXPOSE 8888

CMD ["npm", "start"]