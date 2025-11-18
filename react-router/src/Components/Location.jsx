import { useLocation } from "react-router-dom"

export function Location(){
    const location = useLocation()
    return(
        <div>
            <h2>Location Details</h2>
            <h3>Location path: {location.pathname}</h3>
        </div>
    )
}