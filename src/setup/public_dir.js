
const path = require('path');
const favicon = require('serve-favicon');

module.exports = (app, express) => {
  const dir = path.join(__dirname, '../../public')

  app.use(favicon(path.join(dir, 'favicon.ico')));
  app.use(express.static(dir));

  return app;
};
