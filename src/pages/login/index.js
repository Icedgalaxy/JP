import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Redirect } from "react-router-dom";
import { LoginlWrapper, LoginlBox, Input, Button } from "./style";

class Login extends Component {
  render() {
    const { loginState } = this.props;
    if (!loginState) {
      return (
        <LoginlWrapper>
          <LoginlBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginlBox>
        </LoginlWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  loginState: state.getIn(["login", "login"])
});

const mapDispatchToProps = Dispatch => ({
  login(accountElem, passwordElem) {
    Dispatch(actionCreator.login(accountElem.value, passwordElem.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
