import React from "react"
function ChildComponent({click}){
    console.log("Child Component rendered") // It displayed only once.

    return(
        <div>
            <button onClick={click}>Button Click</button>
        </div>
    )
}
export default React.memo(ChildComponent)