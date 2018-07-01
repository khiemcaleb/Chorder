### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:9.11.2-alpine as builder

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN ng build --prod --env=staging


### STAGE 2: Setup ###

FROM nginx:1.15.0-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]