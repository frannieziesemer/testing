import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  const showGreeting = () => {
    setGreeting("Hello There!");
  };
  const hideGreeting = () => {
    setGreeting("");
  };
  return (
    <div className="App">
      <h2>Greetings App</h2>
      <button onClick={showGreeting}>Hi</button>
      <h3>{greeting}</h3>
      <button onClick={hideGreeting}>Bye</button>
    </div>
  );
}

export default App;
