import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader/HomeHeader";
import BoxBackground from "./Sections/BoxBackground";
import Section from "./Sections/Section";
import { FormattedMessage } from "react-intl";
//import ListSpecialty from "../Patient/Specialty/ListSpecialty";
import About from "./Sections/About";
import News from "./Sections/News";
import Footer from "./Sections/Footer";
import TopDoctor from "./Sections/TopDoctor";
import * as actions from "../../store/actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSpecialty: [],
      listClinic: [],
    };
  }
  async componentDidMount() {
    let { listDataSpecialtyRedux, listDataClinicRedux } = this.props;

    this.setState({
      listSpecialty: listDataSpecialtyRedux,
      listClinic: listDataClinicRedux,
    });
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.listDataSpecialtyRedux !== this.props.listDataSpecialtyRedux ||
      prevProps.listDataClinicRedux !== this.props.listDataClinicRedux
    ) {
      this.setState({
        listSpecialty: this.props.listDataSpecialtyRedux,
        listClinic: this.props.listDataClinicRedux,
      });
    }
  }
  toggleModel = (modal) => {
    this.setState({
      [modal]: !this.state[modal],
    });
  };
  render() {
    let { listDataSpecialtyRedux, listDataHandbookRedux } = this.props;
    let { listSpecialty, listClinic } = this.state;
    console.log("listDataHandbookRedux", listDataHandbookRedux);

    console.log(
      "this.props.listDataClinicRedux",
      this.props.listDataClinicRedux
    );
    return (
      <div>
        <HomeHeader />
        <BoxBackground />
        {/* <News /> */}
        <Section
          type="sec"
          listSpecialty={listSpecialty}
          typeSec={"specialtyType"}
          background="background"
          title={<FormattedMessage id="homepage.specialty" />}
          button={<FormattedMessage id="homepage.more" />}
          modal="modalSpecialty"
          toggleModel={this.toggleModel}
          slideShow={4}
        />
        <Section
          type="sec"
          typeSec="clinics"
          listClinic={listClinic}
          title={<FormattedMessage id="homepage.clinic" />}
          button={<FormattedMessage id="homepage.search" />}
          modal="modalClinic"
          toggleModel={this.toggleModel}
          slideShow={4}
        />
        <TopDoctor
          type="doctor"
          slideShow={4}
          modal="modalDoctor"
          toggleModel={this.toggleModel}
        />

        <Section
          background="background"
          type="handbook"
          typeSec="handbook"
          listHandbook={listDataHandbookRedux}
          title={<FormattedMessage id="homepage.handbook" />}
          button={<FormattedMessage id="homepage.all-handbook" />}
          modal="modalHandbook"
          toggleModel={this.toggleModel}
          slideShow={2}
        />
        <About title={<FormattedMessage id="homepage.about" />} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    languageRedux: state.app.language,

    listDataSpecialtyRedux: state.patient.listDataSpecialty,
    listDataClinicRedux: state.patient.listDataClinic,
    listDataHandbookRedux: state.patient.listDataHandbook,
    // topDoctorsRedux: state.doctor.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSpecialtyRedux: () => dispatch(actions.getAllSpecialty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
