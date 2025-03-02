import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ManageSchedule from "../containers/System/Doctor/ManageSchedule";
// import ManageAppointment from '../containers/System/Doctor/ManageAppointment';
// import ManageHandbook from '../containers/System/Handbook/ManageHandbook';
// import ListHandbook from '../containers/System/Handbook/ListHandbook';
// import ManageNews from '../containers/System/News/ManageNews';
// import ListNews from '../containers/System/News/ListNews';
import { TYPE_USER } from "../utils";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";

import Header from "../containers/Header/Header";
import ManageAppointment from "../containers/System/Doctor/ManageAppointment";
import ManageBlog from "../containers/System/Blog/ManageBlog";

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    let { userInfo } = this.props;
    let isAuth = userInfo
      ? userInfo.roleId === TYPE_USER.DOCTOR ||
        userInfo.roleId === TYPE_USER.ADMIN
      : false;

    return (
      <React.Fragment>
        <BrowserRouter>
          <Router history={history}>
            <Header />
            <div className="system-container">
              <div className="system-list">
                {isAuth && (
                  <Switch>
                    <Route
                      path="/doctor/manage-schedule"
                      component={ManageSchedule}
                    />
                    <Route
                      path="/doctor/manage-patient-appointment"
                      component={ManageAppointment}
                    />
                    <Route
                      path="/doctor/manage-patient-appointment"
                      component={ManageAppointment}
                    />
                    {/* <Route path="/doctor/manage-handbook" component={ManageHandbook} />
                                <Route path="/doctor/list-handbook" component={ListHandbook} /> */}
                    <Route path="/doctor/manage-news" component={ManageBlog} />
                    {/* <Route path="/doctor/list-news" component={ListNews} /> */}
                  </Switch>
                )}
              </div>
            </div>
          </Router>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
