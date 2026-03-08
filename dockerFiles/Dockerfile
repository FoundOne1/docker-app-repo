FROM alpine:latest
COPY index.js package*.json /app
EXPOSE 3000
RUN apk add bash npm nodejs
RUN npm cache clean
RUN npm install
CMD ["npm","start"]
