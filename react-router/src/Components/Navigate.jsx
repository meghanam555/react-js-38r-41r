import { useNavigate } from "react-router-dom"

export function Navigate(){
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>{navigate("/")}}>Go to Home</button>
            <button onClick={()=>{navigate(-1)}}>Go back</button>
        </div>
    )
}