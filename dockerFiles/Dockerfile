FROM alpine:latest
COPY index.js package*.json /app
RUN apk add bash npm node
RUN npm i
CMD ["npm","start"]
