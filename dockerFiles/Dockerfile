FROM alpine:latest
COPY index.js package*.json /app
RUN apk add bash npm nodejs
RUN npm install
CMD ["npm","start"]
