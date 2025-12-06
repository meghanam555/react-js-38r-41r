// import { CounterComponent } from "./Components/CounterComponent"
// import { ParentComponent } from "./Components/ParentComponent"
// import { UseReducerComponent } from "./Components/UseReducerComponent"
import React, { useState,  Suspense } from "react"

import { CustomHooks } from "./Hooks/CustomHooks"
import { ParentComponent } from "./Hooks/ParentComponent"
import { UseReducerComponent } from "./Hooks/UseReducerComponent"
import HomePage from "./LazyLoading/HomePage"
import  AboutPage  from "./LazyLoading/AboutPage"
import withUsername from "./LazyLoading/withUsername"
import Welcome from "./LazyLoading/Welcome"

// let About = React.lazy(()=>import('./LazyLoading/AboutPage'))
function App() {
  // const [showData, setShowData] = useState(false)
  const Welcomedata = withUsername(Welcome)
  return (
    <>
    <Welcomedata></Welcomedata>
    <div>
    
      {/* <CounterComponent /> */}
      {/* <UseReducerComponent /> */}
      {/* <ParentComponent /> */}


      {/* <ParentComponent /> */}
      {/* <UseReducerComponent /> */}
      {/* <CustomHooks /> */}
      
      
      {/* <button onClick={()=>setShowData(!showData)}>Toggle About</button>
      <HomePage />
      <Suspense fallback = {console.log("Loading")}>
        {showData && <AboutPage/>}
      </Suspense> */}
  
      </div>

    </>
  )
}

export default App
