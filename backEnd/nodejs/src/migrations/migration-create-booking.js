// "use strict";
// export default {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable("Users", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       firstName: {
//         type: Sequelize.STRING,
//       },
//       lastName: {
//         type: Sequelize.STRING,
//       },
//       email: {
//         type: Sequelize.STRING,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable("Users");
//   },
// };
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      statusId: {
        type: Sequelize.INTEGER,
      },
      doctorId: {
        type: Sequelize.INTEGER,
      },
      patientId: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.STRING,
      },
      timeType: {
        type: Sequelize.STRING,
      },
      bookFor: {
        type: Sequelize.STRING,
      },
      nameScheduler: {
        type: Sequelize.STRING,
      },
      phoneNumberScheduler: {
        type: Sequelize.INTEGER,
      },
      namePatient: {
        type: Sequelize.STRING,
      },
      IDNumber: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      reason: {
        type: Sequelize.STRING,
      },
      reason: {
        type: Sequelize.STRING,
      },
      nameDoctor: {
        type: Sequelize.STRING,
      },
      exactTime: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Bookings");
  },
};
