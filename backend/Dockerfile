FROM python:3.11-alpine3.17
LABEL maintainer="https://www.linkedin.com/in/kyle-bradshaw-15950988/"

ENV PYTHONUNBUFFERED 1

WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .