import styled from "styled-components";
import LogoPic from "../../statics/logo.png";
import RotatePic from "../../statics/rotate.png";

export const HeaderWrapper = styled.div`
  // position: relative;
  position:fixed;
  top:0;
  width:100%;
  background:#fff
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${LogoPic});
  background-size: 100%;
  cursor:pointer;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: px;
  font-family: "dengxian";
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    margin-right: 100px;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchBox = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-family: "dengxian";
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #777;
  }
  &.focused {
    width: 250px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  font-family: "dengxian";
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const Arrow = styled.div`
  position: absolute;
  left: 40px;
  top: -3px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  matgin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  .rotate {
    transition: all 0.2s ease-in;
    transform: rotate(180deg);
    transform-origin: center center;
  }
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;
export const Rotate = styled.div`
  width: 16px;
  height: 16px;
  float: right;
  margin-right: 5px;
  background: url(${RotatePic});
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-family: "dengxian";
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`;
