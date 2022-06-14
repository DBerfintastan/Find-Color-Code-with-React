import './App.css';
import Palatte from './components/Palatte';
import { useEffect, useState } from 'react';
import { init, subscribe } from "./socketApi"

function App() {

  const [activeColor, setActiveColor] = useState("#a32929")
  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color)
    });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1 style={{color: activeColor}}>Color Code: {activeColor}</h1>
      <Palatte></Palatte>
    </div>
  );
}

export default App;
