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
      email,
      password,
      model_year,
      chasis_number,
      engine_number,
      vehicle_model,
      vehicle_number
    } = this.state;

    axios
      .post(
        'http://159.89.165.118:4000/api/v1/user/',
        {
          user: {
            email: email,
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
          
            <div className="forms-signup" onDragStart={handleOnDragStart}>
              <h1>PROFILE DETAILS</h1>

              <form onSubmit={this.handleSubmit}>
                <h5 htmlFor="email"></h5>
                <input
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Email"
                />

                <h5 htmlFor="phone"></h5>
                <input
                  name="phone"
                  type="phone"
                  onChange={this.handleChange}
                  placeholder="Phone"
                  // className={errors.password && .password && "error"}
                />
                <button>register</button>
                <div className="input-feedback"></div>
              </form>
            </div>
           
           
        </div>
        ); }}
      </div>
    );
  }
}

export default SignupForm;
