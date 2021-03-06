'use strict';
module.exports = (sequelize, DataTypes) => {
  var Criterion = sequelize.define('Criterion', {
    text: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
      }
    },
    level: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 4,
        isInt: true
      }
    },
    answer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Criterion.associate = function(models) {
    // Criterion has many Actions
    models.Criterion.hasMany(models.Action, {
      foreignKey: 'criterionId'
    });
  };

  return Criterion;
};
