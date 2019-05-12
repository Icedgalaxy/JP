import React from "react";
import Loadable from "react-loadable";

// import Loading from "./my-loading-component";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <div style={{'margin-top':'56px'}}>加载中</div>;
  }
});

export default () => <LoadableComponent />;
