import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { LANGUAGES } from "../../utils";
import { Link } from "react-router-dom";
import "./CardItem.scss";
class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listClinic: [],
    };
  }
  render() {
    console.log("props", this.props.list);
    return (
      <>
        {this.props.type === "clinic" &&
          this.props.list.map((item) => {
            return (
              <Link
                to={`/detail-clinic/${item.id}`}
                key={item.id}
                style={{
                  flex: "1 1 33%",
                  maxWidth: "280px",
                  height: "280px",
                }}
              >
                <Card
                  body
                  inverse
                  outline
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        item.image ||
                        "https://firebasestorage.googleapis.com/v0/b/bookingcare-6a74c.appspot.com/o/files%2Fuser%2Fuser_d%C3%A8ault.png?alt=media&token=22bdda3a-856e-416d-bce5-b9e52a6004c7"
                      }
                    />
                  </div>
                  <CardBody
                    style={{
                      height: "40%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* <CardTitle tag="h5"> {item.name}</CardTitle> */}
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {item.name}
                    </CardSubtitle>
                    {/* <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText> */}
                    <Button
                      className="btn-fix"
                      // style={{
                      //   backgroundColor: "#216ba5",
                      //   lineHeight: "normal",
                      //   padding: "5px",
                      // }}
                    >
                      {this.props.button}
                    </Button>
                  </CardBody>
                </Card>
              </Link>
            );
          })}

        {this.props.type === "doctor" &&
          this.props.list.map((doctor) => {
            let nameVi = `${doctor.positionData?.valueVi}, ${doctor.firstName} ${doctor.lastName} `;
            let nameEn = `${doctor.positionData?.valueEn}, ${doctor.lastName} ${doctor.firstName} `;

            return (
              <Link
                to={`/detail-doctor/${doctor.id}`}
                //  className="item-slide hover"
                key={doctor.id}
                style={{
                  flex: "1 1 33%",
                  maxWidth: "280px",
                  height: "280px",
                }}
              >
                <Card
                  body
                  inverse
                  outline
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        doctor.image ||
                        "https://firebasestorage.googleapis.com/v0/b/bookingcare-6a74c.appspot.com/o/files%2Fuser%2Fuser_d%C3%A8ault.png?alt=media&token=22bdda3a-856e-416d-bce5-b9e52a6004c7"
                      }
                    />
                  </div>
                  <CardBody
                    style={{
                      height: "40%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* <CardTitle tag="h5">
                      {" "}
                      {this.props.languageRedux === LANGUAGES.VI
                        ? nameVi
                        : nameEn}
                    </CardTitle> */}
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {this.props.languageRedux === LANGUAGES.VI
                        ? nameVi
                        : nameEn}
                    </CardSubtitle>
                    {/* <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText> */}
                    <Button
                      className="btn-fix"
                      style={{
                        backgroundColor: "#216ba5",
                        lineHeight: "normal",
                        padding: "5px",
                      }}
                    >
                      {this.props.button}
                    </Button>
                  </CardBody>
                </Card>
              </Link>
            );
          })}
        {this.props.type === "specialty" &&
          this.props.list.map((item) => {
            return (
              <Link
                to={`/detail-specialty/${item.id}`}
                //  className="item-slide hover"
                key={item.id}
                style={{
                  flex: "1 1 33%",
                  maxWidth: "280px",
                  height: "280px",
                }}
              >
                <Card
                  body
                  inverse
                  outline
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        item.image ||
                        "https://firebasestorage.googleapis.com/v0/b/bookingcare-6a74c.appspot.com/o/files%2Fuser%2Fuser_d%C3%A8ault.png?alt=media&token=22bdda3a-856e-416d-bce5-b9e52a6004c7"
                      }
                    />
                  </div>
                  <CardBody
                    style={{
                      height: "40%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* <CardTitle tag="h5"> </CardTitle> */}
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {item.name}
                    </CardSubtitle>
                    {/* <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText> */}
                    <Button
                      className="btn-fix"
                      style={{
                        backgroundColor: "#216ba5",
                        lineHeight: "normal",
                        padding: "5px",
                      }}
                    >
                      {this.props.button}
                    </Button>
                  </CardBody>
                </Card>
              </Link>
            );
          })}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
    languageRedux: state.app.language,
    // listDataSpecialtyRedux: state.patient.listDataSpecialty,
    // listDataClinicRedux: state.patient.listDataClinic,
    // listDataHandbookRedux: state.patient.listDataHandbook,
    // topDoctorsRedux: state.doctor.topDoctors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //getAllSpecialtyRedux: () => dispatch(actions.getAllSpecialty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
