import React, { Component } from 'react'

export default class AccountReward extends Component {
    render() {
        return (
            <div>
                <div style={{borderRadius:"8px",background:"linear-gradient(180deg, #FB6C43 0%, #FDA92C 100%)",boxShadow:"4px 4px 4px #000000",height:"25vh",width:"25vh",alignContent:"center",padding:"2vh",cursor:"pointer"}}>
                    <p style={{color:"white",fontFamily:"Montserrat",textAlign:"left"}}>Reward points earned</p>
                    <h1 style={{color:"black",fontFamily:"Montserrat",fontWeight:"900",textAlign:"left"}}>1350</h1>
                    <p style={{color:"white",fontFamily:"Montserrat",textAlign:"left"}}>Redeem points now</p>

                </div>
            </div>
        )
    }
}
