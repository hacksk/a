import React, { Component } from "react";
import axios from "axios";
// import ForumTrending from "./ForumTrendingThread";
// import Demo from "./Demo";

export default class NewsExpanded extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/^latest-threads/`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwMDYzMDU3LCJqdGkiOiI4Mzc5YmRkMWQzNjU0YjA2YWRjNjk1OWY3MDdmZmJkZSIsInVzZXJfaWQiOjExLCJ1c2VyIjp7ImlkIjoxMSwibGFzdF9sb2dpbiI6bnVsbCwiZW1haWwiOiJ2aXNobnV1ckB0ZWNoYnloZWFydC5pbiIsImZpcnN0X25hbWUiOiIiLCJsYXN0X25hbWUiOiIiLCJ1c2VybmFtZSI6InZpc2hudTYyODIiLCJwaG9uZSI6Iis5MTYyODI0NDM3NjQiLCJkYXRlX2pvaW5lZCI6IjIwMjAtMDYtMDVUMTU6MDU6NTEuMjQzMDAwWiIsImdyb3VwcyI6W10sInVzZXJfcGVybWlzc2lvbnMiOltdfX0.cNGYIScBCDckwTSifG6a1Sm-Oh4VOx8O6rWiU8wKdYs"
        }
      })
      .then(res => {
        const persons = res.data.data;
        const person = persons.find(
          x => x.id == this.props.match.params.content
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
                {this.state.person.thread_time}
              </p>
            </div>
            <h5>{this.state.person.title}</h5>
            <img alt="" src={this.state.person.header_image}></img>
            <p>{this.state.person.content}</p>
            <br />
          </div>
        </div>
      );
    } else return <div>Loading...</div>;
  }
}
