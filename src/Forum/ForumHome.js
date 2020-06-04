import React, { Component } from "react";
import Forumcontentone from "./ForumContentOne";
import Forumcontenttwo from "./ForumContentTwo";
import { Tabs } from "antd";
import ForumTrending from "./ForumTrendingThread";
import { Link } from "react-router-dom";
import axios from 'axios';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class ForumHome extends Component {
  state = {
    subthread: []
  }

  componentDidMount() {
    axios.get(`https://automoto.techbyheart.in/api/v1/forum/subforum-thread-list/1/`)
      .then(res => {
        this.setState({data: res.data});

      })
  }
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
                {this.state.title}
              </h6>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/services">
                <button className="forum-service-now">SERVICE NOW</button>
              </Link>
            </div>
          </div>
          <div className="forum-head-image" style={{ position: "relative" }}>
            <img alt="imageexample"
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
          <a href="#seeall" className="seeall-forum">SEE ALL</a>
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
              threadimage="https://images.pexels.com/photos/1288491/pexels-photo-1288491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              threadhead="DIY: iPHCAR Bi-Xenon Projector Foglamp installation on my Cedia  "
              threadcontent="Oh well, hello there! I am back after a long time away. How long if you ask?
            Precisely 2 posts in May 2018 & a completely active status until 2013 I would say.
            Penning down my recent DIY ..."
            />
          </Link>
          <a href="#seeall" className="seeall-forum">SEE ALL</a>
        </div>
        <div
          className="forum-threadtwo"
          style={{
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
          <a href="#seeall" className="seeall-forum">SEE ALL</a>
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
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  trendinghead=" Why you must practice the 'Idling Rule' with Turbo-Charged Cars"
                  trendingcontent="Small displacement turbocharged engines are getting increasingly popular on our roads. With tougher emission norms & fuel-economy concerns worldwide, the trend is only expected to grow. Nearly every diesel car in the market is turbocharged now. Turbo-petrols will also be commonplace soon.  "
                  timethread="3 mins ago"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="Best Practices : Maintain your Car in Top Shape"
                  trendingcontent="There are no shortcuts to maintaining a car well and the exercise does require a little effort. But I can assure you, every rupee & minute spent on your car's upkeep will be recovered through a superior driving, owning & resale experience. A well-kept car will serve you better and prove more reliable in the long run. A healthy car is a safer car too. You'll retain it longer, thus saving you big bucks in depreciation losses. Whatever way you look at it, there's tremendous return-on-investment in keeping your car tidy. "
                  timethread="2 hours ago"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="Pictorial Guide: How to change a flat tyre!"
                  trendingcontent=" In the case of a flat tyre which needs immediate replacing to avoid damage to the tyre/tube, here is what you need to do. "
                  timethread="02/04/2020"
                />
              </Link>
              <Link to="/forum/thread">
                <ForumTrending
                  threadprof="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  trendinghead="'My Car Won't Start' | What To Do"
                  trendingcontent="A driver's worst nightmare is that time when his car won't start. Or, the engine dies exactly when he is negotiating a tricky crossing. It's even more worrisome if the driver is a lady (especially in India) and the sun has already set, or if the location is a lonely highway instead of the city. This is the time when one regrets not knowing a little more about how cars work.  "
                  timethread="21/03/2020"
                />
              </Link>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
