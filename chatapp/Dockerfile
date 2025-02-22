FROM node:latest

WORKDIR /chatapp

RUN npm install -g pnpm

COPY package.json ./

RUN pnpm install


EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
