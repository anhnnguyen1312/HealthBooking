// import express from "express";
const express = require("express");

const router = express.Router();
const {
  getHomePage,
  getProductPage,
  getSamplePage,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  deleteCRUD,
  putCRUD,
} = require("../controllers/homeController.js");
const {
  handleLogin,
  getAllcode,
  createUser,
  deleteUser,
  EditUser,
  getAllUser,
} = require("../controllers/userController.js");

const {
  getSpecialty,
  postSpecialty,
  postClinic,
  getClinic,
  getSpecialtyById,
  postBookAppointment,
  getClinicById,
  deleteClinicById,
  getUserByAllcode,
  getAppointmentDoctor,
  deleteSpecialtyById,
  //getDetailClinicById,
  getDetailDoctorClinicSpecById,
} = require("../controllers/patientController.js");
const {
  getAllDoctor,
  getTopDoctor,
  saveDetailDoctor,
  getDetailDoctorById,
  bulkCreateSchedule,
  getScheduleDoctorByDateService,
  getHandbookById,
  getAllHandbook,
  deleteHandbookById,
  postHandBook,
} = require("../controllers/doctorController.js");

// import {
//   getHomePage,
//   getProductPage,
//   getSamplePage,
// } from "../controllers/homeController.js";
let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/product", getProductPage);
  router.get("/sample", getSamplePage);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);
  router.get("/edit-crud", getEditCRUD);
  router.get("/delete-crud", deleteCRUD);
  router.post("/put-crud", putCRUD);
  router.post("/api/login", handleLogin);
  router.get("/api/allcode", getAllcode);
  router.get("/api/get-all-users", getAllUser);
  router.post("/api/create-user", createUser);
  router.post("/api/delete-user", deleteUser);
  router.post("/api/update-user", EditUser);
  router.get("/api/get-all-doctor", getAllDoctor);
  router.get("/api/get-top-doctor", getTopDoctor);
  router.post("/api/save-detail-doctor", saveDetailDoctor);
  router.get("/api/get-detail-doctor", getDetailDoctorById);

  router.post("/api/bulk-create-schedule", bulkCreateSchedule);
  router.get(
    "/api/get-schedule-doctor-by-date",
    getScheduleDoctorByDateService
  );
  router.post("/api/patient-booking-appoiment", postBookAppointment);
  router.post("/api/post-specialty", postSpecialty);
  router.get("/api/get-all-specialty", getSpecialty);
  router.post("/api/post-clinic", postClinic);
  router.get("/api/get-all-clinic", getClinic);
  router.get("/api/get-specialty-by-id", getSpecialtyById);
  router.get("/api/get-clinic-by-id", getClinicById);
  router.post("/api/delete-clinic-by-id", deleteClinicById);
  router.post("/api/delete-specialty-by-id", deleteSpecialtyById);
  router.post("/api/post-handbook", postHandBook);
  router.post("/api/delete-handbook-by-id", deleteHandbookById);
  router.get("/api/get-all-handbook", getAllHandbook);
  router.get("/api/get-handbook-by-id", getHandbookById);

  router.get("/api/get-user-by-allcode", getUserByAllcode);
  router.get("/api/get-appointment-doctor", getAppointmentDoctor);
  router.get(
    "/api/get-detail-doctor-clinic-specialty-by-id",
    getDetailDoctorClinicSpecById
  );

  // router.get("/api/get-detail-clinic-by-id", getDetailClinicById);

  // router.get("/", (req, res) => {
  //   res.send("hello");
  // });

  return app.use("/", router);
};
//export default initWebRoutes;
module.exports = initWebRoutes;
