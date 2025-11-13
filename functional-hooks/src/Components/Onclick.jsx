export function Onclick(){
    const handleclick = ()=>{
        alert("Button Clicked")
    }
    return(
        <>
        <button onClick={handleclick}>Click Here</button>
        </>
    )
}