import { useContext } from "react"
import { UserContext } from "../App"

export function Child(){
    const {user, setUser} = useContext(UserContext)
    return(
        <>
        <h1>The User name is : {user}</h1>
        <button onClick = {()=>setUser("Dingi")}>Click here for change</button>
        </>
    )
}