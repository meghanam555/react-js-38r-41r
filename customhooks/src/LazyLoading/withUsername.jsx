export default function withUsername(Component){
    return function EnhancedComponent(){
        const name = "megha"
    
    return <Component username={name}/>
}
}