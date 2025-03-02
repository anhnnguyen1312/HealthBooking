"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Blogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contentHTML: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      contentMarkdown: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      shortDescription: {
        allowNull: true,
        type: Sequelize.TEXT("long"),
      },
      UserId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      statusId: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      tittle: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      imageLogo: {
        allowNull: true,
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
    await queryInterface.dropTable("Blogs");
  },
};
