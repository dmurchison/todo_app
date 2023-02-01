# FRONTEND
FROM python:3.9-alpine

RUN pip install pipenv
RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app
COPY Pipfile Pipfile.lock main.py ./

RUN pipenv install --system

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]


# BACKEND
FROM node:14-alpine

RUN npm install -g @nestjs/cli
RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install


