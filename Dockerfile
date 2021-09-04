# Use latest alpine directory
FROM node:16-alpine

# set working directory
WORKDIR /app

# set path
ENV PATH /app/node_modules/.bin:$PATH

ADD src /app/src
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# start app
CMD ["npm", "start"]