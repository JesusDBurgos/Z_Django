FROM python:3.7.0

# set working directory
WORKDIR /Z_Django/Z_Vision

# add requirements
COPY ./requirements.txt ./Z_Django/Z_Vision/requirements.txt

#add app
COPY . .

# install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000

# run server
CMD python src/Api.py run -h 0.0.0.0