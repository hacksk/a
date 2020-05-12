import React, { Component } from "react";

export default class ForumHome extends Component {
  render() {
    return (
      <div className="forum-home">
        <div
          className="forum-home-firstpart"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "99vh",
            padding: "5em",
          }}
        >
          <div className="forum-home-service" style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "SpaceAround",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontStyle: "italic",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: "80px",
                  marginBottom: "0",
                }}
              >
                35
              </h1>
              <h6
                style={{ color: "rgba(255, 255, 255, 0.6)", fontWeight: "600" }}
              >
                Days without service
              </h6>
            </div>
            <button className="forum-service-now">SERVICE NOW</button>
          </div>
          <h2>sdfhsdjf</h2>
          <a>SEE ALL</a>
        </div>
      </div>
    );
  }
}
