"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Markdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Markdown.belongsTo(models.User, {
        foreignKey: "doctorId",
        // targetKey: "id",
        // as: "markdownData",
      });
    }
  }
  Markdown.init(
    {
      contentHTML: DataTypes.TEXT,
      contentMarkdown: DataTypes.STRING,
      description: DataTypes.TEXT,

      doctorId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Markdown",
      freezeTableName: true,
    }
  );
  return Markdown;
};
