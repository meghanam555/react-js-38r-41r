import { Counter } from "./Components/Counter"
import { ExternalEventBinding } from "./Components/ExternalEventBinding"
import { InlineEventBinding } from "./Components/InlineEventBinding"
import { OnChange } from "./Components/OnChange"
import { Onclick } from "./Components/Onclick"
import { PassingasanArguments } from "./Components/PassingasanArguments"


function App() {


  return (
    <>
      <Counter /><br></br><br></br><br></br>
      <Onclick /><br></br><br></br><br></br>
      <OnChange /><br></br><br></br><br></br>
      <InlineEventBinding /><br></br><br></br><br></br>
      <ExternalEventBinding /><br></br><br></br><br></br>
      <PassingasanArguments />
    </>
  )
}

export default App
