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

  const move = 200;
  const height = 800;

  useEffect(() => {
    let boxPosition = document.getElementById("box12");
    setInitialPosition(boxPosition.getBoundingClientRect().left);

    let boardPosition = document.getElementById("board");
    let boardPositionRight = boardPosition.getBoundingClientRect().right;
    let boardPositionLeft = boardPosition.getBoundingClientRect().left;
    let boardPositionTop = boardPosition.getBoundingClientRect().top;
    let boardPositionBottom = boardPosition.getBoundingClientRect().bottom;
    setBoardLimit({
      ...boardLimit,
      right: boardPositionRight,
      left: boardPositionLeft,
      top: boardPositionTop,
      bottom: boardPositionBottom,
    });
  }, []);

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
    let boxPosition = document.getElementById("box12");
    let initialBoxPosition = boxPosition.getBoundingClientRect().left;
    console.log("pozcyja poczatkowa" + initialBoxPosition);

    if (boxPosition.style.left === "") {
      boxPosition.style.left = initialBoxPosition + "px";
    }

    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;

    console.log("pozcja boxa przed przesunieciem" + boxPositionLeftToNumber);
    if (boxPositionLeftToNumber + move < boardLimit.right - move) {
      boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      console.log("pozcja boxa po przesunieciem" + boxPosition.style.left);
      setLocation({
        ...location,
        box12: [location.box12[0] + 1, location.box12[1]],
      });
    }
  };

  const handleMoveLeft = () => {
    console.log("limit boarda" + boardLimit.left);
    let boxPosition = document.getElementById("box12");
    let initialBoxPosition = boxPosition.getBoundingClientRect().left;
    console.log("pozcyja poczatkowa" + initialBoxPosition);

    if (boxPosition.style.left === "") {
      boxPosition.style.left = initialBoxPosition + "px";
    }

    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;

    console.log("pozcja boxa przed przesunieciem" + boxPositionLeftToNumber);
    if (boxPositionLeftToNumber - move > boardLimit.left) {
      boxPosition.style.left = boxPositionLeftToNumber - move + "px";
      console.log("pozcja boxa po przesunieciem" + boxPosition.style.left);
      setLocation({
        ...location,
        box12: [location.box12[0] + 1, location.box12[1]],
      });
    }
  };

  const handleMoveDown = () => {
    console.log("limit boarda" + boardLimit.top);
    let boxPosition = document.getElementById("box12");
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
    let boxPosition = document.getElementById("box12");
    let initialBoxPosition = boxPosition.getBoundingClientRect().top;
    console.log("pozcyja poczatkowa" + initialBoxPosition);

    if (boxPosition.style.bottom === "") {
      boxPosition.style.bottom = height - move + initialBoxPosition + "px";
    }

    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.bottom.replace("px", "")) || 0;

    console.log("pozcja boxa przed przesunieciem" + boxPositionBottomtoToNumber);
    if (boxPositionBottomtoToNumber + move < boardLimit.bottom - 7) {
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
        {/* <button className="App__restart" onClick={handleRestart}>
          Zacznij od początku
        </button> */}
        <div className="App__game" id="board">
          <div className="App__game-box" id="box12" onClick={handleClick}>
            {location.box12}
            {/* {isActive.box12.toString()} */}
            <button className="App__game-box-button top" onClick={handleMoveUp}>
              Góra
            </button>
            <br />
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

          {/* {isActive.box22 ? (
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
        ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default App;
