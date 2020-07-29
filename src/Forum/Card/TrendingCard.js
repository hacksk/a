import React, { Component } from "react";

export default class TrendingCard extends Component {
  render() {
    return (
      <div className="trending-card">
        <img alt="" src={this.props.trendingimg}></img>
        <div className="trending-card-sub">
          <h5>REVIEW</h5>
          <h4>{this.props.trendinghead}</h4>
          <h4>{this.props.trendingcontent}</h4>
        </div>
      </div>
    );
  }
}
