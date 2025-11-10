import { Component } from "react";

export class Lifecycle1 extends Component{
    constructor(){
        super();
        this.state = {
            greeting : "Good Afternoon, Lets go in a good day"
        }
        console.log("Constructor() is executed")
    }
    componentDidMount(){
        //console.log("Component Did Mount Executed at 3rd")
        setTimeout(()=>{
            this.setState({greeting:"Good Evening, Lets Chill"})
        }, 2000)
    }
    render(){
        console.log("Render executed 2nd")
        return(
            <>
            <h2>Good Afternoon</h2>
            <p>{this.state.greeting}</p>
            </>
        )
    }
}