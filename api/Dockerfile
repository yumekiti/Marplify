FROM node:18.18.2-alpine

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile && \
    yarn build

EXPOSE 3000

CMD ["yarn", "start"]