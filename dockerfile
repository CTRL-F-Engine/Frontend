FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .



RUN npm run build


FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

EXPOSE 3000
COPY package.json .
COPY vite.config.js .
RUN npm install typescript 
EXPOSE 3000
CMD ["npm","run","preview"]



