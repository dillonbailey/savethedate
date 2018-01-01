FROM mhart/alpine-node:9.3.0

# Create app directory
WORKDIR /app

# Install app dependencies
# COPY package.json .
# RUN yarn

# Bundle app src
COPY . .

# Build deploy directory
# RUN yarn blendid build
