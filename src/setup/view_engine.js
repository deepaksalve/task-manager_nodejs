
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

module.exports = (app) => {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.use(ejsLayouts);
  app.set('layout extractScripts', true);
  app.set('layout extractStyles', true);

  return app;
};
