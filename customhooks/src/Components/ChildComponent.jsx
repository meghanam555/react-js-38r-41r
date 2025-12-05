import React from "react";
function ChildComponent({click}){
    console.log("Child rendered"); // It will render only once
    return(
        <div>
            <button onClick={click}>Child Button</button>
        </div>
    )
}
export default React.memo(ChildComponent);