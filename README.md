<!-- @format -->

# Project Title

nodejs-sequelize-template

A boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and Sequelize.

By running a single command, you will get a production-ready Node.js app installed and fully configured on your machine. The app comes with many built-in features, such as authentication using JWT, request validation, pagination, etc. For more details, check the features list below.

## Inspiration

I have created this template to enable nodejs developers to start the project from scratch that is scalable, optimized and easy to maintain

## Build Status

This project is ready to deploy on any nodejs capable server

## Code Style

This project follows the approach of Model and controller structure

## Tech/Framework used

- Node.js (supported versions are 16 till 20)
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

Install Node.js version `16` or `20` (LTS)

Install yarn globally

```bash
  npm i -g yarn
```

Install sequelize-cli globally

```bash
  npm i -g sequelize-cli
```

## Quick Start

To create a project, simply run:

```bash
npx create-nodejs-sequelize-app <project-name>
```

Or

```bash
npm init create-nodejs-sequelize-app <project-name>
```
## Manual Installation
Clone the project

```bash
  git clone --depth 1 https://github.com/abdullahjavaid86/nodejs-sequelize-template
```

Go to the project directory

```bash
  cd nodejs-sequelize-template
```

Setup environment variables

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

| Parameter      | Type     | Description                                      |
| :------------- | :------- | :----------------------------------------------- |
| `x-auth-token` | `string` | **Required**. user authorization token in header |
