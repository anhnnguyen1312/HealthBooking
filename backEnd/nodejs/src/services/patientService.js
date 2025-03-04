const db = require("../models/index");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
require("dotenv").config();
const _ = require("lodash");
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
let handlePostBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("dât", data);
      if (!data.email || !data.doctorId || !data.timeType || !data.date) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        // const hashPsFromBycrypt = await hashUserPassword("");

        // let user = await db.User.findOrCreate({
        //   where: { email: data.email },
        //   defaults: {
        //     email: data.email,
        //     roleId: "R3",
        //     phone: data.phone,
        //     password: hashPsFromBycrypt,
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     address: data.address,
        //   },
        // });
        // console.log(user);
        // if (user && user[0]) {
        console.log("them lich");
        await db.Booking.create({
          statusId: "S2",
          doctorId: data.doctorId,
          patientId: data.patientId,
          email: data.email,

          date: data.date,
          timeType: data.timeType,
          bookFor: data.bookFor,
          nameScheduler: data.nameScheduler,
          phoneNumberScheduler: data.phoneNumberScheduler,
          namePatient: data.namePatient,
          IDNumber: data.IDNumber,
          gender: data.gender,
          phoneNumber: data.phoneNumber,
          address: data.address,
          reason: data.reason,
          nameDoctor: data.nameDoctor,
          exactTime: data.exactTime,
        });
        // }
        resolve({
          errCode: 0,
          errMessage: "add apointent success",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handlePostSpecialty = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.description || !data.image) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        console.log("data", data);
        await db.Specialization.create({
          name: data.name,
          description: data.description,
          image: data.image,
        });
        resolve({
          errCode: 0,
          errMessage: "ok create new specialty",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetSpecialty = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let specialty = await db.Specialization.findAll();

      resolve(specialty);
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetClinic = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let clinic = await db.Clinic.findAll();

      resolve(clinic);
    } catch (error) {
      reject(error);
    }
  });
};
let handlePostClinic = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.description || !data.image || !data.address) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        console.log("data", data);
        await db.Clinic.create({
          name: data.name,
          description: data.description,
          imageLogo: data.imageLogo,
          image: data.image,
          address: data.address,
        });
        resolve({
          errCode: 0,
          errMessage: "ok create new clinic",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetClinicById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        const dataClinic = await db.Clinic.findOne({
          where: { id: id },
        });
        //console.log(location, location.replace(/"/g, "") === "ALL");
        if (dataClinic) {
          const dataDoctor = await db.Doctor_infor.findAll({
            where: { clinicId: id },
          });

          if (dataDoctor) {
            resolve({
              errCode: 0,
              errMessage: "ok",
              data: { Clinic_infor: dataClinic, Doctor_infor: dataDoctor },
            });
          }
        } else {
          resolve({
            errCode: 0,
            errMessage: "No data",
          });
        }
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
let handleGetSpecialtyById = async (id, location) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id || !location) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        const dataSpec = await db.Specialization.findOne({
          where: { id: id },
        });
        //console.log(location, location.replace(/"/g, "") === "ALL");
        if (dataSpec) {
          if (location === "ALL") {
            const dataDoctor = await db.Doctor_infor.findAll({
              where: { specialtyId: id },
            });

            if (dataDoctor) {
              console.log("dataDoctor", dataDoctor);
              resolve({
                errCode: 0,
                errMessage: "ok",
                data: { Specialty_infor: dataSpec, Doctor_infor: dataDoctor },
              });
            }
          } else {
            const dataDoctor = await db.Doctor_infor.findAll({
              where: { specialtyId: id, provinceId: location },
            });
            if (dataDoctor) {
              resolve({
                errCode: 0,
                errMessage: "success",
                data: { Specialty_infor: dataSpec, Doctor_infor: dataDoctor },
              });
            }
          }
        } else {
          resolve({
            errCode: 0,
            errMessage: "No data",
          });
        }
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
let handleGetUserByAllcode = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        console.log("data", data);
        const dataCode = await db.Allcode.findAll({
          where: { positionId: "P4" },
          include: [
            {
              model: db.User,
              as: "positionTypeData",
              //attributes: ["email", "valueVi"],
            },
          ],
          raw: false,
          nest: true,
        });

        resolve({
          errCode: 0,
          errMessage: "ok",
          data: dataCode,
        });
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
let handleGetAppointmentDoctor = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        console.log("data", data);
        const dataBooking = await db.Booking.findAll({
          where: {
            doctorId: data.doctorId,
            //doctorId: 12,

            statusId: data.statusId,
            date: data.date.toString(),
          },
          // include: [
          //   {
          //     model: db.User,

          //     // attributes: ["valueEn", "valueVi"],
          //   },
          // {
          //   model: db.Allcode,
          //   as: "timeTypeDataBooking",
          //   // attributes: ["valueEn", "valueVi"],
          // },
          // ],
        });
        console.log("dataBooking", dataBooking);
        resolve({
          errCode: 0,
          errMessage: "ok",
          data: dataBooking,
        });
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
let handleGetDetailDoctorClinicSpecById = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        console.log("data", data);
        const dataBooking = await db.Booking.findAll({
          where: {
            doctorId: data.doctorId,
            statusId: data.statusId,
            date: data.date,
          },
        });

        resolve({
          errCode: 0,
          errMessage: "ok",
          data: dataBooking,
        });
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
let handledeleteClinicById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("id clicic", id);
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing Id",
          //data: data,
        });
      } else {
        const clinic = await db.Clinic.findOne({
          where: { id: id },
          raw: false,
        });
        if (clinic) {
          await clinic.destroy();
          resolve({
            errCode: 0,
            errMessage: "ok",
          });
        }
        resolve({
          errCode: 1,
          errMessage: " Clinic is not exist",
        });
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
let handledeleteSpecialtyById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("id clicic", id);
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing Id",
          //data: data,
        });
      } else {
        const specialty = await db.Specialization.findOne({
          where: { id: id },
          raw: false,
        });
        if (specialty) {
          await specialty.destroy();
          resolve({
            errCode: 0,
            errMessage: "ok",
          });
        }
        resolve({
          errCode: 1,
          errMessage: " specialty is not exist",
        });
      }
    } catch (error) {
      resolve({
        errCode: 1,
        errMessage: "Fail",
      });
    }
  });
};
module.exports = {
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
};
