import {
  handlePostBookAppointment,
  handlePostSpecialty,
  handleGetSpecialty,
  handleGetClinic,
  handlePostClinic,
  handleGetClinicById,
  handleGetSpecialtyById,
  handleGetUserByAllcode,
  handleGetAppointmentDoctor,
  handleGetDetailDoctorClinicSpecById,
  handledeleteClinicById,
  handledeleteSpecialtyById,
} from "./../services/patientService";
let postBookAppointment = async (req, res) => {
  try {
    let response = await handlePostBookAppointment(req.body);
    //console.log(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail to add Booking",
    });
  }
};
const postSpecialty = async (req, res) => {
  try {
    const response = await handlePostSpecialty(req.body);
    return res.status(200).json({
      errCode: response.errCode,
      errMessage: response.errMessage,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
const getSpecialty = async (req, res) => {
  try {
    const response = await handleGetSpecialty();
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
const getClinic = async (req, res) => {
  try {
    console.log("getCliniyou have call to /api/get-all-clinic", req.query);
    const response = await handleGetClinic();
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
const postClinic = async (req, res) => {
  try {
    const response = await handlePostClinic(req.body);
    return res.status(200).json({
      errCode: response.errCode,
      errMessage: response.errMessage,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let getSpecialtyById = async (req, res) => {
  try {
    const id = Number(req.query.id);
    const location = req.query.location.replace(/"/g, "");

    let response = await handleGetSpecialtyById(id, location);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let getClinicById = async (req, res) => {
  try {
    const data = Number(req.query.id);

    let response = await handleGetClinicById(data);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let getUserByAllcode = async (req, res) => {
  try {
    const data = req.query.code;

    let response = await handleGetUserByAllcode(data);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let getAppointmentDoctor = async (req, res) => {
  try {
    //const data = req.query.code;

    let response = await handleGetAppointmentDoctor(req.query);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let getDetailDoctorClinicSpecById = async (req, res) => {
  try {
    //const data = req.query.code;

    let response = await handleGetDetailDoctorClinicSpecById(req.query);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let deleteClinicById = async (req, res) => {
  try {
    //const data = req.query.code;
    console.log("req.body.id", req.body.id);
    let response = await handledeleteClinicById(req.body.id);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
let deleteSpecialtyById = async (req, res) => {
  try {
    //const data = req.query.code;
    console.log("req.body.id", req.body.id);
    let response = await handledeleteSpecialtyById(req.body.id);

    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: 1,
      errMessage: "Fail",
    });
  }
};
module.exports = {
  postBookAppointment,
  getSpecialty,
  postSpecialty,
  postClinic,
  getClinic,
  getSpecialtyById,
  getClinicById,
  getUserByAllcode,
  getAppointmentDoctor,
  //getDetailClinicById
  getDetailDoctorClinicSpecById,
  deleteClinicById,
  deleteSpecialtyById,
};
