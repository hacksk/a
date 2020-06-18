import {
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Popover,
  Collapse,
  Alert,
} from "antd";
import React from "react";
import axios from "axios";
import ReplyComment from "./ReplyComment";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";

const URL = "https://automoto.techbyheart.in/api/v1/forum";
const content = (id) => (
  <div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        axios
          .delete(`${URL}/delete/${id}/`)
          .then((res) => {
            console.log(res.data);
            console.log(id);
          })
          .catch((e) => console.log(e));
      }}
    >
      Delete
    </button>
    <Link to={`/forum/content/${id}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("edit");
          // Do the edit operation
        }}
      >
        Edit
      </button>
    </Link>
  </div>
);
const { Panel } = Collapse;
const { TextArea } = Input;
const text = <ReplyComment />;
const CommentList = ({ comments, likeCount, isLiked, threadId }) => (
  <List
    dataSource={comments}
    header={
      <div>
        <span>
          {`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            // isLiked?unlike():likeCount();
          }}
          style={{ color: "black" }}
        >
          Like {likeCount}
        </button>
      </div>
    }
    itemLayout="horizontal"
    renderItem={(props) => (
      <Comment
        content={props.content}
        author={props.username}
        datetime={props.time}
        avatar={props.avatar}
      >
        <div style={{ position: "absolute", right: "0", top: "0" }}>
          <div
            className="forum-more"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Popover
              placement="leftTop"
              content={() => content(threadId)}
              trigger="click"
            >
              <MdMoreVert />
            </Popover>
          </div>
        </div>
        <Collapse bordered={false}>
          <Panel header="Reply" key="1">
            {text}
          </Panel>
        </Collapse>
      </Comment>
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

class ForumComment extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.thread);
    this.state = {
      comments: this.props.thread.comment,
      likeCount: this.props.thread.like_count,
      threadId: this.props.thread.id,
      submitting: false,
      value: "",
      content: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    const { content } = this.state;
    this.setState({
      submitting: true,
    });

    axios
      .post(
        `https://automoto.techbyheart.in/api/v1/forum/comment/${this.props.thread.id}/`,
        {
          content: this.state.value,
        }
      )
      .then((res) => {
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
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
          ],
        });
      })
      .catch((error) => {
        window.location.replace("/signin");
      })
      .finally(() => {
        this.setState({
          submitting: false,
        });
      });

    // if (!this.state.value) {
    //   return;
    // }
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value, likeCount, threadId } = this.state;

    return (
      <div className="commenting-forum">
        {comments.length > 0 && (
          <CommentList
            comments={comments}
            likeCount={likeCount}
            threadId={threadId}
          />
        )}
        {this.props.isAuthenticated ? (
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
        ) : (
          <Alert
            message="Warning"
            description="You need to sign in to comment."
            type="warning"
            showIcon
            closable
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForumComment);
