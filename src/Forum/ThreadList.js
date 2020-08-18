import React, { Component } from "react";
import Forumcontenttwo from "./ForumContentTwo";
import { Tabs } from "antd";
import ForumTrending from "./ForumTrendingThread";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

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
      .get(`https://beta1.techbyheart.in/api/v1/forum/thread-list/`)
      .then((res) => {
        const persons = res.data.data;
        const subthread = res.data.data.slice(3, 6);
        this.setState({ persons, subthread });
      });
  }
  render() {
    return (
      <div className="threadlist" style={{ padding: "8em" }}>
        <div className="thread-forum-list">
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
                      threadprof={`https://beta1.techbyheart.in${person.userimage}`}
                      trendinghead={person.title}
                      trendingcontent={person.content}
                      timethread={<Moment fromNow>{person.date}</Moment>}
                      trendingheaderimg={
                        person.header_image_url
                          ? person.header_image_url.url
                          : person.header_image.image
                      }
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
