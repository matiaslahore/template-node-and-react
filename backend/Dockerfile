FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

ENV MYSQL_DATABASE: 'db'
ENV MYSQL_USER: 'db_user'
ENV MYSQL_PASSWORD: '123456'
ENV MYSQL_ROOT_PASSWORD: '123456'


CMD ["npm", "start"]
