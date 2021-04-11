/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../App.css";
import { Color } from "../Utils";

const Square = ({ objectId, checkStatus, squareColor }) => {
  const [myState, setMyState] = useState(squareColor[objectId]);
  const updateState = () => {
    let newState;
    if (myState === Color.length - 1) {
      newState = 0;
    } else {
      newState = myState + 1;
    }
    setMyState(newState);
    checkStatus(objectId, newState);
  };

  return (
    <div className="container">
      <button
        aria-label=" "
        id={objectId}
        className="flat"
        type="button"
        onClick={updateState}
        style={{
          backgroundColor: Color[myState],
        }}
      />
    </div>
  );
};

export default Square;
