import { useReducer } from "react"
import { reducer } from "./reducer"

export function UseReducerComponent(){
    const initialValue = {count:0}
    const [state, dispatch] = useReducer(reducer, initialValue)
    return(
        <div>
            <h1>The count : {state.count}</h1>
            <button onClick={()=>dispatch({type: "increment"})}>+</button><br></br>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button><br></br>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button><br></br>
        </div>
    )
}