const cntrl = require('../controllers');
const models = require('../models');

module.exports = (app, express) => {
  const Router = express.Router();
  const C = cntrl(app, models);

  Router.route('/tasks')
    .get(C.tasksController.index)
    .post(C.tasksController.create);

  Router.get('/tasks/new', C.tasksController.new);
  Router.get('/tasks/:id/delete', C.tasksController.delete);

  Router.post('/tasks/:id/edit', C.tasksController.edit);

  // A root route that redirects to /tasks
  Router.get('/', (req, res) => res.redirect('/tasks'));

  return Router;
}
