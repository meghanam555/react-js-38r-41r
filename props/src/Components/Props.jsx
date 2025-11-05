import { Component } from "react";

export class Props extends Component{
   
    render(){
         console.log(this.props)
        return(
            <>
            <h3>Employee Details</h3>
            <div style={{border: "2px solid blue", width:"300px",backgroundColor:"pink", borderRadius:"20px", padding: "10px", margin:"20px"}}>
                <p>EName: {this.props.name}</p>
                <p>EId: {this.props.id}</p>
                <p>EDesignation: {this.props.designation}</p>
                <p>ESalary: {this.props.salary}</p>
                <h2>{this.props.skills?.map((ele,index)=>{
                  return  <ul key={index}><li>{ele}</li></ul>
                })}</h2>
                {this.props.children}
            </div>
            </>
        )
    }
}