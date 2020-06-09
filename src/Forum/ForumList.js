import React, { Component } from "react";
import axios from "axios";

export default class ForumList extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      subthread: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/^list`)
      .then((res) => {
        const persons = res.data.data;
        console.log(persons);

        this.setState({ persons });
      });
  }
  render() {
    return (
      <div style={{ paddingTop: "8em", paddingLeft: "4em" }}>
        {this.state.persons.map((person) => (
          <p
            style={{
              color: "white",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "1em",
              paddingLeft: "4em",
            }}
          >
            {person.name}
          </p>
        ))}
        {this.state.persons.map((person) => (
          <p
            style={{
              color: "white",
              padding: "1em",
              paddingLeft: "4em",
            }}
          >
            {person.sub_forums.title}
          </p>
        ))}
      </div>
    );
  }
}
