import axios from "axios";
import { Component } from "react";

export class Lifecycle11 extends Component{
    constructor(){
        super();
        this.state = {products : []}
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=> this.setState({products:res.data}))
        .then((error)=>console.log(error))
    }

    render(){
        return(
            <>
            <ul>{this.state.products.map((product)=>
            <li key={product.id}>{product.description}</li>)}</ul>
            </>
        )
    }
}