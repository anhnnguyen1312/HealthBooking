import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import DetailDoctor from "../containers/Patient/Doctor/DetailDoctor";
import DetailSpecialty from "../containers/Patient/Specialty/DetailSpecialty";
import DetailClinic from "../containers/Patient/Clinic/DetailClinic";

import * as actions from "../store/actions";

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import CustomScrollbars from "../components/CustomScrollbars";

import { path } from "../utils";
import HomePage from "./HomePage/HomePage";

import Home from "../routes/Home";
// import Login from '../routes/Login';
import Login from "./Auth/Login";

// import Header from "./Header/Header";
import System from "../routes/System";

import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";
import Doctor from "../routes/Doctor";
import DetailNews from "./Patient/HandBook/DetailNews";
import ListSpecialty from "./ListPage/ListSpecialty";
import ListDoctor from "./ListPage/ListDoctor";
import ListClinic from "./ListPage/ListClinic";

class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  async componentDidMount() {
    this.handlePersistorState();
    await this.props.getAllSpecialtyRedux();
    await this.props.getAllClinicRedux();
    await this.props.getHandbookRedux();
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Router history={history}>
            <div className="main-container">
              {/* <ConfirmModal /> */}
              {/* {this.props.isLoggedIn && <Header />} */}

              <div className="content-container">
                <CustomScrollbars style={{ width: "100%", height: "100vh" }}>
                  <Switch>
                    <Route path={path.HOME} exact component={Home} />
                    <Route
                      path={path.LOGIN}
                      component={userIsNotAuthenticated(Login)}
                    />
                    <Route
                      path={path.SYSTEM}
                      component={userIsAuthenticated(System)}
                    />
                    <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                    <Route path={path.DOCTOR} component={Doctor} />
                    <Route
                      path={path.DETAIL_SPECIALTY}
                      component={DetailSpecialty}
                    />
                    <Route
                      path={path.LIST_SPECIALTY_PAGE}
                      component={ListSpecialty}
                    />
                    <Route
                      path={path.LIST_DOCTOR_PAGE}
                      component={ListDoctor}
                    />
                    <Route
                      path={path.LIST_CLINIC_PAGE}
                      component={ListClinic}
                    />
                    <Route path={path.DETAIL_CLINIC} component={DetailClinic} />
                    <Route path={path.DETAIL_NEWS} component={DetailNews} />

                    <Route path={path.HOMEPAGE} component={HomePage} />
                  </Switch>
                </CustomScrollbars>
              </div>

              <ToastContainer
                className="toast-container"
                toastClassName="toast-item"
                bodyClassName="toast-item-body"
                autoClose={false}
                hideProgressBar={true}
                pauseOnHover={false}
                pauseOnFocusLoss={true}
                closeOnClick={false}
                draggable={false}
                closeButton={<CustomToastCloseButton />}
              />
            </div>
          </Router>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSpecialtyRedux: () => dispatch(actions.getAllSpecialty()),
    getHandbookRedux: () => dispatch(actions.getHandbookRedux()),
    getAllClinicRedux: () => dispatch(actions.getAllClinicRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
