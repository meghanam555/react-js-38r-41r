export function Conditionif({islogin}){
    if(islogin) return <p>Logged In Successful</p>
    else return <p>LoggedOut</p>
}