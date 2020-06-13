import React, { Component } from "react";
import Demo from "./Demo";

export default class Threadtwo extends Component {
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
            src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            The Skoda Octavia vRS is a brilliant option if you want a
            well-built, very practical family car – or even more spacious estate
            – that’s pretty quick, but not horrendously expensive to run. The
            vRS was released in 2013 and updated in 2017 with a new, somewhat
            startled-looking twin-headlight design, an upgraded eight-inch
            infotainment screen, LED headlights and a 10hp power boost. That
            increase means it now has 230hp, which is enough to get the Octavia
            vRS from 0-62mph in just 6.7 seconds, although fuel economy of more
            than 40mpg is easily achievable at a cruise. Go for an overtake at
            any legal speed, though, and the vRS’ power lets you speed past
            slower traffic quickly and safely.
          </p>
          <br />
          <p>
            That’s even more true of the new vRS 245 model that, you guessed it,
            has 245hp along with a limited-slip differential that makes the
            Octavia grippier in corners. Unsurprisingly, it’s the one to have if
            you’re partial to driving down a country road at speed but even the
            basic model feels agile in bends, if not quite as pinned to the road
            as the likes of the Ford Focus ST. That said, the Skoda is a much
            more comfortable cruiser than the Ford when you’re just driving
            normally.
          </p>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/1149140/pexels-photo-1149140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            The new eight-inch sat-nav system is equally as intuitive. ‘Hot’
            keys let you skip between sub menus and the large volume knob is
            easy to feel for as you drive down the road.
            <br /> <br />
            On top of that, Apple CarPlay, Android Auto and Skoda’s SmartLink+
            are fitted as standard, so you can use the apps on your compatible
            smartphone via the car’s big screen. This ease of use seems to run
            through the Skoda – it’s fast, but its performance doesn’t come at
            the expense of everyday practicality or comfort. If you want to see
            what kind of deals are available on the Skoda Octavia vRS, click
            through to the deals page.
          </p>
        </div>
      </div>
    );
  }
}
