import { Component } from "react";

export class Component2 extends Component{

    constructor(){
        super();
        this.state = {
            greetingmsg : "Hello, Good Evening, Let's go for Coffee"
        }
        this.greet = this.greeting.bind(this)
    }

    greeting(){
        this.setState({greetingmsg:"I had Beer, I wont Come"})
    }

    render(){
        return(
            <>
            <p>Hello</p>
            <h2>{this.state.greetingmsg}</h2>
            <button onClick={this.greet}>Click Here</button>
            </>
        )
    }
}