FROM mhart/alpine-node:9.3.0

# RUN mkdir /tmp/gulp-starter/
# RUN touch /tmp/gulp-starter/rev-manifest.json

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
# RUN yarn blendid build
# RUN yarn blendid build
EXPOSE 3000
CMD ["yarn", "blendid"]