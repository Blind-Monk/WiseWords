FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY backend ./backend

RUN npm install
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 8080

CMD ["npm", "run", "dev"]
