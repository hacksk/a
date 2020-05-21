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
          <h5>Default My Ford Figo 1.5L DCT (Automatic)</h5>
          <img src="https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          <p>
            So it all started out of a premonition! And I booked Grandi10. But
            then Hyundai dealer Cartel happened. And then Figo happened. While
            Papa’s 5.5 yrs old WagonR Vxi was spic and span, had only 25000 kms
            on odo, I could see the hesitation to take out the car in maddening
            Pune’s traffic. He is 61 now, retired recently and prefers to travel
            by scooter (read Access 125) over driving his car. Well I do agree
            scooter offers impeccable convenience in traffic but, his safety was
            bothering me. Again WagonR lacked basic safety features - ABS and
            airbags. It is not at all safe now a days for an elderly person to
            travel on a two wheeler. Then this thought clicked me, why not
            replace it with automatic hatch? It will serve him as well as my
            wife who is equally reluctant to slot gears. Decided then. While he
            didn’t agree to let go his WagonR which was as good as new, he
            finally gave in to my persistence.
          </p>
          <br />
          <p>
            My requirements were as below not in particular order: • Petrol
            automatic, No AMT • 2 airbags and ABS minimum • Right size for city
            use, easy maneuverability • Pocket friendly maintenance • OTR budget
            8L
          </p>
          <img src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
          <p>
            I am talking about sometime in Jan 2017. Papa is not into cars and
            new to the world of automatic cars. We started the search. I was
            never convinced on AMT and don’t consider AMT as true automatics. I
            always feel that’s a ‘Jugaad’ to serve ‘kitna deti hai’ hungry
            crowd. So, no AMT, choices were limited. Budget was fixed around 8L
            on road as we were going to buy in cash. We test drove Grand i10 TC,
            Baleno CVT, Jazz CVT, EcoSport DCT and Dzire AMT. YES! Figo was not
            test driven but directly booked! We test drove new Dzire, as Papa
            was keen on Maruti, just to get the feel of AMT. It was fun
            explaining Papa, types of automatics in layman’s terms and explain
            the advantages disadvantages of each. Though many suggested, I
            didn’t consider Micra CVT. I find it too old to consider and Nissan
            as a brand seems smug with their portfolio. Which was the last car
            they launched? I don’t remember!
            <br /> <br />
            Wonderful car in a small package. Perfect size for the city.
            Interiors exude class! Automatic is not available in top trim Asta.
            The next trim in which it is available is Sportz (O). It comes with
            machine cut (or diamond cut?) alloy wheels, touchscreen unit,
            airbags, reverse parking camera, rear A/C vent.
          </p>
          {/* <Demo /> */}
        </div>
      </div>
    );
  }
}
