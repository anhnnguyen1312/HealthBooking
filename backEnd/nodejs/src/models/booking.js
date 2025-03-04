"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: "patientId",
      });
      Booking.belongsTo(models.Allcode, {
        foreignKey: "timeType",
        targetKey: "keyMap",
        as: "timeTypeDataBooking",
      });
    }
  }
  Booking.init(
    {
      statusId: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
      email: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
      date: DataTypes.STRING,
      timeType: DataTypes.STRING,
      bookFor: DataTypes.STRING,
      nameScheduler: DataTypes.STRING,
      phoneNumberScheduler: DataTypes.STRING,
      namePatient: DataTypes.STRING,
      IDNumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      reason: DataTypes.STRING,
      nameDoctor: DataTypes.STRING,
      exactTime: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
      freezeTableName: true,
    }
  );
  return Booking;
};
