"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetails.init(
    {
      name: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserDetails",
    }
  );
  UserDetails.associate = function (models) {
    UserDetails.hasOne(models.Credential);
  };
  return UserDetails;
};
