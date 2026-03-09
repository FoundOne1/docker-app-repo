FROM alpine:latest
WORKDIR /app
COPY index.js package*.json /app
EXPOSE 3000
RUN apk add bash npm nodejs
RUN npm ci
CMD ["npm","run start:test"]
