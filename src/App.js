import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./Home";
import { titleContext } from "./counter/counterContext";
function App() {
  const [text, setText] = useState("hello");
  return (
    <div className="App">
      <titleContext.Provider value={{ text, setText }}>
        <Home />
      </titleContext.Provider>
    </div>
  );
}

export default App;
