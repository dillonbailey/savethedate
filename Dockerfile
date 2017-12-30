FROM mhart/alpine-node:9.3.0

# RUN mkdir /tmp/gulp-starter/
# RUN touch /tmp/gulp-starter/rev-manifest.json

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./

RUN yarn
RUN npm rebuild node-sass

# Bundle app src
COPY . .
