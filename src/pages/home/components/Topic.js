import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";
import ItemPic from "../../../statics/item.png";

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    // const jsList = list.toJS();
    return (
      <TopicWrapper>
        {list.map(item => (
          <TopicItem key={item.get("id")}>
            <img className="Topic-pic" src={ItemPic} alt="" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = state => {
  return { list: state.getIn(["home", "topicList"]) };
};

export default connect(
  mapStateToProps,
  null
)(Topic);
