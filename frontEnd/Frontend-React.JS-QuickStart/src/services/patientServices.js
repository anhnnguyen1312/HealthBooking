import axios from "../axios";

const postBookingAppointmentServices = async (data) => {
  try {
    return await axios.post(`/api/patient-booking-appoiment`, data);
  } catch (error) {
    return error.response;
  }
};
// const verifyBookingAppointmentServices = async (data) => {
//   try {
//     return await axios.post(`/api/verify-appointment`, data);
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };

const getAllSpecialtyServices = async () => {
  try {
    return await axios.get(`/api/get-all-specialty`);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const getSpecialtyByIdServices = async (id, location) => {
  try {
    return await axios.get(
      `/api/get-specialty-by-id?id=${id}&location=${location}`
    );
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

const getAllClinicServicesByLimit = async (isGetImageClinic, limit) => {
  try {
    limit = limit || 10;
    return await axios.get(
      `/api/get-all-clinic?isGetImageClinic=${isGetImageClinic}&limit=${limit}`
    );
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const getAllClinicServices = async () => {
  try {
    return await axios.get(`/api/get-all-clinic`);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const getDetailClinicByIdServices = async (id) => {
  try {
    return await axios.get(`/api/get-clinic-by-id?id=${id}`);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const getHandbookByIdServices = async (id) => {
  try {
    return await axios.get(`/api/get-handbook-by-id?id=${id}`);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const getAllHandbookServices = async () => {
  try {
    return await axios.get(`/api/get-all-handbook`);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const deleteBlogByIdServices = async (id) => {
  try {
    return await axios.post(`/api/delete-handbook-by-id`, id);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
const postBlogByIdServices = async (data) => {
  try {
    return await axios.post(`/api/post-handbook`, data);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

// const getNewsServices = async (id, type, statusId) => {
//   try {
//     if (!id) id = "";
//     if (!type) type = "";
//     return await axios.get(
//       `/api/get-news?id=${id}&type=${type}&statusId=${statusId}`
//     );
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };
// const getDetailUserServices = async () => {
//   try {
//     let refreshToken = classStorage.getItemStorage("refreshToken");
//     let user = jwt_decode(refreshToken);
//     return await axios.get(`/api/get-detail-users/${user.id}`);
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };

// const searchAllServices = async (keyword) => {
//   try {
//     return await axios.get(`/api/search-all?keyword=${keyword}`);
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };
// const searchDoctorServices = async (
//   page = 0,
//   limit = 10,
//   keyword = "",
//   roleId = "R2"
// ) => {
//   try {
//     return await axios.get(
//       `/api/filter-doctor?page=${page}&limit=${limit}&keyword=${keyword}&roleId=${roleId}`
//     );
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };

// const pagingHandbook = async (page = 0, limit = 5, statusId = "S1") => {
//   try {
//     return await axios.get(
//       `/api/paging-handbook?page=${page}&limit=${limit}&statusId=${statusId}`
//     );
//   } catch (error) {
//     console.log(error);
//     return error.response;
//   }
// };

export {
  postBookingAppointmentServices,
  //   verifyBookingAppointmentServices,
  getAllSpecialtyServices,
  getSpecialtyByIdServices,
  getAllClinicServices,
  getAllClinicServicesByLimit,
  getDetailClinicByIdServices,
  getAllHandbookServices,
  deleteBlogByIdServices,
  postBlogByIdServices,
  getHandbookByIdServices,
  //   getNewsServices,
  //   getDetailUserServices,
  //   searchAllServices,
  //   searchDoctorServices,
  //   pagingHandbook,
};
