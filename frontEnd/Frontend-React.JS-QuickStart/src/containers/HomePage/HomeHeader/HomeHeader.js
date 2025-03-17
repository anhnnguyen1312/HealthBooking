import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logo2 from "../../../assets/images/2.png";
import logo3 from "../../../assets/images/3.png";
// import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import * as actions from "../../../store/actions";
import "./HomeHeader.scss";

import { IoLogIn } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
// import Menu from "../Sections/Menu/Menu";
import Tippy from "@tippyjs/react";
import { withRouter } from "react-router";

import { dataMenuUser, dataHomeHeader } from "../../../dataLocal/dataMenu";

import "tippy.js/dist/tippy.css"; // optional

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // handleChangeLanguage = (language) => {
  //     if (language === 'VN') {
  //         this.props.changeLanguageRedux(LANGUAGES.EN);
  //         return;
  //     }
  //     if (language === 'EN') {
  //         this.props.changeLanguageRedux(LANGUAGES.VI);
  //         return;
  //     }
  //     return;
  // };
  handleLogOut = () => {
    window.location.href = `/home`;
    this.props.processLogout();
  };

  handleChangeLanguage = (language) => {
    console.log(language);
    // this.props.changeLanguageRedux(language);

    if (language === "VN") {
      this.props.changeLanguageRedux(LANGUAGES.EN);
      return;
    }
    if (language === "EN") {
      this.props.changeLanguageRedux(LANGUAGES.VI);
      return;
    }
    return;
  };
  componentDidMount() {}
  // executeScroll = () => this.myRef.current.scrollIntoView();
  handleClick = (link) => {
    // this.props.toggleModel(modal);
    console.log("link", link);
    // const navigate = useNavigate();
    // navigate(`${link}`);
    window.location.href = `/${link}`;
    //link && <Redirect to="/list-specialty" />;
  };
  render() {
    let { isLoggedIn } = this.props;
    console.log("this.props.language", this.props.language);
    console.log("this.props.userInfo", this.props.userInfo);
    return (
      <div className="home-header-container">
        <div className="home-header-content w80">
          <div className="left-content">
            <Link to="/home">
              <div className="header-logo">
                <img src={logo2} className="logo2" alt="logo"></img>
                <img src={logo3} className="logo3" alt="logo"></img>
              </div>
            </Link>
          </div>
          <div className="center-content">
            {dataHomeHeader.length > 0 &&
              dataHomeHeader.map((item, index) => {
                return (
                  <div
                    className="child-content"
                    key={index}
                    onClick={() => this.handleClick(item.modal)}
                  >
                    <div className="title-child">{item.title}</div>
                    <div className="title-sub">{item.sub}</div>
                  </div>
                );
              })}
            {/* <div
              className="child-content"
              // onClick={() => this.handleClick(item.modal)}
            >
              <div className="title-child">Chuyên khoa</div>
              <div className="title-sub">Tìm bác sĩ chuyên khoa</div>
            </div>
            <div
              className="child-content"
              // onClick={() => this.handleClick(item.modal)}
            >
              <div className="title-child">Cơ sở y tế</div>
              <div className="title-sub">Tìm Cơ sở y tế</div>
            </div>
            <div
              className="child-content"
              // onClick={() => this.handleClick(item.modal)}
            >
              <div className="title-child">Tìm bác sỉ </div>
              <div className="title-sub">Tìm bác sĩ chuyên khoa</div>
            </div>
            <div
              className="child-content"
              // onClick={() => this.handleClick(item.modal)}
            >
              <div className="title-child">Gói khám</div>
              <div className="title-sub">khám sức khỏe toonge quát</div>
            </div> */}
          </div>
          <div className="right-content">
            {/* {!isLoggedIn && ( */}
            <Tippy delay={[0, 100]} content="Ngôn ngữ">
              <div className="language">
                <span
                  onClick={(e) => {
                    this.handleChangeLanguage(e.target.innerText);
                  }}
                >
                  <FormattedMessage id="language" />
                </span>
              </div>
            </Tippy>
            {/* )} */}

            {/* <div className="language">
              <span
                onClick={(e) => {
                  this.handleChangeLanguage(LANGUAGES.VI);
                }}
              >
                <FormattedMessage id="language" /> VN
              </span>
            </div>
            <div className="language">
              <span
                onClick={(e) => {
                  this.handleChangeLanguage(LANGUAGES.EN);
                }}
              >
               <FormattedMessage id="language" /> 
                EN
              </span>
            </div> */}
            {((this.props.userInfo && this.props.userInfo?.roleId === "R1") ||
              this.props.userInfo?.roleId === "R2") && (
              // <Menu items={dataMenuUser}>
              // <div className="btn_user">
              //   <MdManageAccounts />
              //   <span>
              //     {this.props.language === "en" ? "Dashboard" : "Hệ thống"}
              //   </span>
              // </div>
              <Tippy
                delay={[0, 100]}
                content={
                  this.props.language === "en" ? "Dashboard" : "Hệ thống"
                }
              >
                <div className="btn_user">
                  <MdManageAccounts />
                  {/* <span>
                  {this.props.language === "en" ? "Dashboard" : "Hệ thống"}
                </span> */}
                </div>
              </Tippy>
              // </Menu>
            )}
            {isLoggedIn ? (
              <div
                className="login"
                text="Login"
                onClick={(e) => this.handleLogOut()}
              >
                <IoLogIn />
                <span>
                  <FormattedMessage id="home-header.logout" />
                </span>
              </div>
            ) : (
              // log in
              <Link to="/login" style={{ paddingBottom: "3px" }}>
                <div className="login" text="Login">
                  <IoLogIn />
                  <span>
                    <FormattedMessage id="home-header.login" />
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// tuong tự useAction, để gán state của redux vô props của cpn này, => languagy,isLoggedIn là props dc truyền từ redux
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,

    // listDataSpecialtyRedux: state.patient.listDataSpecialty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageRedux: (language) => dispatch(changeLanguageApp(language)),
    processLogout: () => dispatch(actions.processLogout()),

    //changeLanguageRedux: (language) => console.log("language action", language),
  };
};
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
