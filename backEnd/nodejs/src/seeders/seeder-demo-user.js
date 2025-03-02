"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *  email: ,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      image: DataTypes.STRING,

      
      admin
      email:nhupham@gmail.com
      pass:123456
     */

    return queryInterface.bulkInsert("Users", [
      {
        email: "anhnguyen@gmail.com",
        password: "123456",
        firstName: "anh",
        lastName: "nguyen",
        address: "187a le van luong",
        gender: 1,
        roleId: "R1",
        phone: "0792207233",
        positionId: "",
        isActive: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *rollback
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
