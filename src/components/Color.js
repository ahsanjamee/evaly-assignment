import React from "react";

export const Color = (props) => {
  return (
    <div className="color">
      <div className="colorButton">
        <h4>Color</h4>
      </div>
      <hr />
      {props.color ? 
      (props.color).map((item) => {
        return(
          <button>{item.value}</button> 
        )
      })
        : null}
    </div>
  );
};

export default Color;
