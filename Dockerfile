# base on latest ruby base image
FROM node:8.9.3-alpine

# setup app folders
RUN mkdir /app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn
RUN yarn build
# If you are building your code for production
# RUN npm install --only=production


# Bundle app source
COPY . .