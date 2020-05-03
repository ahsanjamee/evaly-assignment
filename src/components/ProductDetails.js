import React from "react";
import Size from "./Size";
import Color from "./Color";

export const ProductDetails = (props) => {
  return (
    <div className="productDetails">
      <div className="title">{props.title}</div>
      <div className="SKU">SKU : {props.sku}</div>
      <div className="brand">BRAND : {props.brand}</div>
      <div className="details">
        {props.desc}
        <hr />
      </div>
      <Size size={props.size} />
      <Color color={props.color} />
    </div>
  );
};

export default ProductDetails;
