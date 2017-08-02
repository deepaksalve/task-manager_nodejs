
module.exports = (app, models, helpers) => {
  const { Task } = models;
  const { getErrorMessages } = helpers;
  const getAllTask = () => Task.findAll();

  return {
    new: (req, res) => res.render('tasks/new'),

    create: (req, res) => {
      const { name, description } = req.body;

      Task
        .build({ name, description })
        .validate()
        .then(newTask => {
          newTask
            .save()
            .then(() => {
              req.session.flash = {
                type: 'success',
                messages: [ 'Successfully created a task.' ]
              };

              res.redirect('/tasks')
            });
        })
        .catch(error => {
          req.session.flash = {
            type: 'danger',
            messages: getErrorMessages(error)
          };

          res.back();
        });
    },

    index: (req, res) => {
      getAllTask()
        .then(tasks => {
          res.render('tasks/index', { tasks })
        })
        .catch(error => {
          req.session.flash = {
            type: 'danger',
            messages: getErrorMessages(error)
          };

          res.back();
        });
    },

    edit: (req, res) => {
      const taskId = req.params.id;
      const { name, description, status } = req.body;

      if (taskId && name && description && status) {
        Task
          .update(
            { name, description, status },
            { where: { id: taskId }}
          )
          .then(result => {
            req.session.flash = {
              type: 'success',
              messages: [ 'Successfully updated the task.' ]
            };

            res.redirect('/tasks')
          })
          .catch(error => {
            req.session.flash = {
              type: 'danger',
              messages: getErrorMessages(error)
            };

            res.back();
          });
      } else {
        req.session.flash = {
          type: 'danger',
          messages: [ 'The Name and/or Description fields can not be empty.' ]
        };

        res.back();
      }
    },

    delete: (req, res) => {
      Task
        .destroy({ where: { id: req.params.id }})
        .then((deletedTask) => {
          if (deletedTask === 1) {
            req.session.flash = {
              type: 'success',
              messages: [ 'Successfully deleted the task.' ]
            };

            res.redirect('/tasks'); //200
          } else {
            req.session.flash = {
              type: 'info',
              messages: [ 'Task not found.' ]
            };

            res.redirect('/tasks'); // 404
          }
        })
        .catch((error) => {
          req.session.flash = {
            type: 'danger',
            messages: getErrorMessages(error)
          };

          res.redirect('/tasks'); //500
        });
    }
  }
};
