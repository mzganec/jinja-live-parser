FROM ubuntu

MAINTAINER Matjaz Zganec "mzganec@gmail.com"

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

WORKDIR /app

COPY ./requirements.txt /app

RUN pip install -r requirements.txt

COPY ./app.py /app

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]

