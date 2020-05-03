import React from "react";
import ReactImageMagnify from 'react-image-magnify';

export const MainImage = (props) => {
  const mainImage = props.main;

  return (
    <div className="mainImage">
      <ReactImageMagnify {...{
          smallImage: {
              width: 400,
              height: 400,
              isFluidWidth: false,
              src: mainImage
          },
          largeImage: {
              src: mainImage,
              width: 1200,
              height: 1800
          }
      }} />
      {/* <img src={mainImage} alt="shirt" /> */}
    </div>
  );
};
