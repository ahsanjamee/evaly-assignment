import React, { useState, useEffect } from "react";
import pic from '../assets/img.jpg';

const useFetch = url =>{
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);
    const [images, setImages] = useState(null);

    useEffect (() => {
        async function fetchData(){
            const response = await fetch(url);
            const item = await response.json();
            const image = item.results[2].image_urls[0];
            setImage(image);
            setData(item);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);
    return {data, image};
};

const Products = () => {
    const {data, image} = useFetch("https://api-dev.evaly.com.bd/core/public/products/");
    console.log(image);

  return (
    <div>
      <h1 className="productHeader">Product Details</h1>
      <div className="products">
        <div className="productImage">
            <div className="mainImage">
                <img src={image} alt="shirt"/>
            </div>
            <div className="smallImages">
                <img src={image} alt="shirt"/>
                <img src={image} alt="shirt"/>
                <img src={image} alt="shirt"/>
                <img src={image} alt="shirt"/>
            </div>
        </div>
        <div className="productDetails">
            <div className="title">Product Name</div>
            <div className="details">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</div>
            <div className="size">

            </div>
            <div className="color">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
