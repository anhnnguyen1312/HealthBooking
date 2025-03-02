const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const db = require("../models/index");
const handleUserLogin = async (email, password) => {
  try {
    let userData = {};
    const emailIsExit = await checkUserEmail(email);
    if (emailIsExit) {
      // compare password
      let user = await db.User.findOne({
        where: { email: email },
        attributes: [
          "email",
          "roleId",
          "password",
          "firstName",
          "lastName",
          "image",
          "id",
        ],
        raw: true,
      });
      if (user) {
        let check = await bcrypt.compareSync(password, user.password);
        if (check) {
          userData.errCode = 0;
          userData.errMessage = "ok";
          delete user.password;
          userData.user = user;
        } else {
          userData.errCode = "3";
          userData.errMessage = "Wrong password";
        }
      } else {
        userData.errCode = "2";
        userData.errMessage = "User not found ";
      }
    } else {
      userData.errCode = "1";
      userData.errMessage = "Email is not exit";
    }
    return userData;
  } catch (error) {
    console.log(error);
  }
};
const checkUserEmail = async (email) => {
  try {
    const user = await db.User.findOne({ where: { email: email } });
    if (user) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

const handleGetAllcode = async (typeInput) => {
  try {
    let allCodeData = {};
    if (!typeInput) {
      allCodeData.errCode = 1;
      allCodeData.errMessage = "Missing required parameter";

      return allCodeData;
    } else {
      const data = await db.Allcode.findAll({ where: { type: typeInput } });
      console.log(data);
      allCodeData.errCode = 0;
      allCodeData.data = data;

      return allCodeData;
    }
  } catch (error) {
    // lỗi khi k thể thao tác với db
    console.log(error);
  }
};
const handlerGetAllUser = async () => {
  try {
    let allUser = {};

    const data = await db.User.findAll();
    console.log(data);
    allUser.errCode = 0;
    allUser.data = data;

    return allUser;
  } catch (error) {
    // lỗi khi k thể thao tác với db
    console.log(error);
  }
};
let handlercreateUser = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPsFromBycrypt = await hashUserPassword(user.password);
      //db.User.create({   email: userTypes.STRING,} tao du lieu moi vao table voi user la obj
      await db.User.create({
        email: user.email,
        phone: user.phone,
        password: hashPsFromBycrypt,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        gender: user.gender === "1" ? true : false,
        image: user.image,
        roleId: user.roleId || "R3",
        positionId: user.positionId,
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
let handlerdeleteUser = async (userId) => {
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
let handlerEditUser = async (userData) => {
  try {
    const user = await db.User.findOne({
      where: { id: userData.id },
      raw: false,
    });
    if (user) {
      user.firstName = userData.firstName;
      user.lastName = userData.lastName;
      user.address = userData.address;
      user.email = userData.email;
      user.phone = userData.phone;
      user.gender = userData.gender;
      user.roleId = userData.roleId;
      user.image = userData.image;
      user.positionId = userData.position;

      await user.save();
      let allUsers = await db.User.findAll();
      return user;
    }
  } catch (error) {}
};

module.exports = {
  handleUserLogin,
  checkUserEmail,
  handleGetAllcode,
  handlercreateUser,
  handlerdeleteUser,
  handlerEditUser,
  handlerGetAllUser,
};
