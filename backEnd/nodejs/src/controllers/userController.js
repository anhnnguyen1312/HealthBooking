const {
  handleUserLogin,
  handleGetAllcode,
  handlercreateUser,
  handlerdeleteUser,
  handlerEditUser,
  handlerGetAllUser,
} = require("../services/userService");
const handleLogin = async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Missing input",
    });
  }
  let userData = await handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
const getAllcode = async (req, res) => {
  try {
    let allCode = await handleGetAllcode(req.query.type);

    return res.status(200).json(allCode);
    // return res.status(200).json({
    //   errCode: allCode.errCode,
    //   errMessage: allCode.errMessage,
    //   allCode: allCode.allCode ? allCode.allCode : {},
    // });
  } catch (error) {
    // thuong khi khoongh thể kết nối db mới vô case nà
    return res.status(200).json({
      errCode: -1,
      errMessage: "Fail",
    });
  }
};
const getAllUser = async (req, res) => {
  try {
    const response = await handlerGetAllUser();
    console.log("hi", response);
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
      data: response.data,
    });
    //res.send("post crud from server");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let createUser = async (req, res) => {
  console.log(req.body);
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,

    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    roleId: req.body.roleId,
    address: req.body.address,
    image: req.body.fileURL,
    positionId: req.body.position,
  };
  try {
    await handlercreateUser(user);
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.body.data.id;
    console.log("userId", userId);

    if (userId) {
      await handlerdeleteUser(userId);
      return res.status(200).json({
        errCode: 0,
        errMessage: "ok",
      });
    } else {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Delete User fail",
      });
    }
  } catch (error) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Delete User fail",
    });
  }
};
const EditUser = async (req, res) => {
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,

    phone: req.body.phone,
    email: req.body.email,
    //password: req.body.password,
    gender: req.body.gender,

    address: req.body.address,
    roleId: req.body.roleId,

    id: req.body.id,
    image: req.body.fileURL,
    position: req.body.position,
  };
  try {
    const response = await handlerEditUser(user);
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
      data: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};

module.exports = {
  handleLogin,
  getAllcode,
  createUser,
  deleteUser,
  EditUser,
  getAllUser,
};
