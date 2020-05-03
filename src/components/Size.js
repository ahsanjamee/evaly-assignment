import React from "react";

export const Size = (props) => {
  return (
    <div className="size">
      <div className="sizeButton">
        <h4>Size</h4>
      </div>
      <hr />
      <button>{props.size}</button>
    </div>
  );
};

export default Size;
