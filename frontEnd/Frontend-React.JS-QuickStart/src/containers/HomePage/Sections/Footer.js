import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../../assets/images/logo.png";
import {
  IoLocationSharp,
  IoCheckmarkSharp,
  IoPhonePortraitOutline,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate(prevProps) {
    if (prevProps.languageRedux !== this.props.languageRedux) {
    }
  }

  render() {
    return (
      <div className="footer-container">
        <div className="w60">
          <div className="footer-up">
            <div className="d-flex flex-column h-100">
              <footer className="w-100 py-4 flex-shrink-0">
                <div className="container-footer py-4">
                  <div className="row gy-4 gx-5">
                    <div className="infor-footer col-lg-5 col-md-6">
                      {/* <div
                        className="image-footer"
                        style={{
                          backgroundImage: `url(https://healthbooking.vn/assets/icon/healthbooking-2020.svg)`,
                        }}
                      ></div> */}
                      <img src={logo} className="image-footer" />
                      <h2 className="company">
                        Công ty Cổ phần Công nghệ healthbooking
                      </h2>
                      <div className="address">
                        <IoLocationSharp /> 187A Lê Văn Lương, Phước Kiển, Nhà
                        Bè, Hồ Chí Minh
                      </div>
                      <div className="dk">
                        <IoCheckmarkSharp /> ĐKKD số: 0106790291. Sở KHĐT Hồ Chí
                        Minh cấp ngày 1/11/2022
                      </div>
                      <div className="iso"></div>
                    </div>

                    <div className="branch-footer col-lg-3 col-md-6">
                      <div className="branch">
                        <h4>Trụ sở tại Hồ Chí Minh</h4>
                        <p>
                          187A Lê Văn Lương, Phước Kiển, Nhà Bè, Hồ Chí Minh
                        </p>
                      </div>
                      <div className="branch">
                        <h4>Văn phòng tại TP Hồ Chí Minh</h4>
                        <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                      </div>
                      <div className="branch">
                        <h4>Hỗ trợ khách hàng</h4>
                        <p>support@healthbooking.vn (7h - 18h)</p>
                      </div>
                    </div>
                  </div>
                  <div className="download-app">
                    {" "}
                    <IoPhonePortraitOutline />
                    <p>
                      Tải ứng dụng healthbooking cho điện thoại hoặc máy tính
                      bảng: Android iPhone/iPad Khác
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className="footer-down">
          <div className="w60">
            <div className="content-footer">
              <small>&copy;2022 HealthBooking </small>
              <span>
                <IoLogoFacebook className="icon-network facebook" />
                <IoLogoYoutube className="icon-network youtube" />
              </span>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
