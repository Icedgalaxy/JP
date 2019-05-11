import React, { PureComponent } from "react";
import { Recom, RecomItem, Erwei } from "../style";
import RePic from "../../../statics/huiyuan.png";
import ErPic from "../../../statics/erwei.png";

class Recommend extends PureComponent {
  render() {
    return (
      <Recom>
        <RecomItem>
          <img className="re-pic" src={RePic} alt="" />
        </RecomItem>
        <RecomItem>
          <img className="re-pic" src={RePic} alt="" />
        </RecomItem>
        <RecomItem>
          <img className="re-pic" src={RePic} alt="" />
        </RecomItem>
        <RecomItem>
          <img className="re-pic" src={RePic} alt="" />
        </RecomItem>
        <Erwei>
          <img className="er-pic" src={ErPic} alt="" />
          <h4 className="down">下载简述手机App ></h4>
          <p className="else">随时随地发现和创</p>
        </Erwei>
      </Recom>
    );
  }
}

export default Recommend;
