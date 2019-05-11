import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 56px;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -17px;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 17px;
  margin-bottom: 17px;
  .Topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .List-pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 13px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
  font-family: "dengxian";
`;
export const Recom = styled.div`
  width: 100%;
  height: 228px;
`;
export const RecomItem = styled.a`
  display: block;
  width: 280px;
  .re-pic {
    width: 100%;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;
export const Erwei = styled.a`
  display: block;
  overflow:hidden;
  width: 100%;
  height: 82px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  box-sizing:border-box;
  .er-pic {
    display: block;
    float:left
    width: 60px;
    height: 60px;
    margin-top: 11px;
    margin-left: 28px;
  }
  .down {
    display: block;
    float: right;
    margin-top:20px;
    margin-right:25px;
  }
  .else {
    display: block;
    float: right;
    margin-top:5px;
    margin-right:30px;
  }
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  font-size: 10px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
`;
