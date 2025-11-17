import { useState } from "react"

export function ControlledForm(){
    const [name, setname] = useState("")
    const handleform = (e)=>{
        e.preventDefault();
        alert(`Hello, ${name}`)
    }
    return(
        <form onSubmit={handleform }>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}