import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";

import "./ListClinic.scss";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import CardItem from "../../components/aceterityUi/CardItem";

class ListClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listClinic: [],
    };
  }
  async componentDidMount() {
    let { listDataSpecialtyRedux, listDataClinicRedux } = this.props;

    this.setState({
      listClinic: listDataClinicRedux,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.listDataClinicRedux !== this.props.listDataClinicRedux) {
      this.setState({
        listClinic: this.props.listDataClinicRedux,
      });
    }
  }
  render() {
    let { listClinic } = this.state;
    return (
      <>
        <div className="detail-specialty-wrapper">
          {/* <HomeHeader /> */}
          <HomeHeader />
          <div className="detail-specialty-container">
            {/* <FooterContent /> */}
            <CardItem
              type="clinic"
              list={listClinic}
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
    listDataClinicRedux: state.patient.listDataClinic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSpecialtyRedux: () => dispatch(actions.getAllSpecialty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListClinic);
