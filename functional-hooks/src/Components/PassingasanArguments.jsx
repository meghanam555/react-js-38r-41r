export function PassingasanArguments(){

    const greet = (name)=>console.log(`Hello, ${name}`)
    return(
        <>
        <button onClick={()=>greet("megha")}>Clicked You</button>
        </>
    )
}