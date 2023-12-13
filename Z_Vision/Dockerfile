FROM python:3.7.0

# set working directory
WORKDIR /Z_Django/Z_Vision

# add requirements
COPY ./requirements.txt ./Z_Django/Z_Vision/requirements.txt

# install requirements
RUN pip install -r requirements.txt

# add app
COPY . ./Z_Django/Z_Vision

EXPOSE 8000

# run server
CMD python Api.py run -h 0.0.0.0