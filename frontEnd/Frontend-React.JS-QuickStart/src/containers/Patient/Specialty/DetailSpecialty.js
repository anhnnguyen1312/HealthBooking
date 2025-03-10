import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import { FormattedMessage } from "react-intl";

import { getSpecialtyByIdServices } from "../../../services/patientServices";
import DetailDoctor from "../Doctor/DetailDoctor";
import Select from "react-select";
import { getAllCodeServices } from "../../../services/userService";

import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader/HomeHeader";
import FooterContent from "../../HomePage/FooterContent";
//import FooterContent from "../../HomePage/FooterContent";

class DetailSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introSpecialty: "",
      backgroundImage: "",
      nameSpecialty: "",
      doctors: [],
      listProvince: [],
      specialtyId: "",
      selectedProvinceId: "",
      moreDetail: false,
    };
  }
  async componentDidMount() {
    let { match } = this.props;
    if (match && match.params && match.params.id) {
      let specialtyId = match.params.id;
      let responseSpecialty = await getSpecialtyByIdServices(
        specialtyId,
        "ALL"
      );
      let listProvinceResponse = await getAllCodeServices("PROVINCE");
      console.log("responseSpecialty", responseSpecialty);
      console.log("listProvinceResponse", listProvinceResponse);
      if (listProvinceResponse && listProvinceResponse.data?.data) {
        this.setState({
          specialtyId: specialtyId,
          introSpecialty:
            responseSpecialty.data.data.Specialty_infor.description,
          backgroundImage: responseSpecialty.data.data.Specialty_infor.image,
          nameSpecialty: responseSpecialty.data.data.Specialty_infor.name,
          doctors: responseSpecialty.data.data.Doctor_infor,
          listProvince: this.buildInputSelect(listProvinceResponse.data.data),
        });
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.languageRedux !== this.props.languageRedux) {
      this.setState({
        listProvince: this.buildInputSelect(this.state.listProvince),
      });
    }
  }

  buildInputSelect = (data) => {
    let result = [];
    if (data) {
      data.unshift({
        keyMap: "ALL",
        valueVi: "Toàn quốc",
        valueEn: "Nationwide",
      });
    }

    if (data && data.length > 0) {
      result = data.map((item, index) => {
        let object = {};

        object.label =
          this.props.languageRedux === LANGUAGES.VI
            ? item.valueVi
            : item.valueEn;
        object.value = item.keyMap;

        return object;
      });
    }

    return result;
  };

  handleChange = async (selectedProvince) => {
    let { specialtyId } = this.state;
    let provinceId = selectedProvince.value;
    if (specialtyId) {
      let responseSpecialty = await getSpecialtyByIdServices(
        specialtyId,
        provinceId
      );
      if (responseSpecialty && responseSpecialty.data?.data) {
        this.setState({
          selectedProvinceId: provinceId,
          doctors: responseSpecialty.data.data.Doctor_infor,
        });
      }
    }
  };

  handleClickMore = () => {
    this.setState({
      moreDetail: !this.state.moreDetail,
    });
  };
  render() {
    let { introSpecialty, backgroundImage, doctors, listProvince, moreDetail } =
      this.state;
    return (
      <div className="detail-specialty-wrapper">
        {/* <HomeHeader /> */}
        <HomeHeader />
        <div className="detail-specialty-container">
          <div className="header-intro">
            <div className="header-image">
              <img src={backgroundImage} alt="img" />
            </div>
            <div className="header-text coverArea">
              <div
                className={
                  !moreDetail
                    ? `detail-specialty more-detail-specialty`
                    : "detail-specialty"
                }
                dangerouslySetInnerHTML={{ __html: introSpecialty }}
              ></div>
              <div className="btn-more" onClick={() => this.handleClickMore()}>
                {!moreDetail ? (
                  <FormattedMessage id="patient.doctor.more" />
                ) : (
                  <FormattedMessage id="patient.doctor.hide" />
                )}
              </div>
            </div>
          </div>

          <div className="doctors-container coverArea">
            <div className="location">
              <div className="box-select-province">
                <Select
                  placeholder="Toàn quốc"
                  onChange={(e) => this.handleChange(e)}
                  options={listProvince}
                />
              </div>
            </div>
            <div className="doctors">
              {doctors &&
                doctors.length > 0 &&
                doctors.map((item) => {
                  return (
                    <div className="sec-doctor" key={item.doctorId}>
                      <div className="right">
                        <DetailDoctor
                          className="item"
                          doctorId={item.doctorId}
                          typeStyle="specialty"
                          isComponentChild
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* <FooterContent /> */}
            <FooterContent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languageRedux: state.app.language,
    detailDoctorRedux: state.doctor.detailDoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailDoctorRedux: (id) => dispatch(actions.getDetailDoctor(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
