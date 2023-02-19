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
    right: 0,
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
    setBoxLimit({
      right: document.getElementById("box22").getBoundingClientRect().right,
      left: document.getElementById("box22").getBoundingClientRect().left,
      top: document.getElementById("box22").getBoundingClientRect().top,
      bottom: document.getElementById("box22").getBoundingClientRect().bottom,
    });
  }, []);

  const handleStartGame = () => {
    let boxPosition = document.getElementById("box22");
    boxPosition.style.left = boxLimit.left + 200 + "px";
    console.log("jestem " + boxPosition.style.left);
  };

  const handleClick = () => {
    setIsActive({ ...isActive, box12: false, box22: true });
  };

  const handleRestart = () => {
    let boxPosition = document.getElementById("box12");
    boxPosition.style.left = initialPosition + "px";
    setLocation({ box12: [1, 2], box22: [2, 2], box11: [1, 1], box21: [2, 1] });
  };

  const handleMoveRight = () => {
    console.log("limit boarda" + boardLimit.right);
    let boxPosition = document.getElementById(boxActive);
    let initialBoxPosition = boxPosition.getBoundingClientRect().left;
    console.log("pozcyja poczatkowa" + initialBoxPosition);
    let d = 0;
    if (boxPosition.style.left === "") {
      d = initialBoxPosition;
    }

    let boxPositionLeftToNumber = d + (parseInt(boxPosition.style.left.replace("px", "")) || 0);

    console.log("pozcja boxa przed przesunieciu" + boxPositionLeftToNumber);
    if (boxPositionLeftToNumber + move < boardLimit.right) {
      boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      console.log("pozcja boxa po przesunieciem" + boxPosition.style.left);
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
    console.log("limit boarda" + boardLimit.top);
    let boxPosition = document.getElementById(boxActive);
    let initialBoxPosition = boxPosition.getBoundingClientRect().top;
    console.log("pozcyja poczatkowa" + initialBoxPosition);

    if (boxPosition.style.bottom === "") {
      boxPosition.style.bottom = height - move + initialBoxPosition + "px";
    }

    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.bottom.replace("px", "")) || 0;

    console.log("pozcja boxa przed przesunieciem" + boxPositionBottomtoToNumber);
    if (boxPositionBottomtoToNumber - move > boardLimit.top) {
      boxPosition.style.bottom = boxPositionBottomtoToNumber - move + "px";
      console.log("pozcja boxa po przesunieciem" + boxPosition.style.bottom);
      setLocation({
        ...location,
        box12: [location.box12[0] + 1, location.box12[1]],
      });
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
          <div>Box22:</div>
          <div>Lewo {boxLimit.left} </div>
          <div>Prawo {boxLimit.right} </div>
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
            {location.box12}
            {/* {isActive.box12.toString()} */}
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
              {/* {isActive.box12.toString()} */}
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
