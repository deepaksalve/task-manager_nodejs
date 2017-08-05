# task-manager_nodejs
Task Manager application usnig NodeJS, ExpressJS, MySQL, SequelizeJS and EJS templates.

### To Run:
###### Create configuration files and update their content as required.
  1. Create a  `database.json` file from `database.sample.json` in `config` directory.
      * `$ cp src/config/database.sample.json src/config/database.json`
      * Note: You need to manually create the database with same name in MySQL by using MySQL console.
      * To create database in MySQL use `$ create database database_name`
  2. Create a  `secrets.json` file from `secrets.sample.json` in `config` directory.
      * `$ cp src/config/secrets.sample.json src/config/secrets.json`

###### Install project dependencies.
  * `$ npm install` or `$ yarn install`

###### Run grunt command to copy assets to public directory and to generate CSS from SASS.
  * `$ npm run build:assets` or `$ yarn run build:assets`

###### Then finally run the app.js file to start server.
  * `$ npm run serve` or `$ yarn run serve`
