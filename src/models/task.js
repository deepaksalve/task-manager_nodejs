'use strict';
const moment = require('moment');
const _ = require('lodash');

module.exports = function(sequelize, DataTypes) {
  const Task = sequelize.define('Task', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 20],
          msg: "Name must be atleast 1 character and atmost 20 characters in length."
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1, 200],
          msg: "Description must be atleast 1 character and atmost 200 characters in length."
        }
      }
    },
    status: {
      type: DataTypes.ENUM('Completed', 'Pending'),
      defaultValue: 'Pending'
    },
    dateCreated: {
      field: 'created_at',
      type: DataTypes.DATE,
      get: function() {
        return moment.utc(this.getDataValue('dateCreated')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    dateUpdated: {
      field: 'updated_at',
      type: DataTypes.DATE,
      get: function() {
        return moment.utc(this.getDataValue('dateUpdated')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }, {
    timestamps  : true,
    underscored : true,
    getterMethods: {
      isCompleted() {
        return this.status === 'Completed';
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Task;
};
