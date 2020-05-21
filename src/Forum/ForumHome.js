import React, { Component } from "react";
import Forumcontentone from "./ForumContentOne";
import Forumcontenttwo from "./ForumContentTwo";
import { Tabs } from "antd";
import ForumTrending from "./ForumTrendingThread";
import { Link } from "react-router-dom";
import ThreadLink from "./ThreadLink";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class ForumHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
          <div
            className="forum-home-service"
            style={{ display: "flex", flexDirection: "row" }}
          >
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/steamhome">
                <button className="forum-service-now">SERVICE NOW</button>
              </Link>
              <Link to="/forum/clubhome">
                <button
                  style={{ marginTop: "2em", fontWeight: "bold" }}
                  className="forum-service-now"
                >
                  MOTO CLUB
                </button>
              </Link>
            </div>
          </div>
          <div className="forum-head-image" style={{ position: "relative" }}>
            <img
              style={{ width: "40em", borderRadius: "10px" }}
              src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></img>
            <h3
              style={{
                position: "absolute",
                top: "2.3em",
                fontWeight: "900",
                fontFamily: "Montserrat",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              1 year with a jeep <br />
              compass
            </h3>
          </div>
          <a className="seeall-forum">SEE ALL</a>
        </div>
        <div
          className="forumcontentone"
          style={{
            padding: "5em",
            position: "relative",
            borderBottom: "2px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Link to="/forum/thread/news">
            <Forumcontentone
              threadimage="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              threadhead="My pre-worshipped Mercedes A-Class (A180) "
            />
          </Link>
          <Link to="/forum/thread/news1">
            <Forumcontentone
              threadimage="https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              threadhead="My Ford Figo 1.5L DCT (Automatic) "
              threadcontent="So it all started out of a premonition! And I booked Grandi10. But then Hyundai dealer Cartel happened. And then Figo happened.
            While Papa’s 5.5 yrs old WagonR Vxi was spic ..."
            />
          </Link>
          <Link to="/forum/thread/news">
            <Forumcontentone
              threadimage="https://images.pexels.com/photos/173286/pexels-photo-173286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              threadhead="DIY: iPHCAR Bi-Xenon Projector Foglamp installation on my Cedia  "
              threadcontent="Oh well, hello there! I am back after a long time away. How long if you ask?
            Precisely 2 posts in May 2018 & a completely active status until 2013 I would say.
            Penning down my recent DIY ..."
            />
          </Link>
          <a className="seeall-forum">SEE ALL</a>
        </div>
        <div
          className="forum-threadtwo"
          style={{
            padding: "5em",
            position: "relative",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Forumcontenttwo
            threadimagetwo="https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            threadheadtwo="BMW and the Kidney grille - Is a radical design change needed? "
            threadcontenttwo="BMW Kidney grilles - is an iconic grille design which has been .... "
          />
          <Forumcontenttwo
            threadimagetwo="https://images.pexels.com/photos/88628/pexels-photo-88628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            threadheadtwo="Long term ownership review - My Honda City VX CVT  "
            threadcontenttwo="First things first – let me eat that frog and address the elephant in the room - YES! I’m a big time.... "
          />
          <Forumcontenttwo
            threadimagetwo="https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            threadheadtwo="An impromptu planned trip to Jim Corbett  "
            threadcontenttwo="Hello all, I would like to thank the mods for accepting my membership request and this is my... "
          />
          <a className="seeall-forum">SEE ALL</a>
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
              <ThreadLink />
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  trendinghead="The Automotive Memes Thread"
                  trendingcontent="Big thanks to Devesh Gosavi for suggesting this thread! "
                  timethread="3 mins ago"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="The Automotive Memes Thread"
                  trendingcontent="Big thanks to Devesh Gosavi for suggesting this thread! "
                  timethread="2 hours ago"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="The Automotive Memes Thread"
                  trendingcontent="Big thanks to Devesh Gosavi for suggesting this thread! "
                  timethread="02/04/2020"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="The Automotive Memes Thread"
                  trendingcontent="Big thanks to Devesh Gosavi for suggesting this thread! "
                  timethread="21/03/2020"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/2635534/pexels-photo-2635534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="The Automotive Memes Thread"
                  trendingcontent="Big thanks to Devesh Gosavi for suggesting this thread! "
                  timethread="19/03/2020"
                />
              </Link>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
