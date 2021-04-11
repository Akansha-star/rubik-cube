import React, { useState } from "react";
import "../App.css";
import { Color } from "../Utils";

const Square = ({ objectId, checkStatus, squareColor }) => {
  const updateState = () => {
    let newState;
    myState === Color.length - 1 ? (newState = 0) : (newState = myState + 1);
    setMyState(newState);
    checkStatus(objectId, newState);
  };

  const [myState, setMyState] = useState(squareColor[objectId]);
  return (
    <div className="container">
      <button
        id={objectId}
        className="flat"
        type="button"
        onClick={updateState}
        style={{
          backgroundColor: Color[myState],
        }}
      ></button>
    </div>
  );
};

export default Square;
