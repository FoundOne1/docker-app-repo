FROM alpine:latest
WORKDIR /app
COPY index.js package*.json /app
EXPOSE 8080
RUN apk add bash npm nodejs
RUN npm ci
CMD ["npm","run","start:test"]
