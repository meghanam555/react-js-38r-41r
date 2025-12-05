import { useReducer } from "react"
import { reducer } from "./reducer"

export function UseReducerComponent(){
    const initialvalue = {count : 0}
    const [state, dispatch]= useReducer(reducer, initialvalue)
    return(
        <div>
            <h1>The count : {state.count}</h1>
            <button onClick={()=>dispatch({type : "increment"})}>+</button>
            <button onClick={()=>dispatch({type: "decrement"})}>-</button>
            <button onClick={()=>dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}