import React from "react";

export const Size = (props) => {
 
  return (
    <div className="size">
      <div className="sizeButton">
        <h4>Size</h4>
      </div>
      <hr />
      {props.size ? 
      (props.size).map((item) => {
        return(
          <button onClick={() => props.sizeKey(item.key)}>{item.value}</button> 
        )
      })
        : null}
    </div>
  );
};

export default Size;
