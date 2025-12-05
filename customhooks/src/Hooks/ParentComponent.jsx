import { useCallback, useState } from "react"
import ChildComponent from "./ChildComponent";

export function ParentComponent(){
    const [count, setCount] = useState(0)
    const handleClick = useCallback(()=>{
        console.log("Button Clicked"); // It will be displayed as many times we change
    }, [])
    return(
        <div>
            <p>The count is : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button><br></br><br></br>

            <ChildComponent click = {handleClick}/><br></br><br></br>
        </div>
    )
}