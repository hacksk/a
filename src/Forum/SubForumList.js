import React, { Component } from "react";
import Forumcontenttwo from "./ForumContentTwo";
import { Tabs } from "antd";
import ForumTrending from "./ForumTrendingThread";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { connect } from "react-redux";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}
class SubForumList extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      subthread: [],
      sub_forums: [],
    };
  }

  componentDidMount() {
    const threadId = this.props.match.params.list;
    this.setState({ threadId });

    axios
      .get(
        `https://beta1.techbyheart.in/api/v1/forum/subforum-thread-list/${threadId}`
      )
      .then((res) => {
        const persons = res.data.data;
        const subthread = res.data.data.slice(0, 3);
        this.setState({ persons, subthread });
      });
    axios
      .get(`https://beta1.techbyheart.in/api/v1/forum/list/`)
      .then((res) => {
        const sub_forums = res.data.data;
        this.setState({ sub_forums });
        console.log(sub_forums);
      });
  }
  render() {
    return (
      <div className="threadlist" style={{ padding: "8em" }}>
        <div className="thread-forum-list">
          <div
            className="forum-home-link-forum"
            style={{
              padding: "10em",
              paddingBottom: "0",
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "0",
              paddingRight:"0"

            }}
          >
            {" "}
            {this.props.isAuthenticated ? (
              <Link to={`/forum/forumlist/subforum/${this.state.threadId}`}>
                <button className="forum-service-now">CREATE THREAD</button>
              </Link>
            ) : (
              <Link to="/signin">
                <button className="forum-service-now">CREATE THREAD</button>
              </Link>
            )}
          </div>
          <div
            className="threadlist-head"
            style={{
              borderBottom: "2px solid rgba(255, 255, 255, 0.08)",
              color: "rgba(255, 255, 255, 0.87)",
              fontFamily: "Montserrat",
              fontWeight: "600",
              paddingLeft: "9em",
            }}
          >
            <p>THREADS</p>
          </div>
          <div
            className="forum-threadtwo"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {this.state.subthread.map((person) => (
              <Link to={`/forum/thread/${person.id}`}>
                <Forumcontenttwo thread={person} />
              </Link>
            ))}

          </div>

          <div
            className="forum-threads"
            style={{ padding: "6em", paddingTop: "0" }}
          >
            <Tabs defaultActiveKey="2" onChange={callback}>
              <TabPane tab="LATEST" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="TRENDING" key="2">
                {this.state.persons.map((person) => (
                  <Link to={`/forum/thread/${person.id}`}>
                    <ForumTrending
                      threadprof="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      trendinghead={person.title}
                      trendingcontent={person.content}
                      timethread={<Moment fromNow>{person.date}</Moment>}
                    />
                  </Link>
                ))}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(SubForumList);
