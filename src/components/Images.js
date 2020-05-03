import React, { useState, useEffect } from "react";
import { MainImage } from "./MainImage";

export const Images = (props) => {
  const image = props.images;
  const mainImg = image[0];

  const [mainImage, setMainImage] = useState();

  const handle = () => {
    setMainImage(mainImg);
  };

  useEffect(() => {
    handle();
     // eslint-disable-next-line
  }, [mainImg]);

  const handleMainImage = (img) => {
    if (img) {
      setMainImage(img);
    }
  };

  return (
    <div className="productImage">
      {}
      <MainImage main={mainImage} />
      <div className="smallImages">
        {image.map((img, index) => (
          <div key={index} onClick={() => handleMainImage(img)}>
            <img src={img} alt="shirt" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Images;
