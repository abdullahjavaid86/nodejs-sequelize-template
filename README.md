
# Project Title

nodejs-sequelize-template

## Inspiration

I have created this template to enable nodejs developers to start the project from scratch that is scalable, optimized and easy to maintain

## Build Status

This project is ready to deploy on any nodejs capable server

## Code Style

This project follows the approach of Model and controller structure

## Tech/Framework used

- Node.js 14 or 16
- express
- yarn
- socket.io
- mysql
- sequelize ORM
- rate-limiter
- cors
- jwt

## Features

- prettier
- eslint
- husky
- swagger
- joi validation
- image resize option
- module aliases (see `jsconfig.json` for reference)
- middlewares

# Run Locally

Install Node.js version `14` or `16`

Install yarn globally

```bash
  npm i -g yarn
```

Install sequelize-cli globally

```bash
  npm i -g sequelize-cli
```

Clone the project

```bash
  git clone https://github.com/abdullahjavaid86/nodejs-sequelize-template
```

Go to the project directory

```bash
  cd nodejs-sequelize-template
```

Setup environemnt variables

```bash
  cp .env.example .env
```

Setup environment variable in `.env` specially `DATABASE_*`

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

## Database Setup

- Run `yarn migration:up` to migrate tables in database

## Database Seeders

- Run `yarn seed:all` to insert initial data into database

### Notice

Take a look at `scripts` in package.json to get familiar with all available commands.
To check the server open the browser and enter <http://localhost:4000>

## Authors

- [@abdullahjavaid86](https://www.github.com/abdullahjavaid86)

## API Reference

### Get all users

```http
  GET /api/v1/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | **Required**. user authorization token in header |
