This project is done with next js, mysql, graphl
For the frontend part all the funationalietes including the card slider and swipe on mobile screens have been implemented from scratch and no external packages have been used

<hr>

## Getting Started

First, run the development server (for local):

```bash
npm install
npm run dev
```

### Run on Docker

**1. Build and Run**

```sh
   docker-compose up -d
```

**2. Prisma Database Push**

```sh
    docker-compose run nextjs npx prisma db push
```

**3. Fake Data Seeder**
Default count 1000 and maximum 100000

```sh
    docker-compose run nextjs npx prisma db seed
    docker-compose run nextjs npx prisma db seed -- --records 10000
```

Project runs on localhost:3000