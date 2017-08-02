const viewEngine = require('./view_engine');
const errorHandler = require('./error_handler');
const publicDir = require('./public_dir');
const flash = require('./flash');

module.exports = {
  viewEngine,
  errorHandler,
  publicDir,
  flash
};
