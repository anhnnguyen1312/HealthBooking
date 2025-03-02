const db = require("../models/index");
const {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserData,
  deleteUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render("homePage", { data: data });
  } catch (error) {
    console.log(error);
  }
};
const getProductPage = (req, res) => {
  res.send("product");
};
const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};
const postCRUD = async (req, res) => {
  const message = await createNewUser(req.body);
  console.log(message);
  res.send("post crud from server");
};
const displayGetCRUD = async (req, res) => {
  const result = await getAllUsers();
  console.log(result);
  res.render("displayCRUD.ejs", { data: result });
};
const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const result = await getUserById(userId);
    return res.render("editCRUD.ejs", { user: result });
  } else {
    return res.send("fail");
  }
  // res.render("editCRUD.ejs", { data: result });
};
const deleteCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    await deleteUserById(userId);
    return res.send("delete success");
  } else {
    return res.send("fail");
  }
};
const putCRUD = async (req, res) => {
  const data = req.body;
  const result = await updateUserData(data);
  res.render("displayCRUD.ejs", { data: result });
};
module.exports = {
  getHomePage,
  getProductPage,
  getSamplePage,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  deleteCRUD,
  putCRUD,
};
