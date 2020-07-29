import React, { Component } from "react";

export default class TrendingCard extends Component {
  render() {
    return (
      <div className="trending-card">
        <img alt="" src={this.props.trendingimg}></img>
        <div className="trending-card-sub">
          <h5 style={{color:"#fc5c2d",fontWeight:"bold"}}>REVIEW</h5>
          <h4>{this.props.trendinghead}</h4>
          <h5>{this.props.trendingcontent}</h5>
        </div>
      </div>
    );
  }
}
