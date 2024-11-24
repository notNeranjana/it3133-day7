import { useState } from "react";
import "./App.css";
import ChildComp from "./ChildComp";

function App() {
  const [childName, setChildName] = useState("Default");

  const receiveName = (name) => {
    setChildName(name);
  };

  return (
    <div className="App">
      <h2>Hello React! I'm Parent</h2>
      <ChildComp setFunc={receiveName} />
      <p>Parent: My child said - {childName}</p>
    </div>
  );
}

export default App;
