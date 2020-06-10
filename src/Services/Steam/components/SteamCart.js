import React, { Component } from 'react';
import Cart from "./Cart";

class SteamCart extends Component {
    render() {
        return (
            <div style={{backgroundColor:"linear-gradient(131.4deg,rgba(240, 92, 45, 0.08) 0%, rgba(240, 92, 45, 0)53.43%),#121212"}}>
                <Cart/>
            </div>
        );
    }
}

export default SteamCart;