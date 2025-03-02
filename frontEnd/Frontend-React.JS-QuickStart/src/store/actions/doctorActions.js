import {
  getTopDoctorServices,
  getAllDoctorService,
  getDetailDoctorService,
  saveScheduleDoctorServices,
  //   getScheduleDoctorByDateService,
  getAppointmentDoctorService,
} from "../../services/doctorServices";
import { getAllCodeServices } from "../../services/userService";
import {
  getAllSpecialtyServices,
  getAllClinicServices,
} from "../../services/patientServices";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export const fetchTopDoctor = (limit) => {
  return async (dispatch) => {
    try {
      let res = await getTopDoctorServices(limit);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
          data: res.data.data,
        });
      }
    } catch (error) {
      console.log("error fetch top doctors :", error);
      dispatch({ type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS });
    }
  };
};

export const fetchAllDoctor = () => {
  return async (dispatch) => {
    try {
      let res = await getAllDoctorService();
      console.log(res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
          data: res.data.data,
        });
      } else {
        console.log("zo fetch all doctor fail");
        dispatch({ type: actionTypes.FETCH_ALL_DOCTOR_FAIL });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_ALL_DOCTOR_FAIL });
    }
  };
};

export const getDetailDoctor = (id) => {
  return async (dispatch) => {
    try {
      if (!id) {
        dispatch({ type: actionTypes.GET_DETAIL_DOCTOR_FAIL });
      } else {
        let res = await getDetailDoctorService(id);
        dispatch({
          type: actionTypes.GET_DETAIL_DOCTOR_SUCCESS,
          data: res.data.data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.GET_DETAIL_DOCTOR_FAIL });
    }
  };
};

export const fetchAllcodeSchedule = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCodeServices("TIME");
      console.log(res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALLCODE_SCHEDULE_FAIL });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_ALLCODE_SCHEDULE_FAIL });
    }
  };
};

export const saveScheduleDoctor = (data) => {
  return async (dispatch) => {
    try {
      let res = await saveScheduleDoctorServices(data);
      console.log(res, "res");
      if (res && res.data.errCode === 0) {
        dispatch({ type: actionTypes.SAVE_SCHEDULE_DOCTOR_SUCCESS });
        toast.success("save schedule successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        dispatch({ type: actionTypes.SAVE_SCHEDULE_DOCTOR_FAIL });
        toast.error("save schedule fail", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.SAVE_SCHEDULE_DOCTOR_FAIL });
    }
  };
};

// export const getScheduleDoctorByDate = (doctorId, date) => {
//   return async (dispatch) => {
//     try {
//       let res = await getScheduleDoctorByDateService(doctorId, date);
//       if (res && res.errorCode === 0) {
//         dispatch({
//           type: actionTypes.GET_SCHEDULE_DOCTOR_SUCCESS,
//           data: res.data,
//         });
//       } else {
//         dispatch({ type: actionTypes.GET_SCHEDULE_DOCTOR_FAIL });
//       }
//     } catch (e) {
//       console.log(e);
//       dispatch({ type: actionTypes.GET_SCHEDULE_DOCTOR_FAIL });
//     }
//   };
// };
export const getAppointmentDoctor = (doctorId, initDate, statusId) => {
  return async (dispatch) => {
    try {
      let res = await getAppointmentDoctorService(doctorId, initDate, statusId);
      console.log(res, "res");
      if (res && res.data.errCode === 0) {
        //res.data.data.statusId = statusId;
        dispatch({
          type: actionTypes.GET_APPOINTMENT_DOCTOR_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({ type: actionTypes.GET_APPOINTMENT_DOCTOR_FAIL });
      }
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.GET_APPOINTMENT_DOCTOR_FAIL });
    }
  };
};
export const changeStatusId = (statusId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.CHANGE_STATUS_SUCCESS, data: statusId });
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.CHANGE_STATUS_FAIL });
    }
  };
};

export const fetchRelateToDoctorInfor = () => {
  return async (dispatch) => {
    try {
      let result = {};
      let resListPrice = await getAllCodeServices("PRICE");
      let resListPayment = await getAllCodeServices("PAYMENT");
      let resListProvince = await getAllCodeServices("PROVINCE");
      let resListClinics = await getAllClinicServices();
      let resListSpecialty = await getAllSpecialtyServices();
      console.log(resListPrice, "resListPrice");
      if (
        resListPrice &&
        resListPrice.data.errCode === 0 &&
        resListPayment &&
        resListPayment.data.errCode === 0 &&
        resListProvince &&
        resListProvince.data.errCode === 0 &&
        resListSpecialty &&
        resListSpecialty.data.errCode === 0 &&
        resListClinics &&
        resListClinics.data.errCode === 0
      ) {
        console.log(resListPayment, "resListPayment");

        result.listPrice = resListPrice.data.data;
        result.listPayment = resListPayment.data.data;
        result.listProvince = resListProvince.data.data;
        result.listSpecialty = resListSpecialty.data.data;
        result.listClinics = resListClinics.data.data;
        dispatch({
          type: actionTypes.FETCH_RELATE_TO_DOCTOR_INFOR_SUCCESS,
          data: result,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_RELATE_TO_DOCTOR_INFOR_FAIL });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_RELATE_TO_DOCTOR_INFOR_FAIL });
    }
  };
};
