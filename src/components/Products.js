import React, { useState, useEffect } from "react";

const useFetch = url =>{
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);
    const [images, setImages] = useState(null);

    useEffect (() => {
        async function fetchData(){
            const response = await fetch(url);
            const item = await response.json();
            const image = item.results[10].image_urls;
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
        <div className="productImage"></div>
        <div className="productDetails"></div>
      </div>
    </div>
  );
};

export default Products;
