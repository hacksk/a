import React, { Component } from "react";
import axios from "axios";


class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone:"",
      username:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      first_name,
      last_name,
      email,
      username,
      phone
    } = this.state;

    axios
    .post(
      `https://automoto.techbyheart.in/api/v1/user/`,
      {
        first_name:first_name,
        last_name:last_name,
        email:email,
        phone:phone,
        username:username
      
      },
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwMDAyMTAxLCJqdGkiOiI3MGFlYTg3ZTc2NjM0NTY1YjNmNTZlZTI4ODE0NjE5OCIsInVzZXJfaWQiOjF9.80cPGM13SKrlxgARazfGLN8TbeJks8FB0Bg8f9961hE`
        }
      }
    )
      .then((res) => {
        console.log("sign up res", res);
        console.log(res.data)
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    const handleOnDragStart = (e) => e.preventDefault();

    return (
      <div className="signup">
        <div className="signupform">
          {/* <AliceCarousel
            mouseTrackingEnabled
            autoPlay={false}
            disableAutoPlayOnAction={true}
            infinite={false}
          > */}
            <div className="forms-signup" onDragStart={handleOnDragStart}>
              <h1>PROFILE DETAILS</h1>

              <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={this.handleSubmit}
              >
                <input
                  name="first_name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
                <input
                  name="last_name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />

                <input
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <input
                  name="username"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Username"
                />
                <input
                  name="phone"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Phone"
                />
                <button style={{color:"black",background:"grey",marginTop:"2em",borderRadius:"8px",height:"6vh"}}>Submit</button>
              </form>
            </div>
            
          {/* </AliceCarousel> */}
        </div>
        ); }}
      </div>
    );
  }
}

export default SignupForm;
