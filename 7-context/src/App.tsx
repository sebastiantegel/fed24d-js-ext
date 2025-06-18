import { useState } from "react";
import "./App.css";
import { BasicComponent } from "./components/BasicComponent";
import { BasicContext } from "./contexts/BasicContext";
import { ThemeContext, themes, type Theme } from "./contexts/ThemeContext";
import { Button } from "./components/Button";

function App() {
  const [test, setTest] = useState("Lorem ipsum");
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.light);

  const changeText = () => {
    setTest("dolor sit amet");
  };

  const toggleState = () => {
    // if (currentTheme.name === "day") {
    //   setCurrentTheme(themes.dark);
    // } else {
    //   setCurrentTheme(themes.light);
    // }

    setCurrentTheme(currentTheme.name === "Day" ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Button onClick={toggleState}>
        Ändra till{" "}
        {currentTheme.name === "Day" ? themes.dark.name : themes.light.name}
      </Button>
      <BasicContext.Provider value={test}>
        <BasicComponent />
      </BasicContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
