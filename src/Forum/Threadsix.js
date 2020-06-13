import React, { Component } from "react";
import Demo from "./Demo";

export default class Threadsix extends Component {
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
            <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>3 hour ago</p>
          </div>
          <h5>An impromptu planned trip to Jim Corbett</h5>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            Hello all, I would like to thank the mods for accepting my
            membership request and this is my first travelogue on Team-BHP. All
            of you must be wondering about the oxymoron title of the travelogue.
            You will get to know the reason behind it later. It all started in
            the last week of December 2019 with all the New Year blues because
            me and my wife were going to spend the New Year home because of our
            Q3 closing commitments.
          </p>
          <br />
          <p>
            We started from Delhi at around 6 AM after picking up the car from
            designated site, went through inspection and everything looked good
            to go. As soon as we started it started to rain heavily, very
            uncharacteristic March weather in the north and the same weather
            continued till the whole journey with intermittent relief. The
            journey was made eventful by the Google aunty with its weird choice
            of road and at one point of time we literally had to go through
            lanes which were just a few inches wider than our car.
          </p>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            We reached our destination at 1:30 pm and parked our car at the
            residence of owner of the Gypsy. He was very helpful the whole time.
            Then we proceeded towards the Dhikala gate in his Gypsy which took
            30 minutes, got the gate pass after baggage check and made payment
            for extra bed. It took around another 30 minutes and off we were
            inside the forest. Just a few kilometres inside and it was a
            mesmerising sight. It was the best among the three wildlife I had
            been to earlier.
            <br /> <br />
            The dinner was really good given that we were in a place around
            35kms inside the jungle with no network reception. This is the best
            convenience of staying in Dhikala region as the three times meals
            are sorted which is not the case in Sultan zone where we had to
            carry the food packets for our meals. Just as we were having dinner
            rain pelted down and apparently it did for better part of the night
            rendering the Tiger sighting improbable as per support staff.
          </p>
        </div>
      </div>
    );
  }
}
