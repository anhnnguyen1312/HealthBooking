import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { withRouter } from "react-router";
class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header-container">hihi</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);
