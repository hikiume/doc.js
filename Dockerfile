FROM node:16

WORKDIR /node

# java
RUN apt-get update
RUN apt-get install -y curl openjdk-11-jre-headless
# node & firebase
RUN npm i -g create-react-app
RUN npm i -g npm@9.1.1
RUN npm i react-router-dom
RUN npm i prop-types
RUN npm i -g firebase 
RUN npm i -g firebase-tools 