import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import appReducer from "./appReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";
import patientReducer from "./patientReducer";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

// const userPersistConfig = {
//   ...persistCommonConfig,
//   key: "user",
//   whitelist: ["isLoggedIn", "adminInfo"],
// };
const userPersistConfig = {
  ...persistCommonConfig,
  key: "user",
  //whitelist: ["isLoggedIn"],
  whitelist: ["isLoggedIn", "userInfo"],
};

const appPersistConfig = {
  ...persistCommonConfig,
  key: "app",
  whitelist: ["language"],
};
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),
    admin: adminReducer,
    doctor: doctorReducer,
    patient: patientReducer,

    app: persistReducer(appPersistConfig, appReducer),
  });
