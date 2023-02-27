import { useEffect, useState } from "react";
import "./App.css";
import Header from "./widgets/Header/Header";
import Screamer from "./widgets/Screamer";

function App() {
  const [isScreamer, setIsScreamer] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsScreamer(true), 5000);
  }, []);
  return (
    <div className="App">
      <Header />
      {isScreamer && <Screamer />}
    </div>
  );
}

export default App;
