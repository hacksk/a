import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ForumList extends Component {
  constructor() {
    super();
    this.state = {
      forums: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/list/`)
      .then((res) => {
        const forums = res.data.data;
        this.setState({ forums });
        // console.log(forums);
      });
  }
  render() {
    return (
      <div
        className="subforum-list"
        style={{ paddingTop: "12vh", paddingLeft: "4em" }}
      >
        {this.state.forums.map((forum) => (
          <div>
            <p
              style={{
                color: "white",
                background: "rgba(255, 255, 255, 0.08)",
                padding: "1em",
                paddingLeft: "70px",
              }}
            >
              {forum.name}
            </p>
            <ul style={{paddingLeft:"0",listStyleType:"none"}}>
              {forum.sub_forums.map((sub_forum) => (
                <Link to={`/forum/subforum/${sub_forum.id}`}>
                  <li
                    style={{
                      color: "white",
                      padding: "1em",
                      paddingLeft: "70px",
                      borderBottom:"2px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    {sub_forum.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
