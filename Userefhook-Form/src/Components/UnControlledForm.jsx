import { useRef } from "react"

export function UnControlledForm(){
    const inputref = useRef()
    const handleForm = ()=>{
        alert(`Hello, ${inputref.current.value}`)
    }
    return(
        
        <form>
            <input type="text" ref={inputref}></input>
            <button onClick={handleForm}>Click Here</button>
        </form>
    )
}