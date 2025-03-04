const db = require("../models/index");
require("dotenv").config();
const _ = require("lodash");
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
let handlerGetAllDoctor = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: {
          roleId: "R2",
        },
      });

      resolve(doctors);
    } catch (e) {
      reject(e);
    }
  });
};
let handlerGetTopDoctor = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (limitInput > 0) {
        console.log(limitInput);
        let doctors = await db.User.findAll({
          limit: limitInput,
          where: {
            roleId: "R2",
          },
          // order: [["createdAt", "DESC"]],
          attributes: { exclude: ["password"] },
          include: [
            {
              model: db.Allcode,
              as: "positionData",
              // attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.Allcode,
              as: "genderData",
              //attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: true,
          nest: true,
        });

        resolve(doctors);
      } else {
        reject(e);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let handlerSaveDetailDoctor = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data, "data");
      if (!(data.doctorId && data.contentHTML)) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
        });
      } else {
        let md = await db.Markdown.findOne({
          where: {
            doctorId: data.doctorId,
          },
        });
        if (md) {
          md.contentHTML = data.contentHTML;
          md.contentMarkdown = data.contentMarkdown;
          md.description = data.description;
          console.log(md, "md");
          if (md instanceof db.Markdown) {
            await md.save();
          } else {
            console.error("md is not a valid instance.");
          }
          //await md.save();
          // resolve({
          //   errCode: 0,
          //   errMessage: "Update Markdown success",
          // });
        } else {
          await db.Markdown.create({
            contentHTML: data.contentHTML,
            contentMarkdown: data.contentMarkdown,
            description: data.description,
            doctorId: data.doctorId,
          });
          // resolve({
          //   errCode: 0,
          //   errMessage: "Create Markdown success",
          // });
        }
        let doctor_infor = await db.Doctor_infor.findOne({
          where: {
            doctorId: data.doctorId,
          },
          raw: false,
        });
        if (doctor_infor) {
          doctor_infor.doctorId = data.doctorId;
          doctor_infor.priceId = data.selectedPrice;
          doctor_infor.provinceId = data.selectedProvince;
          doctor_infor.paymentId = data.selectedPayment;
          doctor_infor.addressClinic = data.addressClinic;
          doctor_infor.nameClinic = data.nameClinic;
          doctor_infor.specialtyId = data.selectedSpecialty;
          doctor_infor.clinicId = data.selectedClinic;

          doctor_infor.note = data.note;
          doctor_infor.count = data.count;
          await doctor_infor.save();
        } else {
          await db.Doctor_infor.create({
            doctorId: data.doctorId,
            priceId: data.selectedPrice,
            provinceId: data.selectedProvince,
            paymentId: data.selectedPayment,
            addressClinic: data.addressClinic,
            nameClinic: data.nameClinic,
            specialtyId: data.selectedSpecialty,
            clinicId: data.selectedClinic,

            note: data.note,
            count: data.count,
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Update markdown and doctor infor success",
        });
      }
      // let doctors = await db.User.findOne({
      //   where: {
      //     id: data.doctorId,
      //   },
      // });

      // if (doctors) {
      //   doctors.contentHTML = data.contentHTML;
      //   doctors.contentMarkdown = data.contentMarkdown;
      //   doctors.description = data.description;
      //   console.log("doctors", doctors);
      //   await doctors.save();

      //   resolve({
      //     errCode: 0,
      //     errMessage: "Update Markdown success",
      //   });
      // }

      // else {
      //   await db.Markdown.create({
      //     contentHTML: data.contentHTML,
      //     contentMarkdown: data.contentMarkdown,
      //     description: data.descriptio,
      //     doctorId: data.doctorId,
      //   });
      //   resolve({
      //     errCode: 0,
      //     errMessage: "Create Markdown success",
      //   });
      // }
      //}
    } catch (error) {
      reject(error);
    }
  });
};
let handlerGetDetailDoctorById = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("data", data);
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        const dataDoctor = await db.User.findOne({
          where: { id: data },
          attributes: { exclude: ["password"] },
          include: [
            {
              model: db.Markdown,
            },
            {
              model: db.Allcode,
              as: "positionData",
              // attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.Doctor_infor,
              attributes: { exclude: ["id", "doctorId"] },
              include: [
                {
                  model: db.Allcode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"],
                },
                {
                  model: db.Allcode,
                  as: "provinceTypeData",
                  attributes: ["valueEn", "valueVi"],
                },
                {
                  model: db.Allcode,
                  as: "paymentTypeData",
                  attributes: ["valueEn", "valueVi"],
                },
              ],
              // as: "DoctorInforData",
              // attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: true,
          nest: true,
        });
        console.log("dataDoctor", dataDoctor);

        resolve({
          errCode: 0,
          errMessage: "ok",
          data: dataDoctor,
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

let handlebulkCreateSchedule = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        if (data && data.length > 0) {
          data = data.map((item) => {
            item.maxNumber = MAX_NUMBER_SCHEDULE;
            return item;
          });
          console.log(data);
          let existing = await db.ScheduleList.findAll({
            where: { doctorId: data[0]?.doctorId },
            attributes: {
              include: ["doctorId", "date", "timeType", "maxNumber"],
            },
            raw: true,
          });
          if (existing && existing.length > 0) {
            // existing = existing.map((item) => {
            //   //item.date = new Date(item.date).getTime();
            //   return item;
            // });
            let toCreate = _.differenceWith(data, existing, (a, b) => {
              return (
                a.timeType === b.timeType &&
                a.date.toString() === b.date.toString()
              );
            });
            console.log("existing===========");

            console.log(existing);
            console.log("existing===========");

            console.log("toCreate===========");

            console.log(toCreate);
            console.log("toCreate===========");
            if (toCreate && toCreate.length > 0) {
              console.log(toCreate);
              await db.ScheduleList.bulkCreate(toCreate);
              resolve({
                errCode: 0,
                errMessage: "ok",
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: "Duplicate Schedule",
              });
            }
          } else {
            await db.ScheduleList.bulkCreate(data);
            resolve({
              errCode: 0,
              errMessage: "Ok",
            });
          }
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handlegetScheduleDoctorByDateService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      const schedule = await db.ScheduleList.findAll({
        where: { doctorId: data.doctorId, date: data.date },
        include: [
          {
            model: db.Allcode,
            as: "timeTypeData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: false,
        nest: true,
      });
      console.log("schedule", schedule);
      if (schedule && schedule.length > 0) {
        resolve({
          errCode: 0,
          errMessage: "ok",
          data: schedule,
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Không có lịch trống",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetAllHandbook = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let clinic = await db.Blog.findAll();

      resolve({
        errCode: 0,
        errMessage: "ok",
        data: clinic,
      });
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetHandbookById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("id", id);
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing data",
          //data: data,
        });
      } else {
        const dataBlogs = await db.Blog.findOne({
          where: { id: id },
        });
        console.log("dataBlogs", dataBlogs);
        resolve({
          errCode: 0,
          errMessage: "ok",
          data: dataBlogs,
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
let handleDeleteHandbookById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing Id",
          //data: data,
        });
      } else {
        const blogs = await db.Blog.findOne({
          where: { id: id },
          raw: false,
        });
        if (blogs) {
          await blogs.destroy();
          resolve({
            errCode: 0,
            errMessage: "ok",
          });
        }
        resolve({
          errCode: 1,
          errMessage: " blog is not exist",
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
let handlePostHandBook = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.tittle ||
        !data.contentHTML ||
        !data.shortDescription ||
        !data.userId
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        console.log("data", data);
        await db.Blog.create({
          userId: data.userId,
          tittle: data.tittle,
          imageLogo: data.imageLogo,
          contentHTML: data.description,
          shortDescription: data.shortDescription,
          contentMarkdown: data.contentMarkdown,
        });
        resolve({
          errCode: 0,
          errMessage: "ok create new blog",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handlerGetAllDoctor: handlerGetAllDoctor,
  handlerGetTopDoctor: handlerGetTopDoctor,
  handlerSaveDetailDoctor: handlerSaveDetailDoctor,
  handlerGetDetailDoctorById: handlerGetDetailDoctorById,
  handlebulkCreateSchedule: handlebulkCreateSchedule,
  handlegetScheduleDoctorByDateService: handlegetScheduleDoctorByDateService,
  handleDeleteHandbookById,
  handlePostHandBook,
  handleGetHandbookById,
  handleGetAllHandbook,
};
