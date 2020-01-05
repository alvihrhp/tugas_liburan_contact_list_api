'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Contact extends Model{}
  Contact.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {sequelize});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};