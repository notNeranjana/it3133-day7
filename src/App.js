import { useState } from "react";
import "./App.css";

function App() {
  const [childName, setChildName] = useState("Default");

  const receiveName = (name) => {
    setChildName(name);
  };

  return (
    <div className="App">
      <h2>Hello React! I'm Parent</h2>
    </div>
  );
}

export default App;
