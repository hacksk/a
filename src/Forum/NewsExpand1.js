import React, { Component } from "react";
import axios from "axios";
import { Spin, Space } from "antd";
// import ForumTrending from "./ForumTrendingThread";
// import Demo from "./Demo";

export default class NewsExpanded extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/^latest-threads/`)
      .then(res => {
        const persons = res.data.data;
        const person = persons.find(
          x => x.id.toString() === this.props.match.params.content
        );
        this.setState({ person });
      });
  }
  render() {
    if (this.state.person != null) {
      return (
        <div className="threadexpand">
          <div className="threadexpand-content">
            <div className="thread-profile-header">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  alt=""
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                ></img>
                <p>u/carlover</p>
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>
                {this.state.person.thread_date}
              </p>
            </div>
            <h5>{this.state.person.title}</h5>
            <img alt="" src={this.state.person.header_image}></img>
            <p>{this.state.person.content}</p>
            <br />
          </div>
        </div>
      );
    } else
      return (
        <div>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      );
  }
}
