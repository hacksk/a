import React, { Component } from "react";
import axios from "axios";
// import ForumTrending from "./ForumTrendingThread";
// import Demo from "./Demo";

export default class NewsExpanded extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://automoto.techbyheart.in/api/v1/forum/subforum-thread-list/1/`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwMDAyMTAxLCJqdGkiOiI3MGFlYTg3ZTc2NjM0NTY1YjNmNTZlZTI4ODE0NjE5OCIsInVzZXJfaWQiOjF9.80cPGM13SKrlxgARazfGLN8TbeJks8FB0Bg8f9961hE",
          },
        }
      )
      .then((res) => {
        const persons = res.data.data;
        console.log(persons);

        this.setState({ persons });
      });
    window.scrollTo(0, 0);
  }
  render() {
    let currentItem = this.props.items.find(
      x => x.id == this.props.match.params.content
    );
    return (
      <div item={currentItem} className="threadexpand">
        <div className="threadexpand-content">
          <div className="thread-profile-header">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                alt=""
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              ></img>
              <p>u/carlover</p>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>1 hour ago</p>
          </div>
          {this.state.persons.map((person) => (
            <h5>{person.title}</h5>
          ))}
          {this.state.persons.map((person) => (
            <img alt="" src={person.header_image}></img>
          ))}

          {this.state.persons.map((person) => (
            <p>{person.content}</p>
          ))}

          <br />
          <p>
            My requirements were as below not in particular order: • Petrol
            automatic, No AMT • 2 airbags and ABS minimum • Right size for city
            use, easy maneuverability • Pocket friendly maintenance • OTR budget
            8L
          </p>
          <img
            alt=""
            src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          ></img>
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
