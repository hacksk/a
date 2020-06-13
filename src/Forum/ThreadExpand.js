import React, { Component } from "react";
import Demo from "./Demo";

export default class ThreadExpand extends Component {
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
              <p>u/carlover</p>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>1 hour ago</p>
          </div>
          <h5>2020 BMW X5 M Competition review</h5>
          <img
            alt="Thread"
            src={require("../assets/news banner 2.png")}
          ></img>
          <p>
            The BMW X5 M Competition has so much going for it, it’s a bit like a
            car designed via a focus group. It’s spacious, practical, has a
            lovely cabin, great infotainment and is fast yet comfy. Oh, this
            focus group all live in Monaco, by the way. Yep, the X5 M
            Competition is watery-eye expensive. More than £100,000 expensive.
            It isn’t alone, however, because it competes with other blisteringly
            quick large SUVs such as the Mercedes-AMG GLE 63 and Porsche
            Cayenne, which aren’t exactly budget cars. You can’t be the shy and
            retiring type to own an X5 M Competition, with its gaping black
            grille, huge air intakes, huge wheels, large exhausts and vivid
            unique paint colours helping it stand out over the standard X5. And,
            if by some miracle you’d missed the exterior, the X5 M Competition’s
            interior is every bit as in-your-face. Think seriously
            figure-hugging seats with quilted stitching, aluminium trim, sports
            pedals and ambient lighting. Of course, there’s the chance to up the
            ante with BMW’s options list, but a superb fit and finish are
            standard.
          </p>
          <br />
          <p>
            One thing that stays the same versus stand X5s is the infotainment
            system, although it’s one of the best in the business. It’s BMW’s
            top-end Professional system, which gets a 12-inch screen that can be
            controlled by touch, a rotary dial between the front seats or even a
            very good voice control system. It also gets Apple CarPlay as
            standard (with Android Auto to follow in time), although you’ll have
            to pay for it beyond year one and Mercedes’ digital dials are more
            visually impressive and configurable than the ones you get as
            standard in the BMW.
          </p>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            As such, in town, this big SUV doesn’t feel quite so nimble, but on
            the motorway it’ll breeze down slip roads and overtake faster-moving
            traffic with a simple twitch of the right foot, all the while
            remaining more comfortable and quiet than it has any right to be
            given its sporty intentions. It all sounds great, but it’s worth
            bearing in mind that the also-V8 BMW X5 M 50i model does 90% of what
            this M Competition model can do while being vastly cheaper. However,
            if you have the budget and the need for the pinnacle of BMW SUVs,
            then the X5 M Competition will satisfy and then some.
            <br /> <br />
            Although it's engaging around the figure eight, we have a few
            reservations about the RAV4's overall driving dynamics. The
            crossover feels a bit slow passing traffic on the highway, and
            pressing hard on the accelerator produces an unpleasant groan from
            the engine. We also prefer the CR-V's smoother ride, which is one of
            the reasons the Honda won our recent compact SUV comparison.
          </p>
        </div>
      </div>
    );
  }
}
