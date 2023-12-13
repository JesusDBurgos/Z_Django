#!/bin/bash
app="reactdockerv0:latest"
docker build -t ${app} .
docker run -d -p 4000:80 \
  --name=${app} \
  -v $PWD:/app ${app}