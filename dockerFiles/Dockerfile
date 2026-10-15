FROM alpine:latest
WORKDIR /app
COPY index.js index.html package*.json ./
COPY views/ ./views/
EXPOSE 3000
RUN apk add bash npm nodejs
RUN npm ci
CMD ["npm","run","start"]
