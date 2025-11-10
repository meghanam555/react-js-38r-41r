import { Component } from "react";

export class LifeCycle2 extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increment = ()=>{
        this.setState({count: this.state.count + 1})
    }
    componentDidUpdate(prevState, prevProps){
        console.log("Component Did Update executed 2nd")
        // console.log("Previous Count: " +prevProps.count)
        // console.log("Current Count: " +this.state.count)
        console.log(`The previous count is : ${prevProps.count} and the Updated count is : ${this.state.count}`)
    }
    render(){
        console.log("Render method exectued first")
        return(
         
            <>
            <p>The count is : {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}