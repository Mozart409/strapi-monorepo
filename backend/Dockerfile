FROM node:14.16.1

LABEL authors="Amadeus Mader"
LABEL name="strapi-monorepo"
LABEL description="Strapi CMS for XYZ"


ENV NODE_ENV production  \
  DATABASE_CLIENT postgres \
  DATABASE_HOST db \
  DATABASE_PORT 5432 \
  DATABASE_NAME strapi \
  DATABASE_USERNAME strapi \
  DATABASE_PASSWORD strapi


EXPOSE 1337

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
