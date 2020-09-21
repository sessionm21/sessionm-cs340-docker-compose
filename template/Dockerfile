FROM node:12
WORKDIR /usr/src/app
COPY ./src/ ./

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]
