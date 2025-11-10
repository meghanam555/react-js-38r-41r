import { Component } from "react";

export class Lifecyle3 extends Component{
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Timer Running")
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Component will unmount executed last")
    }
    render(){
        console.log("Render method execute first")
        return(
            <>
            </>
        )
    }
}