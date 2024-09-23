# Description

Mi Tienda en Línea is a sleek and modern landing page template, designed to help you create visually appealing and highly responsive websites with ease. Powered by Next.js and React, it offers dynamic routing, server-side rendering, and SEO-friendly architecture, ensuring optimal performance and user experience on any device.

# Development

Steps to start the app in development

1. Rename the .env.example to .env
2. Replace the enviroment variables
3. Execute the command:

```
npm install
```

4. Set up the db

```
docker-compose up -d
```

5. Execute these prisma commands:

```
npx prisma migrate dev; npx prisma generate
```

6. Execute SEED

```
npm run seed
```

7. Run server with command:

```
npm run dev
```

# Notes: default user

Default user data in the seed file

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
