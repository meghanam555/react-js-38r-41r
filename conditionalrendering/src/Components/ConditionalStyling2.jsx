import './ConditionalStyling2.css'
import React from "react"
export class ConditionalStyling2 extends React.Component{
    constructor(){
        super()
        this.state = {
            ReactJS:true,
            content : "This is an 38r, 41r, ReactJS batch"
        }
    }
render(){
    return(
        <React.Fragment>
            <p className="oggy">Oggy </p>
            <p className= {this.state.ReactJS ? "online" : "offline"}>{this.state.content}</p>
        </React.Fragment>
    )
}
}