ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine
ENV RUNNING_FILE=http.js \
    PORT=6000

WORKDIR /app
RUN npm install -g nodemon

CMD nodemon ${RUNNING_FILE}