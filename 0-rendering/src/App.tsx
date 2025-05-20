import "./App.css";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { HelloWorld } from "./components/HelloWorld";
import { Interpolation } from "./components/Interpolation";
import { Lists } from "./components/Lists";

function App() {
  return (
    <section>
      <HelloWorld />
      <Interpolation />
      <ConditionalRendering />
      <Lists />
    </section>
  );
}

export default App;
