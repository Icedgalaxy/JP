import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
import { CSSTransition } from "react-transition-group";
import { actionCreator } from "./store";
import { actionCreator as loginActionCreator } from "../../pages/login/store";
import { Link } from "react-router-dom";
import {
  Logo,
  Nav,
  NavItem,
  SearchBox,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  Arrow,
  Rotate,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style";

class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseOn,
      // isRotate,
      handleAreaEnter,
      handleAreaLeave,
      handleChangePage
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        // 处理数据为空列表仍渲染的bug问题
        if (i < jsList.length) {
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseOn) {
      return (
        <SearchInfo
          onMouseEnter={handleAreaEnter}
          onMouseLeave={handleAreaLeave}
        >
          <Arrow />
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              {/* 此处使用箭头函数与否的区别以及不使用箭头函数会出现bug */}
              {/* <SearchInfoSwitch onClick={handleChangePage(page, totalPage)}> */}
              换一批
            </SearchInfoSwitch>
            {/* <Rotate className={isRotate ? "rotate" : ""} /> */}
            <Rotate />
            <SearchInfoList>{pageList}</SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      );
    } else {
      return null;
    }

    // for (let i = (page - 1) * 10; i < page * 10; i++) {
    //   pageList.push(jsList[i]);
    // }

    // if (focused) {
    //   return (
    //     <SearchInfo>
    //       <Arrow />
    //       <SearchInfoTitle>
    //         热门搜索
    //         <SearchInfoSwitch>换一批</SearchInfoSwitch>
    //         <SearchInfoList>
    //           {pageList.map(item => (
    //             <SearchInfoItem key={item}>{item}</SearchInfoItem>
    //           ))}
    //         </SearchInfoList>
    //       </SearchInfoTitle>
    //     </SearchInfo>
    //   );
    // } else {
    //   return null;
    // }
  }
  render() {
    const {
      focused,
      handleInputFocus,
      hanleInputBlur,
      list,
      login,
      exit
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={exit}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe76a;</i>
          </NavItem>
          <SearchBox>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={hanleInputBlur}
                placeholder="搜索"
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe623;
            </i>
            {this.getListArea()}
          </SearchBox>

          <Addition>
            <Link to="/write">
              <Button className="write">
                <i className="iconfont">&#xe616;</i>写文章
              </Button>
            </Link>

            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    mouseOn: state.getIn(["header", "mouseOn"]),
    // isRotate: state.getIn(["header", "isRotate"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    exit() {
      dispatch(loginActionCreator.exit());
    },
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getList());
      dispatch(actionCreator.handleInputFocus());
    },
    hanleInputBlur() {
      dispatch(actionCreator.hanleInputBlur());
    },
    handleAreaEnter() {
      dispatch(actionCreator.handleAreaEnter());
    },
    handleAreaLeave() {
      dispatch(actionCreator.handleAreaLeave());
    },
    handleChangePage(page, totalPage, isRotate) {
      // console.log(isRotate);
      // if (page < totalPage) {
      //   dispatch(actionCreator.handleChangePage(page + 1, isRotate));
      // } else {
      //   dispatch(actionCreator.handleChangePage(1, isRotate));
      // }
      if (page < totalPage) {
        dispatch(actionCreator.handleChangePage(page + 1));
      } else {
        dispatch(actionCreator.handleChangePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
