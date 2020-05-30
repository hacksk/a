import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';



class CustomerService extends Component {
  render() {
    return (
      <div className="service">
        <Navbar />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Inventory</Breadcrumb.Item>
        </Breadcrumb>
        <div className="service-content">
          <div className="home-title-card">
            <h5>Accessories</h5>
          </div>
          <Link to="/accesories">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="recc-pro">
                <div className="products-individual">
                  <img alt=""
                    src={require('./assets/serviceicons/freshner.png')}
                  ></img>
                  <h5>Air Freshner</h5>
                </div>
                <div className="products-individual">
                  <img alt=""
                    src={require('./assets/serviceicons/pngwave (1).png')}
                  ></img>
                  <h5>Tyres Appolo</h5>
                </div>
                <div className="products-individual">
                  <img alt=""
                    src={require('./assets/serviceicons/wheelalloy.png')}
                  ></img>
                  <h5>Alloy Wheels</h5>
                </div>
              </div>
              <div className="recc-pro">
                <div className="products-individual">
                  <img alt=""
                    src={require('./assets/serviceicons/carphoneholder.png')}
                  ></img>
                  <h5>Phone Holders</h5>
                </div>
                <div className="products-individual">
                  <img alt=""
                    src={require('./assets/serviceicons/pngguru.com.png')}
                  ></img>
                  <h5>Stereos</h5>
                </div>
                <div className="products-individual"></div>
              </div>
            </div>
          </Link>
          <div className="home-title-card">
            <h5>RECOMMENDED SERVICES</h5>
          </div>
          <div className="recommend">
            <img alt="" src={require('./assets/serviceicons/sweet 17.png')}></img>
            <img alt="" src={require('./assets/serviceicons/Group 193.png')}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerService;
