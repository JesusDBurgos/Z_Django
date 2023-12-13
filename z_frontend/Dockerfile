# base image
FROM node:18.12.1-alpine

# set working directory
WORKDIR /Z_Django/z_frontend
#WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /z_frontend/node_modules/.bin:$PATH

# El punto al final del package.json es importante
COPY package.json . 

# install and cache app dependencies
COPY package.json ./Z_Django/z_frontend/package.json
COPY package-lock.json ./Z_Django/z_frontend/package-lock.json
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
EXPOSE 4000

# start app
CMD ["npm", "start"]