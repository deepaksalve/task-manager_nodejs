
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const helpers = require('./../helpers');

module.exports = (app, models) => {
  const basename = path.basename(module.filename);
  const controllers = {};

  fs.readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const controller = path.basename(file, path.extname(file));
      const controllerName = _.camelCase(controller);

      controllers[controllerName] = require('./' + controller)(app, models, helpers);
    });

  return controllers;
};
