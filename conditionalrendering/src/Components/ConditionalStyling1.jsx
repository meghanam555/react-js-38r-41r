import { Component } from "react";

export class ConditionalStyling extends Component{
    constructor(){
        super()
        this.state = {
            flower : false
        }
    }
    render(){
        return(
            <>
            <p style={{color: this.state.flower ? "blue" : "pink" }}>Flowers are Beautiful most of the time.</p>
            </>
        )
    }
}