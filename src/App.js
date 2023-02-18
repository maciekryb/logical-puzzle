import React, { useState } from "react";
import "./app.css";

function App() {
  const [location, setLocation] = useState({
    box12: [1, 2],
    box22: [2, 2],
    box11: [1, 1],
    box21: [2, 1],
  });
  const [isActive, setIsActive] = useState({
    box12: true,
    box22: false,
    box11: false,
    box21: false,
  });

  const handleClick = () => {
    // setLocation([2, 2]);
    setIsActive({ ...isActive, box12: false, box22: true });
  };

  const handleRestart = () => {
    setIsActive({ box12: true, box22: false, box11: false });
  };

  return (
    <div className="App">
      <button className="App__restart" onClick={handleRestart}>
        {" "}
        Zacznij od poaczątku
      </button>
      <div className="App__game">
        {isActive.box12 ? (
          <button className="App__game-box12" id="box1" onClick={handleClick}>
            {location.box12} <br />
            {isActive.box12.toString()}
          </button>
        ) : null}
        {isActive.box22 ? (
          <button className="App__game-box22" id="box2" onClick={handleClick}>
            {location.box22} <br />
            {isActive.box22.toString()}
          </button>
        ) : null}
        {isActive.box11 ? (
          <button className="App__game-box21" id="box2" onClick={handleClick}>
            {location.box11} <br />
            {isActive.box11.toString()}
          </button>
        ) : null}
        {isActive.box21 ? (
          <button className="App__game-box21" id="box2" onClick={handleClick}>
            {location.box21} <br />
            {isActive.box21.toString()}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
