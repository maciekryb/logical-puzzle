import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  let [matrix, setMatrix] = useState([
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
  ]);

  const [matrixBox11, setMatrixBox11] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox11b, setMatrixBox11b] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox11c, setMatrixBox11c] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox11d, setMatrixBox11d] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox02a, setMatrixBox02a] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
  ]);
  const [matrixBox02b, setMatrixBox02b] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
  ]);
  const [matrixBox02c, setMatrixBox02c] = useState([
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox02d, setMatrixBox02d] = useState([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox20, setMatrixBox20] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [matrixBox22, setMatrixBox22] = useState([
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
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
    boxPosition11.style.left = startPoisitionX + 600 + "px";
    boxPosition11.style.top = startPoisitionY + 400 + "px";
    let boxPosition11b = document.getElementById("box11b");
    boxPosition11b.style.left = startPoisitionX + 600 + "px";
    boxPosition11b.style.top = startPoisitionY + 200 + "px";
    let boxPosition11c = document.getElementById("box11c");
    boxPosition11c.style.left = startPoisitionX + 800 + "px";
    boxPosition11c.style.top = startPoisitionY + 200 + "px";
    let boxPosition11d = document.getElementById("box11d");
    boxPosition11d.style.left = startPoisitionX + 800 + "px";
    boxPosition11d.style.top = startPoisitionY + 400 + "px";
    let boxPosition02a = document.getElementById("box02a");
    boxPosition02a.style.left = startPoisitionX + "px";
    boxPosition02a.style.top = startPoisitionY + 600 + "px";
    let boxPosition02b = document.getElementById("box02b");
    boxPosition02b.style.left = startPoisitionX + 600 + "px";
    boxPosition02b.style.top = startPoisitionY + 600 + "px";
    let boxPosition02c = document.getElementById("box02c");
    boxPosition02c.style.left = startPoisitionX + "px";
    boxPosition02c.style.top = startPoisitionY + "px";
    let boxPosition02d = document.getElementById("box02d");
    boxPosition02d.style.left = startPoisitionX + 600 + "px";
    boxPosition02d.style.top = startPoisitionY + "px";
    let boxPosition20 = document.getElementById("box20");
    boxPosition20.style.left = startPoisitionX + 400 + "px";
    boxPosition20.style.top = startPoisitionY + 200 + "px";
    let boxPosition22 = document.getElementById("box22");
    boxPosition22.style.left = startPoisitionX + 0 + "px";
    boxPosition22.style.top = startPoisitionY + 200 + "px";
  };

  const handleMoveRight = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;

    if (boxActive === "box11" || boxActive === "box11b" || boxActive === "box11c" || boxActive === "box11d") {
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
        console.log("warunek spe??niony");
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
        if (boxActive === "box11b") {
          setMatrixBox11b(newLocalMatrix);
        }
        if (boxActive === "box11c") {
          setMatrixBox11c(newLocalMatrix);
        }
        if (boxActive === "box11d") {
          setMatrixBox11d(newLocalMatrix);
        }
        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }
    }

    if (boxActive === "box02a" || boxActive === "box02b" || boxActive === "box02c" || boxActive === "box02d") {
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
        console.log("warunek spe??niony");
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
        if (boxActive === "box02b") {
          setMatrixBox02b(newLocalMatrix);
        }
        if (boxActive === "box02c") {
          setMatrixBox02c(newLocalMatrix);
        }
        if (boxActive === "box02d") {
          setMatrixBox02d(newLocalMatrix);
        }
        boxPosition.style.left = boxPositionLeftToNumber + move + "px";
      }
    }

    if (boxActive === "box20") {
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
        newMatrix[i][j] = 0;
        newMatrix[i][j + 1] = 1;
        newMatrix[i + 1][j] = 0;
        newMatrix[i + 1][j + 1] = 1;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i][j + 1] = 1;
        newLocalMatrix[i + 1][j] = 0;
        newLocalMatrix[i + 1][j + 1] = 1;
        setMatrixBox20(newLocalMatrix);
        console.log(matrixBox22);

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
    }
  };

  const handleMoveLeft = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionLeftToNumber = parseInt(boxPosition.style.left.replace("px", "")) || 0;

    if (boxActive === "box11" || boxActive === "box11b" || boxActive === "box11c" || boxActive === "box11d") {
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
      if (matrix[i][j - 1] === 0 && j !== null) {
        console.log("warunek spe??niony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i][j] = 0;
        newGlobalMatrix[i][j - 1] = 1;
        setMatrix(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i][j - 1] = 1;
        if (boxActive === "box11") {
          setMatrixBox11(newLocalMatrix);
        }
        if (boxActive === "box11b") {
          setMatrixBox11b(newLocalMatrix);
        }
        if (boxActive === "box11c") {
          setMatrixBox11c(newLocalMatrix);
        }
        if (boxActive === "box11d") {
          setMatrixBox11d(newLocalMatrix);
        }
        boxPosition.style.left = boxPositionLeftToNumber - move + "px";
      }
    }

    if (boxActive === "box02a" || boxActive === "box02b" || boxActive === "box02c" || boxActive === "box02d") {
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
      if (matrix[i][j - 1] === 0 && j !== null) {
        console.log("warunek spe??niony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i][j + 1] = 0;
        newGlobalMatrix[i][j - 1] = 1;
        setMatrix(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j + 1] = 0;
        newLocalMatrix[i][j - 1] = 1;
        if (boxActive === "box02a") {
          setMatrixBox02a(newLocalMatrix);
        }
        if (boxActive === "box02b") {
          setMatrixBox02b(newLocalMatrix);
        }
        if (boxActive === "box02c") {
          setMatrixBox02c(newLocalMatrix);
        }
        if (boxActive === "box02d") {
          setMatrixBox02d(newLocalMatrix);
        }
        boxPosition.style.left = boxPositionLeftToNumber - move + "px";
      }
    }

    if (boxActive === "box20") {
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

      if (matrix[i][j - 1] === 0 && matrix[i + 1][j - 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i][j] = 0;
        newMatrix[i][j - 1] = 1;
        newMatrix[i + 1][j] = 0;
        newMatrix[i + 1][j - 1] = 1;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i][j - 1] = 1;
        newLocalMatrix[i + 1][j] = 0;
        newLocalMatrix[i + 1][j - 1] = 1;
        setMatrixBox20(newLocalMatrix);
        console.log(matrixBox22);

        boxPosition.style.left = boxPositionLeftToNumber - move + "px";
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

      for (let t = 4; t >= 0; t--) {
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }

      if (matrix[i][j - 1] === 0 && matrix[i + 1][j - 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i][j + 1] = 0;
        newMatrix[i][j - 1] = 1;
        newMatrix[i + 1][j + 1] = 0;
        newMatrix[i + 1][j - 1] = 1;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j + 1] = 0;
        newLocalMatrix[i][j - 1] = 1;
        newLocalMatrix[i + 1][j + 1] = 0;
        newLocalMatrix[i + 1][j - 1] = 1;
        setMatrixBox22(newLocalMatrix);
        console.log(matrixBox22);

        boxPosition.style.left = boxPositionLeftToNumber - move + "px";
      }
    }

    // if (boxPositionLeftNumber - move > boardLimit.left) {
    //   boxPosition.style.left = boxPositionLeftNumber - move + "px";
    // }
  };

  const handleMoveDown = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.top.replace("px", "")) || 0;

    if (boxActive === "box11" || boxActive === "box11b" || boxActive === "box11c" || boxActive === "box11d") {
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
      if (matrix[i + 1][j] === 0 && j !== null) {
        console.log("warunek spe??niony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i][j] = 0;
        newGlobalMatrix[i + 1][j] = 1;
        setMatrix(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i + 1][j] = 1;
        if (boxActive === "box11") {
          setMatrixBox11(newLocalMatrix);
        }
        if (boxActive === "box11b") {
          setMatrixBox11b(newLocalMatrix);
        }
        if (boxActive === "box11c") {
          setMatrixBox11c(newLocalMatrix);
        }
        if (boxActive === "box11d") {
          setMatrixBox11d(newLocalMatrix);
        }
        boxPosition.style.top = boxPositionBottomtoToNumber + move + "px";
      }
    }
    if (boxActive === "box02a" || boxActive === "box02b" || boxActive === "box02c" || boxActive === "box02d") {
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
        console.log("sprawdzam petle " + boxActive2[i][t]);
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }
      console.log("i " + i);
      console.log("j " + j);

      if (matrix[i + 1][j] === 0 && matrix[i + 1][j + 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i][j] = 0;
        newMatrix[i + 1][j] = 1;
        newMatrix[i][j + 1] = 0;
        newMatrix[i + 1][j + 1] = 1;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i + 1][j] = 1;
        newLocalMatrix[i][j + 1] = 0;
        newLocalMatrix[i + 1][j + 1] = 1;
        if (boxActive === "box02a") {
          setMatrixBox02a(newLocalMatrix);
        }
        if (boxActive === "box02b") {
          setMatrixBox02b(newLocalMatrix);
        }
        if (boxActive === "box02c") {
          setMatrixBox02c(newLocalMatrix);
        }
        if (boxActive === "box02d") {
          setMatrixBox02d(newLocalMatrix);
        }

        boxPosition.style.top = boxPositionBottomtoToNumber + move + "px";
      }
    }

    if (boxActive === "box20") {
      let i = null;
      let j = null;
      if (boxActive2[3].indexOf(1) >= 0) {
        i = 3;
      } else if (boxActive2[2].indexOf(1) >= 0) {
        i = 2;
      } else if (boxActive2[1].indexOf(1) >= 0) {
        i = 1;
      } else if (boxActive2[0].indexOf(1) >= 0) {
        i = 0;
      }

      for (let t = 0; t <= 4; t++) {
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }
      console.log("i " + i);
      console.log("j " + j);
      if (matrix[i + 1][j] === 0 && j !== null) {
        console.log("warunek spe??niony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i - 1][j] = 0;
        newGlobalMatrix[i + 1][j] = 1;
        setMatrix(newGlobalMatrix);
        console.log(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i - 1][j] = 0;
        newLocalMatrix[i + 1][j] = 1;
        if (boxActive === "box20") {
          console.log("jestem");
          setMatrixBox20(newLocalMatrix);
          console.log(newLocalMatrix);
        }
        boxPosition.style.top = boxPositionBottomtoToNumber + move + "px";
      }
    }

    if (boxActive === "box22") {
      let i = null;
      let j = null;

      if (boxActive2[3].indexOf(1) >= 0) {
        i = 3;
      } else if (boxActive2[2].indexOf(1) >= 0) {
        i = 2;
      } else if (boxActive2[1].indexOf(1) >= 0) {
        i = 1;
      } else if (boxActive2[0].indexOf(1) >= 0) {
        i = 0;
      }

      for (let t = 4; t >= 0; t--) {
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }

      if (matrix[i + 1][j] === 0 && matrix[i + 1][j + 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i + 1][j] = 1;
        newMatrix[i + 1][j + 1] = 1;
        newMatrix[i - 1][j] = 0;
        newMatrix[i - 1][j + 1] = 0;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i + 1][j] = 1;
        newLocalMatrix[i + 1][j + 1] = 1;
        newLocalMatrix[i - 1][j] = 0;
        newLocalMatrix[i - 1][j + 1] = 0;
        setMatrixBox22(newLocalMatrix);
        console.log(matrixBox22);

        boxPosition.style.top = boxPositionBottomtoToNumber + move + "px";
      }
    }
  };

  const handleMoveUp = () => {
    let boxPosition = document.getElementById(boxActive);
    let boxPositionBottomtoToNumber = parseInt(boxPosition.style.top.replace("px", "")) || 0;

    if (boxActive === "box11" || boxActive === "box11b" || boxActive === "box11c" || boxActive === "box11d") {
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
      if (matrix[i - 1][j] === 0 && j !== null) {
        console.log("warunek spe??niony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i][j] = 0;
        newGlobalMatrix[i - 1][j] = 1;
        setMatrix(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i - 1][j] = 1;
        if (boxActive === "box11") {
          setMatrixBox11(newLocalMatrix);
        }
        if (boxActive === "box11b") {
          setMatrixBox11b(newLocalMatrix);
        }
        if (boxActive === "box11c") {
          setMatrixBox11c(newLocalMatrix);
        }
        if (boxActive === "box11d") {
          setMatrixBox11d(newLocalMatrix);
        }
        boxPosition.style.top = boxPositionBottomtoToNumber - move + "px";
      }
    }
    if (boxActive === "box02a" || boxActive === "box02b" || boxActive === "box02c" || boxActive === "box02d") {
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
        console.log("sprawdzam petle " + boxActive2[i][t]);
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }
      console.log("i " + i);
      console.log("j " + j);

      if (matrix[i - 1][j] === 0 && matrix[i - 1][j + 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i][j] = 0;
        newMatrix[i - 1][j] = 1;
        newMatrix[i][j + 1] = 0;
        newMatrix[i - 1][j + 1] = 1;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i][j] = 0;
        newLocalMatrix[i - 1][j] = 1;
        newLocalMatrix[i][j + 1] = 0;
        newLocalMatrix[i - 1][j + 1] = 1;
        if (boxActive === "box02a") {
          setMatrixBox02a(newLocalMatrix);
        }
        if (boxActive === "box02b") {
          setMatrixBox02b(newLocalMatrix);
        }
        if (boxActive === "box02c") {
          setMatrixBox02c(newLocalMatrix);
        }
        if (boxActive === "box02d") {
          setMatrixBox02d(newLocalMatrix);
        }

        boxPosition.style.top = boxPositionBottomtoToNumber - move + "px";
      }
    }

    if (boxActive === "box20") {
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
      if (matrix[i - 1][j] === 0 && j !== null) {
        console.log("warunek spe??niony");
        let newGlobalMatrix = structuredClone(matrix);
        newGlobalMatrix[i + 1][j] = 0;
        newGlobalMatrix[i - 1][j] = 1;
        setMatrix(newGlobalMatrix);
        console.log(newGlobalMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i + 1][j] = 0;
        newLocalMatrix[i - 1][j] = 1;
        if (boxActive === "box20") {
          console.log("jestem");
          setMatrixBox20(newLocalMatrix);
          console.log(newLocalMatrix);
        }
        boxPosition.style.top = boxPositionBottomtoToNumber - move + "px";
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

      for (let t = 4; t >= 0; t--) {
        if (boxActive2[i][t] === 1) {
          j = t;
        }
      }

      if (matrix[i - 1][j] === 0 && matrix[i - 1][j + 1] === 0) {
        console.log("dobrze !!!!!!!!!");
        let newMatrix = structuredClone(matrix);
        newMatrix[i - 1][j] = 1;
        newMatrix[i - 1][j + 1] = 1;
        newMatrix[i + 1][j] = 0;
        newMatrix[i + 1][j + 1] = 0;
        setMatrix(newMatrix);

        let newLocalMatrix = structuredClone(boxActive2);
        newLocalMatrix[i - 1][j] = 1;
        newLocalMatrix[i - 1][j + 1] = 1;
        newLocalMatrix[i + 1][j] = 0;
        newLocalMatrix[i + 1][j + 1] = 0;
        setMatrixBox22(newLocalMatrix);
        console.log(matrixBox22);

        boxPosition.style.top = boxPositionBottomtoToNumber - move + "px";
      }
    }
  };

  return (
    <div className="App">
      <div>
        <button className="App__restart" onClick={handleStartGame}>
          Zacznij od pocz??tku
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
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box11"
            id="box11b"
            onMouseOver={() => {
              setBoxActive("box11b");
              setBoxActive2(matrixBox11b);
            }}
          >
            <div className="App__coordinate-box11">
              {" "}
              {matrixBox11b[0]}
              <br />
              {matrixBox11b[1]}
              <br />
              {matrixBox11b[2]}
              <br />
              {matrixBox11b[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box11"
            id="box11c"
            onMouseOver={() => {
              setBoxActive("box11c");
              setBoxActive2(matrixBox11c);
            }}
          >
            <div className="App__coordinate-box11">
              {" "}
              {matrixBox11c[0]}
              <br />
              {matrixBox11c[1]}
              <br />
              {matrixBox11c[2]}
              <br />
              {matrixBox11c[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box11"
            id="box11d"
            onMouseOver={() => {
              setBoxActive("box11d");
              setBoxActive2(matrixBox11d);
            }}
          >
            <div className="App__coordinate-box11">
              {" "}
              {matrixBox11d[0]}
              <br />
              {matrixBox11d[1]}
              <br />
              {matrixBox11d[2]}
              <br />
              {matrixBox11d[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
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
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box02a"
            id="box02b"
            onMouseOver={() => {
              setBoxActive("box02b");
              setBoxActive2(matrixBox02b);
            }}
          >
            <div className="App__coordinate-box02">
              {" "}
              {matrixBox02b[0]}
              <br />
              {matrixBox02b[1]}
              <br />
              {matrixBox02b[2]}
              <br />
              {matrixBox02b[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box02a"
            id="box02c"
            onMouseOver={() => {
              setBoxActive("box02c");
              setBoxActive2(matrixBox02c);
            }}
          >
            <div className="App__coordinate-box02">
              {" "}
              {matrixBox02c[0]}
              <br />
              {matrixBox02c[1]}
              <br />
              {matrixBox02c[2]}
              <br />
              {matrixBox02c[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box02a"
            id="box02d"
            onMouseOver={() => {
              setBoxActive("box02d");
              setBoxActive2(matrixBox02d);
            }}
          >
            <div className="App__coordinate-box02">
              {" "}
              {matrixBox02d[0]}
              <br />
              {matrixBox02d[1]}
              <br />
              {matrixBox02d[2]}
              <br />
              {matrixBox02d[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
            </button>
          </div>
          <div
            className="App__game-box20"
            id="box20"
            onMouseOver={() => {
              setBoxActive("box20");
              setBoxActive2(matrixBox20);
            }}
          >
            <div className="App__coordinate-box02">
              {" "}
              {matrixBox20[0]}
              <br />
              {matrixBox20[1]}
              <br />
              {matrixBox20[2]}
              <br />
              {matrixBox20[3]}
            </div>
            <button className="App__game-box-button top" onClick={() => handleMoveUp()}>
              G??ra
            </button>
            <button className="App__game-box-button left" onClick={handleMoveLeft}>
              Lewo
            </button>
            <button className="App__game-box-button right" onClick={handleMoveRight}>
              Prawo
            </button>
            <br />
            <button className="App__game-box-button bottom" onClick={handleMoveDown}>
              D????
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
                G??ra
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
              D????
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
