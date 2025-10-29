import { Component } from "react";

export class Component1 extends Component{
    greetingmsg = "Hello, Good Evening, Let's go for Coffee"

    handlemsg(){
        this.greetingmsg = "I had Beer, I wont Come"
    }

    render(){
        return(
            <>
            <p>Hi</p>
            <h3>{this.greetingmsg}</h3>
            <button onClick={this.handlemsg}>Click</button>
            </>
        )
    }
}