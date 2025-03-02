"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blogs.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  Blogs.init(
    {
      contentHTML: DataTypes.STRING,
      contentMarkdown: DataTypes.STRING,
      shortDescription: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      statusId: DataTypes.STRING,
      tittle: DataTypes.STRING,
      imageLogo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blogs",
      freezeTableName: true,
    }
  );
  return Blogs;
};
