import React from "react";

export const Color = (props) => {
  return (
    <div className="color">
      <div className="colorButton">
        <h4>Color</h4>
      </div>
      <hr />
      <button>{props.color}</button>
    </div>
  );
};

export default Color;
