import React from "react";
import "../App.css";
import { Color, getRandomInt } from "../Utils";
import Square from "./Square";

const squareColor = [...Array(9).keys()].map(() => getRandomInt(Color.length));

const checkGameStatus = (boxId, color) => {
  squareColor[boxId] = color;
  const prevColor = squareColor[0];
  const gameComplete = squareColor.every((value) => prevColor === value);
  if (gameComplete) {
    // eslint-disable-next-line
    alert("Congrats! You won!");
  }
};

const RubikCube = () => (
  <div className="rubik-cube">
    {[...Array(9).keys()].map((value, index) => (
      <div key={value} className="box">
        <Square
          squareColor={squareColor}
          checkStatus={checkGameStatus}
          objectId={index}
        />
      </div>
    ))}
  </div>
);

export default RubikCube;
