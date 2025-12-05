import { counter } from "./counter"

export function CustomHooks(){
    const {count, increment, decrement, reset}= counter(10)
    return(
        <div>
            <p>The count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}