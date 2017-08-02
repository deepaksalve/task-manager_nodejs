
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');
const setup = require('./setup');
const models = require('./models');

const app = express();
const port = process.env.PORT || '3000';

// Setup view engine. Here we are using EJS.
setup.viewEngine(app);

// Add logger.
app.use(logger('dev'));

// Setup public directory and favicon.
setup.publicDir(app, express);

// Setup flash messaging
setup.flash(app);

// Add body parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add middleware to navigate to the previous url.
app.use((req, res, next) => {
  const referer = req.header('Referer') || '/';
  res.back = () => res.redirect(referer);

  next();
});

// Register routes
app.use(routes(app, express));

// Add error handler.
setup.errorHandler(app);

// Start application
app.set('port', port);
models.sequelize.sync().then(() => {
  app.listen(port, (err) => {
    if (err) throw err;
    console.log('App is running on [::]:%d', port);
  });
});

module.exports = app;
