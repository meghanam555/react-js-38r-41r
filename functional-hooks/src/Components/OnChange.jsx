import { useState } from "react"

export function OnChange(){
    const [name, setname] = useState("")

    const handleclick = (e)=>{setname(e.target.value)}

    return(
        <>
        <input type="text" placeholder="Enter your name:" onChange={handleclick}></input>
        <h2>The name is : {name}</h2>
        </>
    )
}