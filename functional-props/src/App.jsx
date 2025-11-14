import { ChildrenProps } from "./Components/ChildrenProps"
import { ConditionalStyling } from "./Components/ConditionalStyling"
import { Conditionif } from "./Components/Conditionif"
import { ConditionLogic } from "./Components/ConditionLogic"
import { Conditionternary } from "./Components/Conditionternary"
import { Props } from "./Components/Props"
import PropsandState from "./Components/PropsandState"
import { ToggleLogin } from "./Components/ToggleLogin"


function App() {

  return (
    <>
      <Props name="Afroz Naresh"/>
      <Props name="Meghana Mohan"/>
      <ChildrenProps >
        <h2>This is the Children Props</h2>
        <h3>Done using Functional Component</h3>
      </ChildrenProps>
      <PropsandState name="sundra" initialage={25} />
      <Conditionif islogin = {false}/>
      <Conditionternary fever = {false}/>
      <ConditionLogic money = {false}/>
      <ToggleLogin />
      <ConditionalStyling />
    </>
  )
}

export default App
