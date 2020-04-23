import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccMain from './AccMain';
import Navbar from './Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Accesories extends Component {
  render() {
    return (
      <div className="accessories-moto" style={{minHeight:"100vh"}}>
        {/* <Navbar /> */}
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Accesories</Breadcrumb.Item>
          <Breadcrumb.Item>Exhaust</Breadcrumb.Item>
        </Breadcrumb>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="DETAILS">
            <AccMain />
          </Tab>
          <Tab eventKey="profile" title="SPECS">
            <h3>lorem ipsum</h3>
          </Tab>
          <Tab eventKey="contact" title="DEMO">
            <h4>yjrhgfmjhgk jvkhjhgk, gljkh</h4>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Accesories;
