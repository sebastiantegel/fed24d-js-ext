import "./App.css";
import { Button, DangerButton, MagicButton } from "./components/styled/Buttons";
import { Input, Password } from "./components/styled/Inputs";
import { StyledDiv } from "./components/styled/Wrappers";

function App() {
  return (
    <>
      <StyledDiv>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
        consequatur, dignissimos recusandae assumenda in odit, consequuntur
        obcaecati illo adipisci mollitia quae tempora optio molestias quaerat,
        iste velit eius deserunt voluptatibus?
      </StyledDiv>
      <div>
        <Button>Hej hej</Button>
        <DangerButton>Lorem</DangerButton>
        <MagicButton color="white" bgColor="purple">
          Magi
        </MagicButton>
        <MagicButton>Test</MagicButton>
      </div>
      <Input />
      <Password />
    </>
  );
}

export default App;
