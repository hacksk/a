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
      .get(`https://automoto.techbyheart.in/api/v1/forum/^list`)
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
        {this.state.forums.map(forum => (
          <p
            style={{
              color: "white",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "1em",
              paddingLeft: "4em"
            }}
          >
            {forum.name}
            <ul>
              {forum.sub_forums.map(sub_forum => (
                <Link to={`/forum/forumlist/${sub_forum.id}`}>
                  <li
                    style={{
                      color: "white",
                      padding: "1em",
                      paddingLeft: "4em"
                    }}
                  >
                    {sub_forum.title}
                  </li>
                </Link>
              ))}
            </ul>
          </p>
        ))}
      </div>
    );
  }
}
