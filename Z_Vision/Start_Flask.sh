#!/bin/bash
app="flaskv:version01"
docker build -t ${app} .
docker run -d -p 8000:8000 \
  --name=${app} \
  -v $PWD:/app ${app}