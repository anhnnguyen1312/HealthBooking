import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";

// import "./ListClinic.scss";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import CardItem from "../../components/aceterityUi/CardItem";

class ListSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSpecialty: [],
    };
  }
  async componentDidMount() {
    let { listDataSpecialtyRedux } = this.props;
    console.log("listDataSpecialtyRedux", listDataSpecialtyRedux);
    this.setState({
      listSpecialty: listDataSpecialtyRedux,
    });
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.listDataSpecialtyRedux !== this.props.listDataSpecialtyRedux
    ) {
      this.setState({
        listSpecialty: this.props.listDataSpecialtyRedux,
      });
    }
  }
  render() {
    let { listSpecialty } = this.state;
    return (
      <>
        <div className="detail-specialty-wrapper">
          {/* <HomeHeader /> */}
          <HomeHeader />
          <div className="detail-specialty-container">
            {/* <FooterContent /> */}
            <CardItem
              type="specialty"
              list={listSpecialty}
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
    listDataSpecialtyRedux: state.patient.listDataSpecialty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSpecialtyRedux: () => dispatch(actions.getAllSpecialty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpecialty);
