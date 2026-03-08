FROM alpine:latest
COPY index.js package*.json /app
RUN apk add bash npm nodejs
RUN npm cache clean --force
RUN npm install
CMD ["npm","start"]
