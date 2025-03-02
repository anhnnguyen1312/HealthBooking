import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
class TestLabel extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <label htmlFor="labelText">labelText</label>
        <div aria-label="labelText">
          <Select placeholder="placeholder ne" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TestLabel);
