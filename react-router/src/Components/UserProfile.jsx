import { useParams } from "react-router-dom"

export function UserProfile(){
    const {id} = useParams();
    return(
        <div>
            <nav>
                <h2>This is the Dynamic Route</h2>
                <h3>Showing the details of Product : {id}</h3>
            </nav>
        </div>
    )
}