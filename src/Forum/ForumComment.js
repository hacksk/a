import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ForumList extends Component {
  constructor() {
    super();
    this.state = {
      forums: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/^latest-threads`)
      .then(res => {
        const forums = res.data.data;
        this.setState({ forums });
        console.log(forums);
      });
  }
  render() {
    return (
      <div
        className="subforum-list"
        style={{ paddingTop: "12vh", paddingLeft: "4em" }}
      >
        {this.state.forums.map(comment => (
          <p
            style={{
              color: "white",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "1em",
              paddingLeft: "4em"
            }}
          >
            {comment.content}
            <ul>
              
            </ul>
          </p>
        ))}
      </div>
    );
  }
}
