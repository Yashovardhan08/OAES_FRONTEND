# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm","start"]
FROM node:alpine as temp
WORKDIR /app
COPY package.json  ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "start"]
# RUN npm run build
# RUN ls /app/build
# FROM nginx:stable-alpine
# COPY --from=temp /app/build/ /usr/share/nginx/html
# EXPOSE 80