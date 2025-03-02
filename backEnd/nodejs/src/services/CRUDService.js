const bcrypt = require("bcryptjs");
const db = require("../models/index");
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPsFromBycrypt = await hashUserPassword(data.password);
      //db.User.create({   email: DataTypes.STRING,} tao du lieu moi vao table voi data la obj
      await db.User.create({
        email: data.email,
        phone: data.phone,
        password: hashPsFromBycrypt,
        firstName: data.firstname,
        lastName: data.lastname,
        address: data.address,
        gender: data.gender === "1" ? true : false,

        roleId: data.roleId,
      });
      resolve("ok create new user success");
    } catch (error) {
      reject(error);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPs = await bcrypt.hashSync(password, salt);
      resolve(hashPs);
    } catch (error) {
      reject(error);
    }
  });
};
const getAllUsers = async () => {
  try {
    const users = await db.User.findAll({ raw: true });
    return users;
  } catch (error) {
    console.log(error);
  }
};
// let getAllUsers = () => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const users = await db.Users.findAll()
//         resolve(users);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
const getUserById = async (userId) => {
  try {
    const users = await db.User.findOne({ where: { id: userId }, raw: true });
    if (users) {
      return users;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};
const updateUserData = async (data) => {
  try {
    //   const users = await db.User.findOne({ where: { id: userId }, raw: true });
    //   if (users) {
    //     return users;
    //   } else {s
    //     return [];
    //   }
    const user = await db.User.findOne({
      where: { id: data.id },
      raw: false,
    });
    if (user) {
      user.firstName = data.firstname;
      user.lastName = data.lastname;
      user.address = data.address;
      await user.save();
      let allUsers = await db.User.findAll();
      return allUsers;
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteUserById = async (userId) => {
  try {
    const user = await db.User.findOne({
      where: { id: userId },
      raw: false,
    });
    if (user) {
      await user.destroy();
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserData,
  deleteUserById,
};
