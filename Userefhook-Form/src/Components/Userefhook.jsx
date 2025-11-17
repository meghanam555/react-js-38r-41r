import { useRef } from "react"

export function Userefhook(){
    const inputref = useRef(null)
    const handleform = ()=>{
        inputref.current.focus();
    }
    return(
        
        <>

            <input type="text" ref={inputref}></input>
            <button onClick={handleform}>Click here</button>
   
        
        </>
    )
}