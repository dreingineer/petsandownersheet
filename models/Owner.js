'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    name: DataTypes.STRING
  }, {
    paranoid: false,
    underscored: true
  });
  Owner.associate = function(models) {
    // associations can be defined here
    Owner.hasMany(models.Pet);
  };
  return Owner;
};