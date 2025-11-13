import { useState } from "react"

export function Counter(){
    const [count, setcount] = useState(0)
    return(
        <>
        <h2>The Count : {count}</h2>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        </>
    )
}