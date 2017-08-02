const cookieParser = require('cookie-parser');
const session = require('express-session');
const connectFlash = require('connect-flash');
const secrets = require('./../config/secrets.json');

module.exports = (app) => {
  app.use(cookieParser(secrets.cookieSecret));
  app.use(session({
    secret: secrets.sessionSecret,
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
  }));

  app.use(connectFlash());

  app.use(function(req, res, next){
    var flash = req.session.flash;

    delete req.session.flash;

    if (flash) {
      res.locals.flash = {
        type: flash.type || '',
        messages: flash.messages || []
      };
    }
    next();
  });
};
