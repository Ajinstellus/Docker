FROM node:20-alpine AS build

LABEL author="Ajin"
LABEL project="React-js"

WORKDIR /app
COPY my-app ./

RUN npm install 
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
