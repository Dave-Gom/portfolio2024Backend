FROM node:21-alpine3.18

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .

EXPOSE 3000

# ENTRYPOINT [ "sh","docker/entrypoint.sh" ]

RUN yarn install

CMD [ "yarn", "dev" ]


