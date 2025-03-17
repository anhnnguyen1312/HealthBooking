import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";

// import "./ListClinic.scss";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import CardItem from "../../components/aceterityUi/CardItem";

class ListDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDoctor: [],
    };
  }
  async componentDidMount() {
    this.props.fetchAllDoctorRedux();
    let { allDoctorRedux } = this.props;

    this.setState({
      listDoctor: allDoctorRedux,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.allDoctorRedux !== this.props.allDoctorRedux) {
      this.setState({
        listDoctor: this.props.allDoctorRedux,
      });
    }
  }
  render() {
    let { listDoctor } = this.state;
    return (
      <>
        <div className="detail-specialty-wrapper">
          {/* <HomeHeader /> */}
          <HomeHeader />
          <div className="detail-specialty-container">
            {/* <FooterContent /> */}
            <CardItem
              type="doctor"
              list={listDoctor}
              // typeSec={"ClinicType"}
              //background="background"
              title={<FormattedMessage id="homepage.specialty" />}
              button={<FormattedMessage id="homepage.more" />}
              //modal="modalSpecialty"
            />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allDoctorRedux: state.doctor.allDoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctorRedux: () => dispatch(actions.fetchAllDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDoctor);
