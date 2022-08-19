FROM node:16.14.2

LABEL version="1.0" description="node image"

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD {"yarn", "start"}

