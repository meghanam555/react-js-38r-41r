import { Component } from "react";

export class Condition3 extends Component{
    constructor(){
        super();
        this.state = {
            isSundri : true
        }
    }
    render(){
        return(
            <>
            <h2>{this.state.isSundri && "Sundri can Marry to Sundra"}</h2>
            </>
        )
    }
}