# Restaurant App for MIT xPro

## Description

This website allows users to order food from restaurants.

## Features

* Create a user account
* View and order food by restaurant
* Pay for order

## Technologies and Uses

* Next.js - UI, navigation
* Apollo with GraphQL - data management for users, restaurants, food, and orders
* Strapi API - API management
* Stripe API - payment processor

Note: This app uses [React Context](https://reactjs.org/docs/context.html) and Strapi to register and log in users.

## Installation

Clone this repo:

`git clone https://github.com/robertcdawson/mit-bad-bank.git`

In the project's root directory, run:

`yarn dev`

Then, in /backend, run:

`yarn develop`

This runs the frontend and backend of this app in development mode.

Once both have started, go to [http://localhost:3000](http://localhost:3000).

## License

MIT