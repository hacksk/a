import { Comment, Avatar, Form, Button, List, Input } from "antd";
import React from "react";
import axios from "axios";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
  
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => (
      <Comment
        content={props.content}
        author={props.username}
        datetime={props.time}
        avatar={props.avatar}
      />
    )}
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

class ReplyComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      submitting: false,
      value: "",
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = () => {
    // const { content } = this.state;
    this.setState({
      submitting: true
    });

    axios
      .post(
        `https://automoto.techbyheart.in/api/v1/forum/reply/${this.props.thresdId}/`,
        {
          content: this.state.value
        }
      )
      .then(res => {
        const comment = res.data.data;
        this.setState({
          submitting: false,
          value: "",
          comments: [
            ...this.state.comments,
            {
              username: comment.username,
              content: comment.content,
              time: comment.time,
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
          ]
        });
      })
      .catch(error => {
        // console.log("adding error", error.response.data);
      })
      .finally(() => {
        this.setState({
          submitting: false
        });
      });

    // if (!this.state.value) {
    //   return;
    // }
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const {  submitting, value } = this.state;

    return (
      <div className="commenting-forum">
        {/* {comments.length > 0 && <CommentList comments={comments} />} */}
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

export default ReplyComment;
