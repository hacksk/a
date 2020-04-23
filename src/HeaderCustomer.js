import React, { Component } from 'react'

export default class HeaderCustomer extends Component {
    render() {
        return (
            <div className="headerstore">
                <div className="headerstore-content">
                    <h4 style={{color:"rgba(252, 92, 46, 0.87)",fontFamily:"Montserrat",fontWeight:"bold"}}>MANAGE</h4>
                    <img src={require("./assets/moto365logo.svg")}></img>
                </div>
            </div>
        )
    }
}
