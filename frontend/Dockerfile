# base image
FROM node:20-alpine

# set working directory
WORKDIR /app

# copy packages
COPY package*.json ./

# install dependencies
RUN npm install

# copy source files
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["npm", "run","start"]