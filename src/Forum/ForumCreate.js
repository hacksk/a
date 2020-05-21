import React, { Component } from "react";
import { Radio } from "antd";
import { message, Button } from 'antd';

const info = () => {
  message.info('Couldnt Connect');
};

export default class ForumCreate extends Component {
  render() {
    return (
      <div style={{ padding: "8em" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "rgba(255, 255, 255, 0.38)",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.08",
              paddingBottom: "3em",
              paddingTop: "3em",
            }}
          >
            <p>Give a short sub-forum title</p>
            <input
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "white",
                border: "none",
                padding: "1em",
                borderRadius: "8px",
                width: "30em",
              }}
              placeholder="Add title"
            ></input>
          </div>
          <div
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.08",
              paddingBottom: "3em",
              paddingTop: "3em",
            }}
          >
            <div style={{ width: "45%" }}>
              <p>Choose master forum</p>
              <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
                <Radio.Button value="a">Automoto</Radio.Button>
                <Radio.Button value="b">Automoto India</Radio.Button>
                <Radio.Button value="c">Automoto Global</Radio.Button>
                <Radio.Button value="d">Mods</Radio.Button>
                <Radio.Button value="e">Travelogues</Radio.Button>
              </Radio.Group>
            </div>
          </div>
          <div
            style={{
              paddingBottom: "3em",
              paddingTop: "3em",
            }}
          >
            <p>Region</p>
            <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
              <Radio.Button value="a">India</Radio.Button>
            </Radio.Group>
          </div>
          <button type="primary" onClick={info} className="create-forum-button">CREATE FORUM</button>
        </div>
      </div>
    );
  }
}
