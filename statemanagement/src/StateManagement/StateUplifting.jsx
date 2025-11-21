import { useState } from "react"

export function StateUplifting(){
    const [count, setCount] = useState(0)
    return(
        <>
        <ChildA count={count}/>
        <ChildB setCount = {setCount}/>
        </>
        
    )
}
function ChildA({count}){
    return <h1>The count is : {count}</h1>
}
function ChildB({setCount}){
    return <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
}