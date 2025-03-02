import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./Header.scss";

import * as actions from "../../store/actions";
import { LANGUAGES, TYPE_USER } from "../../utils";
import Navigator from "../../components/Navigator";
import { adminMenu, doctorMenu } from "./menuApp";
import userImage from "../../assets/images/user.jpg";
// import { classCookies } from '../../cookies';
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { push } from "connected-react-router";
import { withRouter } from "react-router";
import _ from "lodash";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      roleId: "",
      user: {},
      queueNews: "",
      queueHandbook: "",
      menuApp: [],
    };
  }
  // componentDidMount() {
  // let { userInfo } = this.props;
  // if (userInfo && !_.isEmpty(userInfo)) {
  //   let role = userInfo.roleId;
  //   let menu = [];
  //   if (role === "R1") {
  //     menu = adminMenu;
  //   }
  //   if (role === "R2") {
  //     menu = doctorMenu;
  //   }
  //   this.setState({
  //     menuApp: menu,
  //   });
  //   console.log("change menu", menu);
  // }
  // console.log("change userInfo", userInfo);

  componentDidMount() {
    console.log("update");

    let { userInfo } = this.props;

    if (userInfo && !_.isEmpty(userInfo)) {
      let role = userInfo.roleId;
      let menu = [];
      if (role === "R1") {
        menu = adminMenu;
      }
      if (role === "R2") {
        menu = doctorMenu;
      }
      this.setState({
        menuApp: menu,
      });
      console.log("change menu", menu);
    }
  }

  handleChangeLanguage = (languageInput) => {
    if (languageInput === "VN") {
      this.props.changeLanguageRedux(LANGUAGES.EN);
      return;
    }
    if (languageInput === "EN") {
      this.props.changeLanguageRedux(LANGUAGES.VI);
      return;
    }
    return;
  };
  render() {
    const { processLogout, userInfo } = this.props;
    const { user } = this.state;
    console.log("userInfor", this.props.userInfo);

    console.log(this.state.menuApp);
    return (
      // <div className="header-container">
      //   {/* thanh navigator */}
      //   <div className="header-tabs-container">
      //     <Navigator menus={adminMenu} />
      //   </div>

      //   {/* nút logout */}
      //   <div className="btn btn-logout" onClick={processLogout}>
      //     <i className="fas fa-sign-out-alt"></i>
      //   </div>
      // </div>
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={this.state.menuApp} />
        </div>
        {/* box user */}
        <div className="box-user">
          <div className="user">
            <span className="avatar">
              <img
                src={userInfo && (userInfo.image || userImage)}
                alt="avatar"
              />
            </span>
            <span className="name-user">
              {userInfo && userInfo.lastName
                ? userInfo.firstName + " " + user.lastName
                : ""}
            </span>
          </div>
          <Link to="/home">
            <div className="btn-to-home" title="Trang chủ">
              <AiFillHome className="icon" />
            </div>
          </Link>
          <span
            className="languages"
            onClick={(e) => this.handleChangeLanguage(e.target.innerText)}
          >
            <FormattedMessage id="language" />
          </span>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),

    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
