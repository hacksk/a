import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import React from "react";
import axios from "axios";
import Forumcontentone from "./ForumContentOne"
import {Link } from "react-router-dom"
import { DomEvent } from "leaflet";
import ForumComent from "./ForumComment";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      submitting: false,
      value: "",
      content: "",
      comments: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // componentDidMount() {
  //   axios
  //     .get(`https://automoto.techbyheart.in/api/v1/forum/^latest-threads/`)
  //     .then((res) => {
  //       const comments = res.data.data;
  //       console.log("data",comments);
  //       this.setState({ comments });
  //     });
  // }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    const { content } = this.state;
    axios
      .post(`https://automoto.techbyheart.in/api/v1/forum/comment/3/`, {
        content: this.state.value,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("adding error", error.response.data);
      });

    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "User12",
            avatar:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div className="commenting-forum">
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {/* <ForumComent/> */}
       {/* {this.state.comments.map((comment) => (
         <h3>{comment.comment.content}</h3>
          ))} */}
      </div>
    );
  }
}

export default Demo;
