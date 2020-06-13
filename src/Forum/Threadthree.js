import React, { Component } from "react";
import Demo from "./Demo";

export default class Threadthree extends Component {
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
          <h5>
            Toyota RAV4 Fuel Economy: What Kind of MPG Does it Get in the Real
            World?
          </h5>
          <img
            alt="Thread"
            src="https://i.pinimg.com/564x/33/ff/c3/33ffc3472becac6f9403fc42fb079f4d.jpg"
          ></img>
          <p>
            The Dacia Duster is a back-to-basics small family SUV with chunky
            off-road styling and a reasonably roomy interior. It’s the ideal
            choice if you have a strict budget and want a fuss-free family
            transport. At entry level, the Duster is considerably cheaper than
            any similarly priced SUV alternative but that’s because you barely
            get any equipment as standard – there’s no radio or air conditioning
            in the Access model. The model you actually want is the Comfort
            (skipping the spartan Essential version) and then you get a
            well-equipped Duster for a still-reasonable amount of money.
          </p>
          <br />
          <p>
            Sure, there are still plenty of hard, scratchy plastics dotted about
            the cabin, but at least you get some flashy chrome trims, more
            supportive front seats and a 7-inch touchscreen infotainment system
            with built-in sat nav. Not bad for such an affordable SUV. Also
            winning the Dacia Duster some brownie points is its fairly spacious
            cabin. There’s more than enough space for tall adults to get comfy
            in the front and you get driver’s seat-height adjustment in all but
            the most basic Access models.
          </p>
          <img
            alt="Thread"
            src="https://i.pinimg.com/564x/a1/be/9f/a1be9fb9cda85ce3bafba9a973465caa.jpg"
          ></img>
          <p>
            So, the Dacia Duster makes a good budget buy if you’re after
            something practical and relatively cheap to run, but if safety and
            upmarket features are high on your list of priorities then you might
            want to look elsewhere. The Renault Kadjar, for example, costs just
            a few thousand pounds more (or less with a significant carwow
            saving) but comes with significantly more equipment across the
            range.
            <br /> <br />
            There’s plenty of room in the Dacia Duster’s front and back seats for tall adults to get comfy and the boot’s pretty generous, but it isn’t particularly easy to load very heavy luggage
          </p>
        </div>
      </div>
    );
  }
}
