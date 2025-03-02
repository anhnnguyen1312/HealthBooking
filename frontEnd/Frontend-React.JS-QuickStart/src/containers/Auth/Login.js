import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi, createUserServices } from "../../services";
import { KeyCodeUtils } from "../../utils";
import Loading from "../../components/Loading";
import validator from "validator";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",

      message: "",
      isRegister: false,
      isShowMessage: false,
      isShowLoading: false,
      isClickLogin: "",
    };
  }
  handlerKeyDown = (event) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode === KeyCodeUtils.ENTER) {
      this.handleClickSubmit();
    }
  };
  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value, message: "" });
  };
  handleClickSubmit = () => {
    let { isRegister } = this.state;
    if (isRegister) {
      this.handleRegister();
    } else {
      this.handleLogin();
    }
  };
  handleClickSignUp = () => {
    this.setState({
      isRegister: !this.state.isRegister,
      isShowMessage: false,
      message: "",
    });
  };
  handleRegister = async () => {
    let { email, password, confirmPassword, firstName, lastName, phoneNumber } =
      this.state;
    if (
      email &&
      password &&
      confirmPassword &&
      phoneNumber &&
      firstName &&
      lastName
    ) {
      this.setState({
        message: "",
        isShowLoading: true,
        // isClickLogin: "click khi login",
      });
    } else {
      this.setState({
        message: "Missing field",
        isShowLoading: false,
        //isClickLogin: "click khi missing field",
      });
      return;
    }
    if (!validator.isEmail(email)) {
      this.setState({
        message: "Email không hợp lệ.",
        isShowMessage: true,
        isShowLoading: false,
      });
      return;
    } else {
      try {
        if (phoneNumber) {
          if (
            !validator.isMobilePhone(phoneNumber, "vi-VN", {
              strictMode: false,
            })
          ) {
            this.setState({
              message: "Số điện thoại không hợp lệ.",
              isShowMessage: true,
              isShowLoading: false,
            });
            return;
          }
        }
        let dataResponse = await createUserServices({
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          confirmPassword,
        });
        console.log(dataResponse);
        if (
          dataResponse &&
          dataResponse.data.errCode !== 0 &&
          dataResponse.data.errMessage
        ) {
          this.setState({
            message: dataResponse.data.errMessage,
            isShowMessage: true,
            isShowLoading: false,
          });
        }
        if (dataResponse && dataResponse.data.errCode === 0) {
          //login success
          // const cookies = new Cookies();
          // cookies.set('accessToken', dataResponse.accessToken, { path: '/' });
          // classStorage.setItemStorage('refreshToken', classCookies.getRefreshToken('refreshToken'));

          this.handleLogin();
          this.props.history.push(`/home`);
          this.setState({
            isShowLoading: false,
          });
        }
      } catch (error) {
        if (error.response && error.response.data) {
          this.setState({
            message: error.response.errMessage,
            isShowMessage: true,
            isShowLoading: false,
          });
        }
      }
    }
  };
  handleLogin = async () => {
    if (this.state.email && this.state.password) {
      this.setState({
        message: "",
        isShowLoading: true,
        // isClickLogin: "click khi login",
      });
    } else {
      this.setState({
        message: "Missing field",
        isShowLoading: false,
        //isClickLogin: "click khi missing field",
      });
      return;
    }
    try {
      const dataResponse = await handleLoginApi(
        this.state.email,
        this.state.password
      );

      if (
        dataResponse &&
        dataResponse.data.errCode === 0 &&
        dataResponse.data.errMessage
      ) {
        this.props.userLoginSuccess(dataResponse.data.user);
      } else {
        console.log(dataResponse);

        this.setState({
          message: dataResponse.data.errMessage,
          isShowMessage: true,
          isShowLoading: false,
        });
      }
    } catch (error) {
      console.log("error", error.response);

      if (error.response && error.response.data) {
        this.setState({
          message: error.response.data.errMessage,
          isShowLoading: false,
        });
      }
    }
  };
  render() {
    console.log("userInfo", this.props.userInfo);
    return (
      <div className="login-background ">
        <div className="login-container position-loading">
          {this.state.isShowLoading && <Loading />}
          <div className="login-content">
            <div className="col-12 text-center">
              {this.state.isRegister ? "Đăng kí ngay" : "Đăng nhập ngay"}
            </div>
            <div className="login-form">
              {/* ho va ten khi dang ki */}
              {this.state.isRegister && (
                <>
                  <div className=" form-row mt-4 col-md-12 ">
                    <div className="form-group col-md-6 mt-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Họ (*)"
                        value={this.state.firstName}
                        onChange={(e) => this.handleChange(e, "firstName")}
                      />
                    </div>
                    <div className="form-group col-md-6 mt-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên (*)"
                        value={this.state.lastName}
                        onChange={(e) => this.handleChange(e, "lastName")}
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-12 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Số điện thoại (*)"
                      value={this.state.phoneNumber}
                      onChange={(e) => this.handleChange(e, "phoneNumber")}
                    />
                  </div>
                </>
              )}
              <div className="form-group col-md-12 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email (*)"
                  value={this.state.email}
                  onKeyDown={this.handlerKeyDown}
                  onChange={(e) => this.handleChange(e, "email")}
                />
              </div>
              <div className="form-group col-md-12 mt-4">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password (*)"
                  value={this.state.password}
                  onKeyDown={this.handlerKeyDown}
                  onChange={(e) => this.handleChange(e, "password")}
                />
              </div>
              {this.state.isRegister && (
                <div className="form-group col-md-12 mt-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password again(*)"
                    value={this.state.confirmPassword}
                    onKeyDown={this.handlerKeyDown}
                    onChange={(e) => this.handleChange(e, "confirmPassword")}
                  />
                </div>
              )}
            </div>

            <div className="col-12 text-response" style={{ color: "red" }}>
              <span>{this.state.message}</span>
            </div>
            <div className="col-12 btn-container">
              <button
                className="btn-login"
                onClick={() => this.handleClickSubmit()}
              >
                {this.state.isRegister ? "Đăng kí" : "Đăng nhập"}
              </button>
            </div>

            <div className="col-12 register">
              <span>
                Not a member?
                <span
                  className="btn-signup"
                  onClick={() => this.handleClickSignUp()}
                >
                  {" "}
                  {this.state.isRegister ? "Đăng nhập" : "Đăng kí"}
                </span>
              </span>
              {/* <p data-testid="email-display">{this.state.email}</p> */}
              {/* <p className="error-message">{this.state.message}</p> */}
              {/* <p data-testid="isClickLogin-display">
                {this.state.isClickLogin}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),

    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
