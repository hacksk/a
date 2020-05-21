import React, { Component } from "react";
import ForumTrending from "./ForumTrendingThread";
import Demo from "./Demo";

export default class NewsExpanded extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="threadexpand">
        <div className="threadexpand-content">
          <div className="thread-profile-header">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
              <p>u/carlover</p>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>1 hour ago</p>
          </div>
          <h5>My pre-worshipped Mercedes A-Class (A180)</h5>
          <img src="https://images.pexels.com/photos/93632/pexels-photo-93632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          <p>
            I am a self-confessed petrolhead. I truly believe that cars are a
            heady mix of art and engineering, and no other man-made machine can
            tug at your heart strings more than what cars are capable of. Cars
            have personalities and character. They are a great source of joy and
            happiness. A car buying decision for me is based on how the car
            makes me feel rather what the on-paper specs say or what the resale
            value of the car would be after ‘x’ number of years.
          </p>
          <br />
          <p>
            This philosophy reflects in the cars that I have historically owned.
            Chevrolet Spark, Tata Indica D90 – ZX edition, a red Fiat Punto 1.2
            Fire Petrol and Ford Aspire 1.5 DCT. None of these cars were
            triumphant in conquering the mass market. But, each of these cars
            made a connection with me deep inside. I cherish the memories of
            countless miles I drove them through all possible terrains (some of
            them can be defined as roads in India). Every 3-4 years, I get this
            undying urge to change my ride. And that is where the story of my
            pre-worshiped Mercedes A Class begins.
          </p>
          <img src="https://images.pexels.com/photos/195636/pexels-photo-195636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
          <p>
            The third generation Mercedes A Class (W176) was launched
            internationally in 2012 and was brought to India in 2013 via the CBU
            route. I was in love with the car since the day it launched and
            never missed a chance to ogle at it whenever I saw one on the road.
            I could not afford to buy a new one back then (neither can I now).
            It was the entry point into the world of uber-cool German luxury.
            All these years, I secretly wished I could buy one, but the rational
            parts of my brain sabotaged my sugary sweet dreams of owning the
            3-pointed star. My dreams too were modestly middle-class because I
            never dreamt of having a G-wagon or a SLS AMG in my garage. My heart
            was set on the humble (relatively speaking) A class.
            <br /> <br />
            After several rounds of discussions, my parents too warmed up to the
            idea and, lo and behold, they agreed. After some paperwork for the
            loan, some peering in the deep abyss of my finances and some
            sleepless nights wondering about the maintenance costs, the A Class
            was finally in my garage.
          </p>
          {/* <Demo /> */}
        </div>
      </div>
    );
  }
}
