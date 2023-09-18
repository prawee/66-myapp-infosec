# pull source image for buid
FROM node:16
# update latest os and install some package for buid
RUN apt-get update && apt-get install libvips-dev -y
# set up environment
ENV NODE_ENV=development
# change directory
WORKDIR /opt/
# copy file install
COPY ./package.json ./yarn.lock ./
# set up path
ENV PATH /opt/node_modules/.bin:$PATH
# custom time to build
RUN yarn config set network-timeout 600000 -g && yarn install
# set working directory to app
WORKDIR /opt/app
# copy all file to app folder
COPY ./ .
# build
RUN yarn build
# define port to run
EXPOSE 3000
# runing
CMD [ "yarn", "develop"]