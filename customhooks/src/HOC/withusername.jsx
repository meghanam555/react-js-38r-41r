export function withusername(Component){
    return function EnhancedComponent(){
        const user = "megha" // adding new data
        return <Component username={user}/> // returning Enhanced Component
    }
}