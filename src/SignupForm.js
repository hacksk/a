import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IoIosCamera, IoIosAddCircle } from 'react-icons/io';

class SignupForm extends Component {
    constructor(props) {
      super(props);

    this.state = {
      name: '',
      password: '',
      vehicle_model: '',
      vehicle_number: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {
      name,
      password,
      model_year,
      chasis_number,
      engine_number,
      vehicle_model,
      vehicle_number
    } = this.state;

    axios
      .post(
        'http://register.mgukalolsavam.in/api.php',
        {
          user: {
            Name: name,
            password: password,
            model_year: model_year,
            chasis_number: chasis_number,
            engine_number: engine_number,
            vehicle_number: vehicle_number,
            vehicle_model: vehicle_model
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log('sign up res', response);
        if (response.status === '200') {
          this.props.handleSuccessfulAuth(response.data);
          console.log("response check", response.status)
        }
      })
      .catch(error => {
        console.log('registration error', error);
      });
    event.preventDefault();
  }

  render() {
    const handleOnDragStart = e => e.preventDefault();

    return (
      <div className="signup">
        <div className="signupform">
          <AliceCarousel
            mouseTrackingEnabled
            autoPlay={false}
            disableAutoPlayOnAction={true}
            infinite={false}
          >
            <div className="forms-signup" onDragStart={handleOnDragStart}>
              <h1>PROFILE DETAILS</h1>

              <form onSubmit={this.handleSubmit}>
                <h5 htmlFor="name"></h5>
                <input
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Name"
                />

                <h5 htmlFor="text"></h5>
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  // className={errors.password && .password && "error"}
                />
                <div className="input-feedback"></div>
              </form>
            </div>
            <div className="forms-signup" onDragStart={handleOnDragStart}>
              <h1>VEHICLE DETAILS</h1>
              <form onSubmit={this.handleSubmit}>
                <h5 htmlFor="name"></h5>
                <input
                  name="model_year"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Model Year"
                />
                <h5 htmlFor="name"></h5>
                <input
                  name="chasis_number"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Chasis Number"
                />
                <h5 htmlFor="name"></h5>
                <input
                  name="engine_number"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Engine Number"
                />
                <h5 htmlFor="name"></h5>
                <input
                  name="vehicle_model"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Vehicle Model"
                />

                <h5 htmlFor="name"></h5>
                <input
                  name="vehicle_number"
                  type="text"
                  placeholder="KL-XXX-XXXX"
                  onChange={this.handleChange}
                  placeholder="Vehicle number"
                />
                <div className="input-feedback"></div>
                <button type="submit">Register</button>
              </form>
            </div>
            <div className="uploadform">
              <h1>UPLOAD PICTURE</h1>
              <div className="signup-upload">
                <IoIosCamera className="upload-icon" />
                <a>
                  <IoIosAddCircle className="upload-ic" />
                </a>
              </div>
              <button className="upload-submit">UPLOAD</button>
            </div>
          </AliceCarousel>
        </div>
        ); }}
      </div>
    );
  }
}

export default SignupForm;
