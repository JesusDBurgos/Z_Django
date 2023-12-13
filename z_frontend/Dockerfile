# base image
FROM node:18.12.1-alpine

# set working directory
WORKDIR /Z_Django/z_frontend
#WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /z_frontend/node_modules/.bin:$PATH

#COPY public/ /z_frontend/public
#COPY src/ /z_frontend/src

# El punto al final del package.json es importante
COPY package.json . 

# install and cache app dependencies
COPY package.json ./Z_Django/z_frontend/package.json
COPY package-lock.json ./Z_Django/z_frontend/package-lock.json

# add app
COPY . .
RUN npm install --silent

#Server Port expose
EXPOSE 3000

# start app
CMD ["npm", "start"]