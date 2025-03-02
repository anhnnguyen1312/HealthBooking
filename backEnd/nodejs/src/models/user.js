"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Allcode, {
        foreignKey: "positionId",
        targetKey: "keyMap",
        as: "positionData",
      });
      User.belongsTo(models.Allcode, {
        foreignKey: "gender",
        targetKey: "keyMap",
        as: "genderData",
      });
      User.hasOne(models.Markdown, {
        foreignKey: "doctorId",
      });
      User.hasOne(models.Doctor_infor, {
        foreignKey: "doctorId",
      });
      User.hasOne(models.Booking, {
        foreignKey: "patientId",
      });
      User.hasOne(models.Blogs, {
        foreignKey: "UserId",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.STRING,
      positionId: DataTypes.STRING,
      isActive: DataTypes.TINYINT(1),
      roleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
// import Model from "sequelize";
// export default function (sequelize, DataTypes) {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init(
//     {
//       firstName: DataTypes.STRING,
//       lastName: DataTypes.STRING,
//       email: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// }
