import { UserContext } from "../App";

export function Child1(){
    return(
        <UserContext.Consumer>
            {({user})=><h2>Hello, {user}</h2>}
        </UserContext.Consumer>
    )
}