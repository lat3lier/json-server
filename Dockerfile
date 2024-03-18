ARG PORT=80
FROM node:latest
MAINTAINER Frédéric LASNIER<fred@ouetquand.biz>

RUN npm install -g json-server

WORKDIR /data
VOLUME /data

EXPOSE ${PORT}
ADD start.sh /start.sh
ENTRYPOINT ["bash", "/start.sh"]
CMD []