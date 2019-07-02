FROM node:latest
# ADD .env /app

WORKDIR /app
ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm i -g @adonisjs/cli
RUN npm install sqlite3 --save
# RUN adonis new primeiro_projeto
# RUN cd primeiro_projeto

# RUN cd /tmp && npm install
# RUN mkdir -p /tmp
ADD . .
CMD [ "adonis", "serve", "--dev" ]
