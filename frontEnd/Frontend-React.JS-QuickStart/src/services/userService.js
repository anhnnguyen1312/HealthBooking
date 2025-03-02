import axios from "../axios";
const handleLoginApi = async (userName, password) => {
  try {
    return await axios.post("/api/login", {
      email: userName,
      password: password,
    });
  } catch (error) {
    return error?.response?.data;
  }
};
const getAllCodeServices = async (type) => {
  try {
    return await axios.get(`/api/allcode?type=${type}`);
  } catch (error) {
    console.log("fail", error);
  }
};
const createUserServices = async (dataUser) => {
  try {
    return await axios.post("/api/create-user", dataUser);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const editUserServices = async (user) => {
  try {
    return await axios.post("/api/update-user", user);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const filterAndPagingUser = async (paramsSearch = {}) => {
  let { page = 0, limit = 10, keyword = "", roleId = "" } = paramsSearch;
  try {
    return await axios.get(`/api/get-all-users`);

    // return await axios.get(`/api/filter-user?page=${page}&limit=${limit}&keyword=${keyword}&roleId=${roleId}`);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const deleteUserServices = async (id) => {
  try {
    console.log("id", id);
    return await axios.post("/api/delete-user", { data: { id: id } });
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const postSpecialtyServices = async (data) => {
  try {
    console.log("data", data);
    return await axios.post("/api/post-specialty", data);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const postDetailClinicServices = async (data) => {
  try {
    return await axios.post("/api/post-clinic", data);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const deleteClinicByIdServices = async (id) => {
  try {
    console.log("id", id);
    return await axios.post("/api/delete-clinic-by-id", id);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const deleteSpecialtyByIdServices = async (id) => {
  try {
    console.log("id", id);
    return await axios.post("/api/delete-specialty-by-id", id);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
export {
  handleLoginApi,
  getAllCodeServices,
  createUserServices,
  editUserServices,
  filterAndPagingUser,
  deleteUserServices,
  postSpecialtyServices,
  postDetailClinicServices,
  deleteClinicByIdServices,
  deleteSpecialtyByIdServices,
};
