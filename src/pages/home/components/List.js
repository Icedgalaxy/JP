import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((Item, index) => (
          <Link key={index} to={"/detail/" + Item.get("id")}>
            <ListItem>
              <img className="List-pic" src={Item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{Item.get("title")}</h3>
                <p className="desc">{Item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore
          onClick={() => {
            getMoreList(page);
          }}
        >
          加载更多
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "page"])
  };
};

const mapDispatchToProps = Dispatch => {
  return {
    getMoreList(page) {
      Dispatch(actionCreator.getMoreList(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
