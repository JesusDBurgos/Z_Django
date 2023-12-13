#!/bin/bash
app="reactdockerv0:latest"
#docker build -t ${app} .
docker run -d -p 3000:3000 \
  --name=${app} \
  -v $PWD:/app ${app}