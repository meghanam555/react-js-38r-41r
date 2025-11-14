import { useState } from "react"

export function ToggleLogin(){
    const [login, setlogin] = useState(false)
    return(
        <>
        <h2>{login ? "LoggedIn Successfully" : "LogIn Failed"}</h2>
        <button onClick={()=>setlogin(!login)}>{login ? "Logout" : "LogIn"}</button>
        </>
    )
}