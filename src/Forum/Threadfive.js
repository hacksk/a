import React, { Component } from "react";
import Demo from "./Demo";

export default class Threadfive extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="threadexpand">
        <div className="threadexpand-content">
          <div className="thread-profile-header">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                alt="Thread"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              ></img>
              <p>vishnu6282</p>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>1 hour ago</p>
          </div>
          <h5>Long term ownership review - My Honda City VX CVT</h5>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/88628/pexels-photo-88628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            First things first – let me eat that frog and address the elephant
            in the room - YES! I’m a big time lurker in the forums here and only
            today when I was double guessing how long has it been in the shadows
            did I realise it’s been a good dozen years – give or take. And in
            full disclosure, if not for the lockdown and me sitting at home WITH
            additional leaves (“Never have I ever…” stuff right here), this post
            wouldn’t have been here. Also, going by my past behaviour (the
            lurking bit) and multiple unsuccessful attempts at joining the
            discussions here, I am not very confident of remaining chirpy enough
            on the forums post this lockdown also but I’ll sincerely try.
          </p>
          <br />
          <p>
            Part of the reason why I don’t post much (read: at all) is also
            because I work in the automotive industry and cannot be too sure of
            not slipping up in excited debates (which go off in my mind when I
            see some of the comments from this side) I also understand that I’m
            not the only guy from the industry here in the forums but still
          </p>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/3541550/pexels-photo-3541550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            Now with that out of the way, I guess an introduction is warranted.
            I’m an automotive engineer with about a decade of industry work-ex
            now. However, even after 10 years, the more I learn about stuff, the
            more I realise how much I don’t know. I find this very amusing.
            <br /> <br />
            I’m also almost equally a driving/riding enthusiast with a slight
            bias towards riding and can’t sit at home without atleast one
            longish ride or drive every other weekend and some overnight travels
            every 3-5 weeks once. Have owned so far in chronological order,
          </p>
        </div>
      </div>
    );
  }
}
