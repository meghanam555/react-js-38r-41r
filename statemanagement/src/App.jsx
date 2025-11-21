

// import { PropDrilling } from "./StateManagement/PropDrilling"
// import { StateUplifting } from "./StateManagement/StateUplifting"

import { createContext, useState } from "react"
import { Child } from "./StateManagement/Child";
import { Child1 } from "./StateManagement/Child1";
import { PropDrilling } from "./StateManagement/PropDrilling";
import { StateUplifting } from "./StateManagement/StateUplifting";
export const UserContext = createContext(); // Creation of Context
function App() {
  const [user, setUser] = useState("Sundri")

  return (
    
    <UserContext.Provider value={{user, setUser}}> 
      <div>
        <PropDrilling/>
        <StateUplifting />
        <h3>Context Component</h3>
        <h4>Child Component also included here</h4>
        {/* <Child /> */}
        <Child1 />
      </div>
    </UserContext.Provider>
  )
}

export default App
