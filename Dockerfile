FROM node:17-alpine as builder

RUN npm install -g npm@latest

WORKDIR /crm-itrun-front
COPY ./crm-itrun-front/package*.json ./
RUN npm i

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /crm-itrun-front/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
