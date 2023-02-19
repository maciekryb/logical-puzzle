import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  let [matrix, setMatrix] = useState([
    [1, 0, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const [matrixBox11, setMatrixBox11] = useState([
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox02a, setMatrixBox02a] = useState([
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox22, setMatrixBox22] = useState([
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

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
    let boxPosition11 = document.getElementById("box11");
    const startPoisitionX = boardLimit.left + 5;
    const startPoisitionY = boardLimit.bottom - 805;
    boxPosition11.style.left = startPoisitionX + "px";
    boxPosition11.style.top = startPoisitionY + "px";
    let boxPosition22 = document.getElementById("box22");
    boxPosition22.style.left = startPoisitionX + 400 + "px";
    boxPosition22.style.top = startPoisitionY + "px";
    let boxPosition12 = document.getElementById("box02a");
    boxPosition12.style.left = startPoisitionX + "px";
    boxPosition12.style.top = startPoisitionY + 200 + "px";
  };

  const handleMoveRight = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;

    if (boxActive === "box11") {
      let i = null;
      let j = null;
      if (boxActive2[0].indexOf(1) >= 0) {
        i = 0;
      } else if (boxActive2[1].indexOf(1) >= 0) {
        i = 1;
      } else if (boxActive2[2].indexOf(1) >= 0) {
        i = 2;
      } else if (boxActive2[3].indexOf(1) >= 0) {
        i = 3;
      }

      for (let t = 4; t >= 0; t--) {
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }
      console.log("i " + i);
      console.log("j " + j);
      if (matrix[i][j + 1] === 0 && j !== null) {
        console.log("warunek spełniony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i][j] = 0;
        newGlobalMatrix[i][j + 1] = 1;
        setMatrix(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i][j + 1] = 1;
        if (boxActive === "box11") {
          setMatrixBox11(newLocalMatrix);
        }

        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }
    }

    if (boxActive === "box02a") {
      let i = null;
      let j = null;
      if (boxActive2[0].indexOf(1) >= 0) {
        i = 0;
      } else if (boxActive2[1].indexOf(1) >= 0) {
        i = 1;
      } else if (boxActive2[2].indexOf(1) >= 0) {
        i = 2;
      } else if (boxActive2[3].indexOf(1) >= 0) {
        i = 3;
      }

      for (let t = 0; t <= 4; t++) {
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }
      console.log("i " + i);
      console.log("j " + j);
      if (matrix[i][j + 1] === 0 && j !== null) {
        console.log("warunek spełniony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i][j - 1] = 0;
        newGlobalMatrix[i][j + 1] = 1;
        setMatrix(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j - 1] = 0;
        newLocalMatrix[i][j + 1] = 1;
        if (boxActive === "box02a") {
          setMatrixBox02a(newLocalMatrix);
        }

        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }
    }

    if (boxActive === "box22") {
      let i = null;
      let j = null;

      if (boxActive2[0].indexOf(1) >= 0) {
        i = 0;
      } else if (boxActive2[1].indexOf(1) >= 0) {
        i = 1;
      } else if (boxActive2[2].indexOf(1) >= 0) {
        i = 2;
      } else if (boxActive2[3].indexOf(1) >= 0) {
        i = 3;
      }

      for (let t = 0; t <= 4; t++) {
        console.log("sprawdzam petle " + boxActive2[i][t]);
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }

      if (matrix[i][j + 1] === 0 && matrix[i + 1][j + 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i][j - 1] = 0;
        newMatrix[i][j + 1] = 1;
        newMatrix[i + 1][j - 1] = 0;
        newMatrix[i + 1][j + 1] = 1;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j - 1] = 0;
        newLocalMatrix[i][j + 1] = 1;
        newLocalMatrix[i + 1][j - 1] = 0;
        newLocalMatrix[i + 1][j + 1] = 1;
        setMatrixBox22(newLocalMatrix);
        console.log(matrixBox22);

        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }

      console.log("wychodze" + boxActive2.length);
      return;
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
        <div className="App__coordinate">
          {matrix[0]}
          <br />
          {matrix[1]}
          <br />
          {matrix[2]}
          <br />
          {matrix[3]}
        </div>
        <br />
        <div className="App__game" id="board">
          <div
            className="App__game-box11"
            id="box11"
            onMouseOver={() => {
              setBoxActive("box11");
              setBoxActive2(matrixBox11);
            }}
          >
            <div className="App__coordinate-box11">
              {" "}
              {matrixBox11[0]}
              <br />
              {matrixBox11[1]}
              <br />
              {matrixBox11[2]}
              <br />
              {matrixBox11[3]}
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
            className="App__game-box02a"
            id="box02a"
            onMouseOver={() => {
              setBoxActive("box02a");
              setBoxActive2(matrixBox02a);
            }}
          >
            <div className="App__coordinate-box02">
              {" "}
              {matrixBox02a[0]}
              <br />
              {matrixBox02a[1]}
              <br />
              {matrixBox02a[2]}
              <br />
              {matrixBox02a[3]}
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
              setBoxActive("box22");
              setBoxActive2(matrixBox22);
            }}
          >
            <div className="box_corrdinate">
              {matrixBox22[0]}
              <br />
              {matrixBox22[1]}
              <br />
              {matrixBox22[2]}
              <br />
              {matrixBox22[3]}
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
