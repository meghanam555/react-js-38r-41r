export function PropDrilling(){
    const user = "Sundri";
    return <Parent user = {user}/>
}
function Parent({user}){
    return <Child user={user}/>
}
function Child({user}){
    return <GrandChild user={user}/>
}
function GrandChild({user}){
    return <h1>The UserName is : {user}</h1>
}