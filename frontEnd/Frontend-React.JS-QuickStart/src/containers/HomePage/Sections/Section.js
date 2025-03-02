import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import clinic from "../../../assets/images/clinic.png";
import "./Section.scss";
import { PrevArrow, NextArrow } from "../../../components/CustomArrow";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickSpecialty = (item) => {};

  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.props.slideShow,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    let {
      listSpecialty,
      listClinic,
      listHandbook,
      typeSec,
      type,
      background,
      title,
      button,
    } = this.props;
    console.log(listHandbook, "listHandbook");
    console.log(listClinic, "listClinic");

    return (
      <div className={`section-container ${background}`}>
        <div className="w60">
          <div className="section-content">
            <div className="section-header">
              <span className="section-title">{title}</span>
              <button
                className="more"
                onClick={() => {
                  this.props.toggleModel(this.props.modal);
                }}
              >
                {button}
              </button>
            </div>
            <Slider {...settings}>
              {typeSec === "specialtyType" &&
                listSpecialty.map((item) => {
                  return (
                    <Link to={`/detail-specialty/${item.id}`} key={item.id}>
                      <div className="item-slide hover" key={item.id}>
                        <div className={`item-${type}`}>
                          <div className={`img-${type}`}>
                            <img className="img" src={item.image} alt="img" />
                          </div>
                          <p className={`text-${type}`}>{item.name} </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </Slider>
            <Slider {...settings}>
              {typeSec === "clinics" &&
                listClinic &&
                listClinic.length > 0 &&
                listClinic.map((item) => {
                  return (
                    <Link to={`/detail-clinic/${item.id}`} key={item.id}>
                      <div className="item-slide hover" key={item.id}>
                        <div className={`item-${type}`}>
                          <div className={`img-${type}`}>
                            <img
                              className="img-clinic"
                              src={item.image}
                              alt="img"
                            />
                          </div>

                          <p className={`text-${type}`}>{item.name}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </Slider>
            <Slider {...settings}>
              {typeSec === "handbook" &&
                listHandbook &&
                listHandbook.length > 0 &&
                listHandbook.map((item) => {
                  return (
                    <Link to={`/detail-news/${item.id}`} key={item.id}>
                      <div className="item-slide hover" key={item.id}>
                        <div className={`item-${type}`}>
                          <div className={`img-${type}`}>
                            <img
                              className="img"
                              src={item.imageLogo}
                              alt="img"
                            />
                          </div>

                          {/* <p className={`text-${type}`}>{item.tittle}</p> */}
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </Slider>
            {/* <Slider {...settings}>
              <div className="item-slide hover">
                <div className={`item-${type}`}>
                  <div className={`img-${type}`}>
                    <img className="img" src={clinic} alt="img" />
                  </div>

                  <p className={`text-${type}`}>Xuong khop</p>
                </div>
              </div>
              <div className="item-slide hover">
                <div className={`item-${type}`}>
                  <div className={`img-${type}`}>
                    <img className="img" src={clinic} alt="img" />
                  </div>

                  <p className={`text-${type}`}>Xuong khop</p>
                </div>
              </div>
              <div className="item-slide hover">
                <div className={`item-${type}`}>
                  <div className={`img-${type}`}>
                    <img className="img" src={clinic} alt="img" />
                  </div>

                  <p className={`text-${type}`}>Xuong khop</p>
                </div>
              </div>
              <div className="item-slide hover">
                <div className={`item-${type}`}>
                  <div className={`img-${type}`}>
                    <img className="img" src={clinic} alt="img" />
                  </div>

                  <p className={`text-${type}`}>Xuong khop</p>
                </div>
              </div>
              <div className="item-slide hover">
                <div className={`item-${type}`}>
                  <div className={`img-${type}`}>
                    <img className="img" src={clinic} alt="img" />
                  </div>

                  <p className={`text-${type}`}>Xuong khop</p>
                </div>
              </div>
              <div className="item-slide hover">
                <div className={`item-${type}`}>
                  <div className={`img-${type}`}>
                    <img className="img" src={clinic} alt="img" />
                  </div>

                  <p className={`text-${type}`}>Xuong khop</p>
                </div>
              </div>
            </Slider> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
