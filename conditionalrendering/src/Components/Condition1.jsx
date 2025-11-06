import { Component } from "react";

export class Condition1 extends Component{
    constructor(){
        super();
        this.state = {
            isloggedIn :true
        }
    }
    render(){
       if(this.state.isloggedIn){
        return <h2>LoggedIn Successfully</h2>
       }
       else{
        return <h2>Login Failed</h2>
       }
    }
}