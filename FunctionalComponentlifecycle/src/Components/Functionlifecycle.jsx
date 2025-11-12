import { useEffect, useState } from "react"

export function Functionlifecycle(){
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("Mounting Phase - 1st stage")
    }, [])
    useEffect(()=>{
        console.log("Updating Phase")
        console.log("Updated Count is :", count )
    }, [count])
    useEffect(()=>{
        return ()=>{
            console.log("Unmounting Phase")
        }
    })
    return(
        <>
        <h1>Helloo Everybody</h1>
        <h2>Count is : {count}</h2>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        </>
    )
}