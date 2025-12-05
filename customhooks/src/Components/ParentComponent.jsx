import { useCallback, useState } from "react"
import ChildComponent from "./ChildComponent";

export function ParentComponent(){
    const [count, setCount] = useState(0)
    const handleClick = useCallback(()=>{
        console.log("Button Clicked!!!"); // It will be displaying, whenever we click on the button
    }, [])
    return(
        <div>
            <h1>The count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>

            <ChildComponent click={handleClick}></ChildComponent>
        </div>
    )
}