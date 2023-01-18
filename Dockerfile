FROM node:14

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

RUN npm uninstall bcrypt

RUN npm install bcrypt


EXPOSE 8080

CMD ["npm", "start"]