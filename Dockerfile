FROM mhart/alpine-node:9.3.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN yarn

# Bundle app src
COPY . .

# whether or not we run this here, we still have to run it in
# codeship-steps.yml, otherwise it will not persist?
# RUN yarn blendid build