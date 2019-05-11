import React, { PureComponent } from "react";
import { actionCreator } from "./store";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScollTopShow);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
          {this.props.showScroll ? (
            <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
          ) : null}
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getHomeContent();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScollTopShow);
  }
}
const mapstateToProps = state => {
  return {
    showScroll: state.getIn(["home", "showScroll"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeContent() {
      // dispatch(actionCreator.getHomeAxios());
      const action = actionCreator.getHomeAxios();
      dispatch(action);
    },
    changeScollTopShow() {
      if (document.documentElement.scrollTop > 400) {
        const action = actionCreator.ShowScroll();
        dispatch(action);
      } else {
        const action = actionCreator.HideScroll();
        dispatch(action);
      }
    }
  };
};

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(Home);
