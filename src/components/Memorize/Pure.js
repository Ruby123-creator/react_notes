import React, { Component } from "react"
import { PureComponent } from "react";


class Pure extends PureComponent{
    render(){
        console.log("purecomponent");
        return(
            <div>
            <h1> Pure component {this.props.data}</h1>
        </div>
        )
        
    }
}
export default Pure;