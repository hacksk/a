import React, { Component } from 'react';
import Navbar from './Navbar';
import ServiceMain from './Services/ServiceMain';
import { Link } from 'react-router-dom';
import Breadcrumb from "react-bootstrap/Breadcrumb";

let data = [
  {
    head: 'ECU Remap',
    image: require('./assets/serviceicons/ecu 1.png'),
    link:'/service/ecuremapping'
  },
  {
    head: 'Connected Solutions',
    image: require('./assets/serviceicons/connected solutions 1.png'),
    link:'/service/connected'
  },
  {
    head: 'Paint Protection Film',
    image: require('./assets/serviceicons/paint protection film 1.png'),
    link:'/service/paint'
  },
  {
    head: 'Ceramic Coating',
    image: require('./assets/serviceicons/ceramic coating 1.png'),
    link:'/service/ceramic'
  },
  {
    head: 'Steam Cleaning',
    image: require('./assets/serviceicons/Steam cleaning 1.png'),
    link:'/service/steamcleaning'
  }
];

class CustomerService extends Component {
  render() {
    return (
      <div className="service">
        <Navbar />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Service</Breadcrumb.Item>
        </Breadcrumb>
        <div className="service-content">
        <div className="home-title-card">
            <h5>FEATURED SERVICES</h5>
          </div>
        <div className="service-whole">
        {data.map((service, i) => {
          return (
            <div key={i}>
              <div className="srvc-buttons">
                <Link to={service.link}>
                <ServiceMain serviceimg={service.image} />
                </Link>
              </div>
            </div>
          );
        })}        
        </div>
        <div className="home-title-card">
            <h5>RECOMMENDED SERVICES</h5>
          </div>
          {/* <div className="recommend">
            <img src={require('./assets/serviceicons/sweet 17.png')}></img>
            <img src={require('./assets/serviceicons/Group 193.png')}></img>
          </div> */}
        </div>
        
      </div>
    );
  }
}

export default CustomerService;
