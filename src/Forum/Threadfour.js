import React, { Component } from "react";
import Demo from "./Demo";

export default class Threadfour extends Component {
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
          BMW and the Kidney grille - Is a radical design change needed?
          </h5>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            The latest BMW to sport the distinctive design is the just-launched
            X7, a hulking, menacing mass of large SUV with an imposing façade
            fronted by an in-your-face rendition of the famous ‘kidney grille’.
            There’ll be no missing the X7 when it looms large in your rear-view
            mirror.
          </p>
          <br />
          <p>
            But where did the ‘kidney grille’ design originally come from? To
            try and unearth that mystery, we have to go back to Bruchsal, a
            small city in southern Germany approximately 300km west of Munich.
            (Fun fact: Bruchsal is the asparagus capital of Europe… no really.)
            It’s a murky history, to be sure, with no definitive answer it
            seems. But the folklore, the apocryphal history of the ‘kidney
            grille’ seems to start here in Bruchsal in 1930 when brothers Rudolf
            and Fritz Ihle started their coachbuilding business.
          </p>
          <img
            alt="Thread"
            src="https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
          <p>
            BMW’s history as a manufacturer of aircraft engines and motorcycles
            before it expanded into cars is well documented. That expansion
            happened in 1928, when BMW bought the struggling Automobilwerk
            Eisenach, a company enjoying a licensing agreement with the Austin
            Motor Company to build a variant of the popular Austin 7 model, the
            Dixi 3/15, rebadged the BMW Dixi in 1928 before dropping Dixi
            altogether the following year.
            <br /> <br />
            That business is still thriving today, and chances are, you have
            driven one of their creations. Still based in asparagus town,
            Bruchsal, today Fahrzeugbau Ihle manufactures dodgem cars and rides
            for amusement parks, while the distinctive bifurcated grille it may
            or may not have designed, lives on in every BMW.
          </p>
        </div>
      </div>
    );
  }
}
