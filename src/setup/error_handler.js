
module.exports = (app) => {
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res, next) {
    const error = req.app.get('env') === 'development' ? err : { message: err.message };
    const status = error.status || 500;

    res.status(status);
    res.render(`errors/${status}`);
  });

  return app;
};
