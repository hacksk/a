import React, { Component } from "react";
import { Rate } from "antd";
import { TiTick } from "react-icons/ti";
import { Popconfirm, message } from "antd";

function confirm(e) {
  console.log(e);
  message.success("Feedback Submitted");
}

function cancel(e) {
  console.log(e);
  message.error("Cancelled");
}

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

class FeedBack extends Component {
  state = {
    value: 3,
  };
  handleChange = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;

    return (
      <div>
        <div style={{paddingTop:"2em"}} className="rating">
          <h3>FEEDBACK</h3>
          <span className="feedback">
            <Rate tooltips={desc} onChange={this.handleChange} value={value} />
            {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
          </span>
          <div className="feedback-comment">
            <textarea
              className="feedback-input"
              placeholder="Want to tell us something? Write about it
here"
              type="text "
              rows="2"
              cols="4"
              onkeyup="Allow()"
            ></textarea>
            <Popconfirm
          title="Sure you want to continue?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Confirm"
          cancelText="Cancel"
        >
          <a href="#" className="feedback-btn">
            UPLOAD
          </a>
        </Popconfirm>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedBack;
