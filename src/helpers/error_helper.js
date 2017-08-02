
const getErrorMessages = (error) => {
  let messages = [];

  if (error) {
    if (error.name === 'SequelizeValidationError') {
      messages = error.errors.map(err => err.message);
    } else {
      messages = [ error.message ];
    };
  }

  return messages;
};

module.exports = { getErrorMessages };
