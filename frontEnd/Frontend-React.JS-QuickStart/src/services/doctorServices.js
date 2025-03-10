import axios from "../axios";
// import axios from '../axios';

const getTopDoctorServices = async (limit) => {
  try {
    return await axios.get(`/api/get-top-doctor?limit=${limit}`);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

const getAllDoctorService = async () => {
  try {
    return await axios.get(`/api/get-all-doctor`);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

const getDoctorService = async (id) => {
  try {
    return await axios.get(`/api/get-doctor-by-id?id=${id}`);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

const saveScheduleDoctorServices = async (data) => {
  try {
    return await axios.post(`/api/bulk-create-schedule`, data);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

const getScheduleDoctorByDateService = async (doctorId, date) => {
  try {
    return await axios.get(
      `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`
    );
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const getAppointmentDoctorService = async (doctorId, date, statusId) => {
  try {
    return await axios.get(
      `/api/get-appointment-doctor?doctorId=${doctorId}&date=${date}&statusId=${statusId}`
    );
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const confirmRemedyService = async (data) => {
  try {
    return await axios.post(`/api/confirm-remedy`, data);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const saveDetailDoctorServices = async (data) => {
  try {
    return await axios.post(`/api/save-detail-doctor`, data);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
const getDetailDoctorService = async (id) => {
  try {
    return await axios.get(`/api/get-detail-doctor?id=${id}`);
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
export {
  getTopDoctorServices,
  getAllDoctorService,
  saveDetailDoctorServices,
  getDetailDoctorService,
  saveScheduleDoctorServices,
  getScheduleDoctorByDateService,
  getDoctorService,
  getAppointmentDoctorService,
  confirmRemedyService,
};
