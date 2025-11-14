import { useState } from "react"

export function ConditionalStyling(){
    const [state, setstate] = useState(false)
    return(
        <>
        <h2 style={{color:state?"blue":"red"}}>{state?"Active":"Inactive"}</h2>
        <button onClick={()=>setstate(!state)}>{state?"Inactive":"Active"}</button>
        </>
    )
}