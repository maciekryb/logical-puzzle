import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [location, setLocation] = useState({
    box12: [1, 2],
    box22: [5, 4],
    box11: [1, 1],
    box21: [2, 1],
  });
  const [isActive, setIsActive] = useState({
    box12: true,
    box22: false,
    box11: false,
    box21: false,
  });

  const [initialPosition, setInitialPosition] = useState();
  const [boardLimit, setBoardLimit] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const [boxLimit, setBoxLimit] = useState({
    top: 0,
    left: 0,
    bottom: 0,
  });
  const [boxLimit12, setBoxLimit12] = useState({
    top: 0,
    left: 0,
    bottom: 0,
  });

  const [boxActive, setBoxActive] = useState("");
  const [moveCorrection, setMoveCorrection] = useState("");

  const move = 200;
  const height = 800;

  useEffect(() => {
    let boxPosition = document.getElementById("box12");
    setInitialPosition(boxPosition.getBoundingClientRect().left);

    setBoardLimit({
      right: document.getElementById("board").getBoundingClientRect().right - 10,
      left: document.getElementById("board").getBoundingClientRect().left,
      top: document.getElementById("board").getBoundingClientRect().top,
      bottom: document.getElementById("board").getBoundingClientRect().bottom,
    });
    // setBoxLimit({
    //   left: document.getElementById("box22").getBoundingClientRect().left,
    //   top: document.getElementById("box22").getBoundingClientRect().top,
    //   bottom: document.getElementById("box22").getBoundingClientRect().bottom,
    // });
    setBoxLimit12({
      left: document.getElementById("box12").getBoundingClientRect().left,
      top: document.getElementById("box12").getBoundingClientRect().top,
      bottom: document.getElementById("box12").getBoundingClientRect().bottom,
    });
  }, []);

  const handleStartGame = () => {
    let boxPosition12 = document.getElementById("box12");
    const startPoisitionX = boardLimit.left + 5;
    const startPoisitionY = boardLimit.bottom - 805;
    boxPosition12.style.left = startPoisitionX + "px";
    boxPosition12.style.top = startPoisitionY + "px";
    let boxPosition22 = document.getElementById("box22");
    boxPosition22.style.left = startPoisitionX + 200 + "px";
    boxPosition22.style.top = startPoisitionY + 200 + "px";
  };

  const handleMoveRight = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;
    if (boxPositionLeftToNumber + move < boardLimit.right) {
      boxPosition.style.left = boxPositionLeftToNumber + move + "px";
    }
  };

  const handleMoveLeft = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;
    if (boxPositionLeftNumber - move > boardLimit.left) {
      boxPosition.style.left = boxPositionLeftNumber - move + "px";
    }
  };

  const handleMoveDown = () => {
    console.log("limit boarda" + boardLimit.bottom);
    let boxPosition = document.getElementById(boxActive);
    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.top.replace("px", "")) || 0;
    console.log(boxPosition.style.top);
    if (boxPositionBottomtoToNumber + move < boardLimit.bottom - 10) {
      boxPosition.style.top = boxPositionBottomtoToNumber + move + "px";
      console.log(boxPosition.style.top);
    }
  };

  const handleMoveUp = () => {
    console.log("limit boarda" + boardLimit.bottom);

    let boxPosition = document.getElementById(boxActive);
    let initialBoxPosition = boxPosition.getBoundingClientRect().top;
    console.log("pozcyja poczatkowa" + initialBoxPosition);

    if (boxPosition.style.bottom === "") {
      boxPosition.style.bottom = height - move + initialBoxPosition + "px";
    }

    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.bottom.replace("px", "")) || 0;

    console.log("pozcja boxa przed przesunieciem" + boxPositionBottomtoToNumber);
    if (boxPositionBottomtoToNumber + move < boardLimit.bottom - 10) {
      boxPosition.style.bottom = boxPositionBottomtoToNumber + move + "px";
      console.log("pozcja boxa po przesunieciem" + boxPosition.style.bottom);
      setLocation({
        ...location,
        box12: [location.box12[0] + 1, location.box12[1]],
      });
    }
  };

  return (
    <div className="App">
      <div>
        <button className="App__restart" onClick={handleStartGame}>
          Zacznij od początku
        </button>
        <div className="App__coordinate-box22">
          <div>Board:</div>
          <div>Góra {boardLimit.top} </div>
          <div>Dół {boardLimit.bottom} </div>
        </div>
        <br />
        <div className="App__coordinate">
          <div>
            Lewo <strong>{boardLimit.left}</strong>
          </div>
          <div>
            Prawo <strong>{boardLimit.right}</strong>
          </div>
        </div>
        <div className="App__game" id="board">
          <div
            className="App__game-box12"
            id="box12"
            onMouseOver={() => {
              setBoxActive("box12");
            }}
          >
            <div className="App__coordinate-box22">
              <div>Góra {boxLimit12.top} </div>
              <div>Dół {boxLimit12.bottom} </div>
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              Góra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              Dół
            </button>
          </div>
          <div
            className="App__game-box22"
            id="box22"
            onMouseOver={() => {
              setMoveCorrection(boardLimit.left);
              setBoxActive("box22");
            }}
          >
            <div className="box_corrdinate">
              {boxLimit.left}
              <button className="App__game-box-button top" onClick={handleMoveUp}>
                Góra
              </button>
              {boxLimit.right}
            </div>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              Dół
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
