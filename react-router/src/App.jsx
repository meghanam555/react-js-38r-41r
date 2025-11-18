import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import {Routes, Route, Link} from "react-router-dom"
import { UserProfile } from "./Components/UserProfile"
import { Navigate } from "./Components/Navigate"
import { Location } from "./Components/Location"

function App() {


  return (
    <div>
      {/* <Navigate /> */}
     <Location />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        {/* <Link to="/user/5">User1</Link> | <Link to="/user/2">User2</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        {/* <Route path="/user/:id" element={<UserProfile/>}/> */}
      </Routes>
     
    </div>
  )
}

export default App
