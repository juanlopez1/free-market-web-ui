FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:20 AS runner

WORKDIR /app

COPY --from=builder /app ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start"]
