'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    type: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: false,
    underscored: true
  });
  Pet.associate = function(models) {
    // associations can be defined here
    //Pet belongsTo Owner
    Pet.belongsTo(models.Owner);
  };
  return Pet;
};