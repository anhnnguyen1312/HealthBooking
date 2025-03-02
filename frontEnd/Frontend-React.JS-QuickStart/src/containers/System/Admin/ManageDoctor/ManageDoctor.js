import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";
import { LANGUAGES } from "../../../../utils";

import "./ManageDoctor.scss";
import Select from "react-select";
import { toast } from "react-toastify";
import { saveDetailDoctorServices } from "../../../../services/doctorServices";

import CKeditor from "../../../../components/CKeditor/CKeditor";
import Loading from "../../../../components/Loading";
import ManageDoctorProfile from "./ManageDoctorProfile";
import ManageDoctorAdmin from "./ManageDoctorAdmin";

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    console.log("userInfo", this.props.userInfo.roleId === "R2");

    return (
      <>
        {(this.props.userInfo.roleId === "R2" && <ManageDoctorProfile />) ||
          (this.props.userInfo.roleId === "R1" && <ManageDoctorAdmin />)}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
