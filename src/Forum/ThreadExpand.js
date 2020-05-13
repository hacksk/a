import React, { Component } from "react";
import ForumTrending from "./ForumTrendingThread";
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
            <div style={{display:"flex",flexDirection:"row"}}>
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
              <p>u/carlover</p>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>1 hour ago</p>
          </div>
          <h5>
            Toyota RAV4 Fuel Economy: What Kind of MPG Does it Get in the Real
            World?
          </h5>
          <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          <p>
            The Toyota RAV4 achieves competitive fuel economy in its segment—if
            you look at the EPA numbers. But as we know, these figures don't
            always reflect real-world driving. So how efficient is the RAV4
            really? We conducted our own fuel economy test to find out.
          </p>
          <br />
          <p>
            The 2019 Toyota RAV4 AWD in our long-term fleet is EPA-rated at
            25/33/28 mpg city/highway/combined. But we recorded a much better
            highway number, which bumped up the RAV4's combined rating by a
            considerable margin. Our Real MPG results came in at 24.2/39.1/29.2
            mpg, making the RAV4 more efficient than our long-term 2017 Honda
            CR-V Touring AWD, which scored 21.9/34.2/26.1 mpg. Pretty
            impressive.
          </p>
          <img src="https://images.pexels.com/photos/1149140/pexels-photo-1149140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          <p>
            "[In] Sport mode with traction control and stability control off
            (and truly off, by the way), it doesn't mind blending the braking
            into cornering, even sliding a bit, with good yaw control," he
            noted. "The steering isn't very talkative, but it does make the RAV4
            go where it's asked to. Overall, it's a fun little Run About
            Vehicle."
            <br /> <br />
            Although it's engaging around the figure eight, we have a few
            reservations about the RAV4's overall driving dynamics. The
            crossover feels a bit slow passing traffic on the highway, and
            pressing hard on the accelerator produces an unpleasant groan from
            the engine. We also prefer the CR-V's smoother ride, which is one of
            the reasons the Honda won our recent compact SUV comparison.
          </p>
          <Demo />
        </div>
      </div>
    );
  }
}
