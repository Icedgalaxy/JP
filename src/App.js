import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import Header from "./common/header";
import store from "./store";
import { GlobalStyle } from "./style";
import { IconFont } from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconFont />
        <Header />
        <BrowserRouter></BrowserRouter>
      </Provider>
    );
  }
}

export default App;
