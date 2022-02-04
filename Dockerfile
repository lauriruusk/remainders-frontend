# FROM node:16-bullseye-slim as build-stage
# RUN apt update && \
#     apt install -y wget ca-certificates && \
#     update-ca-certificates

# ENV JQ_VERSION=1.6
# RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
# RUN cp /tmp/jq-linux64 /usr/bin/jq
# RUN chmod -x /usr/bin/jq
# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json
# RUN npm run build

# FROM nginx:1.21
# ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js
# COPY ./start-nginx.sh /usr/bin/start-nginx.sh
# RUN chmod +x /usr/bin/start-nginx.sh
# COPY --from=build-stage /usr/src/app/build/. /usr/share/nginx/html/

# COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# ENTRYPOINT [ "start-nginx.sh" ]

# build environment
FROM node:16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts -g --silent
COPY . ./
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]