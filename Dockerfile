FROM node:8.11.4-alpine


WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY run.js .

RUN npm install
COPY node_modules ./node_modules


ENTRYPOINT ["npm", "start"]
CMD ["google.com"]