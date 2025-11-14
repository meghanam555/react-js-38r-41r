import { useState } from "react";

function PropsandState(props){
    const [age, setage] = useState(props.initialage)
    return(
        <>
        <p>The name : {props.name}</p>
        <p>Age : {age}</p>
        <button onClick={()=>setage(age+1)}>Increase-Age</button>
        </>
    )
}
export default PropsandState;