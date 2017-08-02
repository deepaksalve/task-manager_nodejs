# task-manager_nodejs
Task Manager application usnig NodeJS, ExpressJS, SequelizeJS and EJS templates.

### To Run:
###### Create configuration files and update their content as required.
  1. Create a  `database.json` file from `database.sample.json` in `config` directory.
  1. Create a  `secrets.json` file from `secrets.sample.json` in `config` directory.

###### Install project dependencies.
  * `$ npm install` or `yarn install`

###### Run grunt command to copy assets to public directory and to generate CSS from SASS.
  * `$ npm run build:assets` or `$ yarn run build:assets`

###### Then finally run the app.js file to start server.
  * `$ npm run serve` or `$ yarn run serve`
