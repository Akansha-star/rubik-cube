import React, { useState } from "react";
import "../App.css";
import { Color, getRandomInt } from "../Utils";
import Square from "./Square";
//create random set of boxes
let squareColor = [...Array(9).keys()].map(() => {
  return getRandomInt(Color.length);
});

const checkGameStatus = (boxId, color) => {
  console.log("boxId: " + boxId + " color: " + color);
  squareColor[boxId] = color;
  let prevColor = squareColor[0];
  let gameComplete = squareColor.every((value) => prevColor === value);
  console.log("gameComplete: " + gameComplete);
  if (gameComplete) {
    alert("Congrats! You won!");
  }
};

const RubikCube = () => (
  <div className="rubik-cube">
    {[...Array(9).keys()].map((value, index) => {
      return (
        <div key={index} className="box">
          <Square
            squareColor={squareColor}
            checkStatus={checkGameStatus}
            objectId={index}
          />
        </div>
      );
    })}
  </div>
);

export default RubikCube;
