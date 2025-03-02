"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Specialization.hasMany(models.Doctor_infor, {
      //   foreignKey: "specialtyId",
      //   as: "specialtyTypeData",
      // });
      Specialization.hasMany(models.Doctor_infor, {
        foreignKey: "specialtyId",
      });
    }
  }
  Specialization.init(
    {
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialization",
      freezeTableName: true,
    }
  );
  return Specialization;
};
