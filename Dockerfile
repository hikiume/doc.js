FROM node:16

USER root
RUN apt-get update
RUN apt-get install -y curl openjdk-11-jre-headless
RUN yarn add global firebase-tools
USER node
