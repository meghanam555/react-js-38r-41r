import { Component } from "react";

export class Condition2 extends Component{
    constructor(){
        super()
        this.state = {
            hadlunch : false
        }
    }
    render()
    {
        return(
            <div>
            <h2 style={{color:"blue", backgroundColor:"pink"}}>{this.state.hadlunch ? "Your Healthy" : "Your Health is not Healthy"}</h2>
            </div>
        )
    }
}