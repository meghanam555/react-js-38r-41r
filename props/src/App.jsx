import { Props } from "./Components/Props"


function App() {
  
  return (
    <>
      <Props name="Madhavi" id={1361} designation="Backend Developer" salary={30000} skills={["HTML", "CSS", "JS", "ReactJS"]}/>
      <Props name="Bhavani" id="4321"  designation="Frontend Developer" salary="100000"/>
      <Props><div style={{backgroundColor : "yellow", color:"black"}}><h1>Let's go for the party, after getting job</h1></div></Props>
    </>
  )
}

export default App
