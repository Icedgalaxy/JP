import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WriteWrapper } from "./style";

class Write extends Component {
  render() {
    const { loginState } = this.props;
    if (loginState) {
      return <WriteWrapper>Write</WriteWrapper>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  loginState: state.getIn(["login", "login"])
});

export default connect(
  mapStateToProps,
  null
)(Write);
