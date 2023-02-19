import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  let [matrix, setMatrix] = useState([
    [1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
  ]);

  //  const matrixBox12

  const [location, setLocation] = useState({
    box12: [[1, 0, 0, 0, 0]],
    box22: [
      [0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0],
    ],
  });

  const [boardLimit, setBoardLimit] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const [boxActive, setBoxActive] = useState("");
  const [boxActive2, setBoxActive2] = useState();

  const move = 200;

  useEffect(() => {
    setBoardLimit({
      right: document.getElementById("board").getBoundingClientRect().right - 10,
      left: document.getElementById("board").getBoundingClientRect().left,
      top: document.getElementById("board").getBoundingClientRect().top,
      bottom: document.getElementById("board").getBoundingClientRect().bottom,
    });
  }, []);

  const handleStartGame = () => {
    let boxPosition12 = document.getElementById("box12");
    const startPoisitionX = boardLimit.left + 5;
    const startPoisitionY = boardLimit.bottom - 805;
    boxPosition12.style.left = startPoisitionX + "px";
    boxPosition12.style.top = startPoisitionY + "px";
    let boxPosition22 = document.getElementById("box22");
    boxPosition22.style.left = startPoisitionX + 400 + "px";
    boxPosition22.style.top = startPoisitionY + "px";
  };

  const handleMoveRight = () => {
    console.log("matrix przed zmiana" + matrix);
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;

    console.log("boxActive2 " + boxActive2);
    if (boxActive2.length === 2) {
      let i = boxActive2.length - 2;
      let k = boxActive2.length - 1;
      let j = 0;
      let m = 0;

      for (let t = 0; t <= 4; t++) {
        console.log("sprawdzam petle " + boxActive2[0][t]);
        if (boxActive2[0][t] === 1) {
          j = t;
        }
      }
      for (let t = 0; t <= 4; t++) {
        console.log("sprawdzam petle " + boxActive2[1][t]);
        if (boxActive2[1][t] === 1) {
          m = t;
        }
      }

      if (matrix[0][j + 1] === 0 && matrix[1][m + 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[0][j - 1] = 0;
        newMatrix[0][j + 1] = 1;
        newMatrix[1][m - 1] = 0;
        newMatrix[1][m + 1] = 1;
        setMatrix(newMatrix);
        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }

      console.log("wychodze" + boxActive2.length);
      return;
    }
    if (boxActive2.length === 1) {
      let i = boxActive2.length - 1;
      let j = boxActive2[1];

      for (let t = 4; t >= 0; t--) {
        console.log("sprawdzam petle " + boxActive2[0][t]);
        if (boxActive2[0][t] === 1) {
          j = t;
        }
      }
      console.log("i " + i);
      console.log("j " + j);
      if (matrix[i][j + 1] === 0) {
        console.log("warunek spełniony");
        let newMatrix = structuredClone(matrix);
        newMatrix[i][j] = 0;
        newMatrix[i][j + 1] = 1;
        setMatrix(newMatrix);
        // setLocation(...location, box12[[0]]);
        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }
    }

    // if (boxPositionLeftToNumber + move < boardLimit.right) {
    //   boxPosition.style.left = boxPositionLeftToNumber + move + "px";
    // }
  };

  const handleMoveLeft = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;
    if (boxPositionLeftNumber - move > boardLimit.left) {
      boxPosition.style.left = boxPositionLeftNumber - move + "px";
    }
  };

  const handleMoveDown = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.top.replace("px", "")) || 0;
    if (boxPositionBottomtoToNumber + move < boardLimit.bottom - 10) {
      boxPosition.style.top = boxPositionBottomtoToNumber + move + "px";
    }
  };

  const handleMoveUp = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.top.replace("px", "")) || 0;
    if (boxPositionBottomtoToNumber - move > boardLimit.top) {
      boxPosition.style.top = boxPositionBottomtoToNumber - move + "px";
    }
  };

  return (
    <div className="App">
      <div>
        <button className="App__restart" onClick={handleStartGame}>
          Zacznij od początku
        </button>
        <div className="App__coordinate-box22">
          {matrix[0]}
          <br />
          {matrix[1]}
          <br />
          {matrix[2]}
          <br />
          {matrix[3]}
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
              setBoxActive2(location.box12);
            }}
          >
            <div className="App__coordinate-box22"></div>
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
              setBoxActive("box22");
              setBoxActive2(location.box22);
            }}
          >
            <div className="box_corrdinate">
              <button className="App__game-box-button top" onClick={handleMoveUp}>
                Góra
              </button>
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
