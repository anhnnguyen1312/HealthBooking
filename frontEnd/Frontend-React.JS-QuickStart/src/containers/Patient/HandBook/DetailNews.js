import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import { FormattedMessage } from "react-intl";

import {
  getAllHandbookServices,
  getHandbookByIdServices,
  getSpecialtyByIdServices,
} from "../../../services/patientServices";
import DetailDoctor from "../Doctor/DetailDoctor";
import Select from "react-select";
import { getAllCodeServices } from "../../../services/userService";

import "./DetailNews.scss";
import HomeHeader from "../../HomePage/HomeHeader/HomeHeader";
import FooterContent from "../../HomePage/FooterContent";
//import FooterContent from "../../HomePage/FooterContent";

class DetailNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHTML: "",
      contentMarkdown: "",
      shortDescription: "",
      UserId: "",
      statusId: "",
      tittle: "",
      imageLogo: "",
      blogId: "",
    };
  }
  async componentDidMount() {
    let { match } = this.props;
    console.log("match", match.params.id, match);
    if (match && match.params && match.params.id) {
      let blogId = match.params.id;
      let responseBlog = await getHandbookByIdServices(blogId);

      console.log("responseBlog", responseBlog);
      if (responseBlog.data.errCode === 0) {
        this.setState({
          blogId: responseBlog.data.data.data.id,
          contentHTML: responseBlog.data.data.data.contentHTML,
          contentMarkdown: responseBlog.data.data.data.contentMarkdown,
          shortDescription: responseBlog.data.data.data.shortDescription,
          UserId: responseBlog.data.data.data.UserId,
          statusId: responseBlog.data.data.data.statusId,
          tittle: responseBlog.data.data.data.tittle,
          imageLogo: responseBlog.data.data.data.imageLogo,
        });
      }
    }
  }
  componentDidUpdate(prevProps) {}

  render() {
    let {
      contentHTML,
      contentMarkdown,
      shortDescription,
      UserId,
      tittle,
      imageLogo,
    } = this.state;
    return (
      <div className="detail-specialty-wrapper">
        {/* <HomeHeader /> */}
        <HomeHeader />
        <div className="detail-specialty-container">
          {/* <div className="header-intro"> */}
          <div className="">
            {/* <div className="header-image"> */}
            <div className="">
              <img src={imageLogo} alt="img" />
            </div>
            {/* <div className="header-text coverArea"> */}
            <div className="header-text ">
              <div
                style={{ padding: "25px" }}
                dangerouslySetInnerHTML={{ __html: contentMarkdown }}
              ></div>
            </div>
          </div>

          <div className="doctors-container coverArea">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailNews);
