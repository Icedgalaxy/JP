import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import store from "./store";
import { GlobalStyle } from "./style";
import { IconFont } from "./statics/iconfont/iconfont";
import Login from "./pages/login";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconFont />
        <BrowserRouter>
          <Header />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail/:id" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
