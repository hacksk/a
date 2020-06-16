import React, { Component } from "react";
import Forumcontentone from "./ForumContentOne";
import Forumcontenttwo from "./ForumContentTwo";
import { Tabs } from "antd";
import ForumTrending from "./ForumTrendingThread";
import { Link } from "react-router-dom";
import axios from "axios";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

export default class ThreadList extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      subthread: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/thread-list/`)
      .then((res) => {
        const persons = res.data.data;
        const subthread = res.data.data.slice(3, 6);
        this.setState({ persons });
        this.setState({ subthread });
      });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="threadlist" style={{ padding: "8em" }}>
        <div className="thread-forum-list">
          {/* <div
            className="forum-home-link-forum"
            style={{
              padding: "10em",
              paddingBottom: "0",
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "5em",
              paddingTop: "0",
            }}
          >
            <Link to="/forum/forumlist/:create">
              <button className="forum-service-now">CREATE THREAD</button>
            </Link>
          </div> */}
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

            <a href="#seeall" className="seeall-forum">
              SEE ALL
            </a>
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
                      timethread={person.thread_date}
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
