import React, { useState, useEffect } from "react";
import Images from "./Images";
import ProductDetails from "./ProductDetails";
import Shops from "./Shops";

const Products = () => {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [sku, setSku] = useState(null);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const [colorKey, setColorKey] = useState(null);
  const [size, setSize] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [sizeKey, setSizeKey] = useState(null);
  const [item, setItem] = useState(null);


  const handleColorKey = key =>{
    if(key){
      setColorKey(key);
      changeAttr(key);
    }
  }

  const handleSizeKey = key =>{
    if(key){
      setSizeKey(key);
      changeAttr(key);
    }
  }

  const changeAttr = key => {
    if(item){
      for(let i = 0; i < item.data.product_variants.length; i++){
        for(let j = 0; j < 2; j++){
        let obj = item.data.product_variants[i].attribute_values[j];
          if(key === obj)
            {
              const result = item.data.product_variants[i];
              setTitle(result.product_name);
              setDesc(result.product_description);
              setSku(result.sku);
              setBrand(result.brand_name);
              setImage(result.product_images);
              
            }
        }
      }
  }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api-dev.evaly.com.bd/core/public/products/colorsize-e7c141f05/"
      );
      const item = await response.json();
      const result = item.data.product_variants[0];
      const attrColor = item.data.attributes[0].attribute_values;
      const attrSize = item.data.attributes[1].attribute_values;

      setItem(item);
      setSize(attrSize);
      setColor(attrColor);
      setTitle(result.product_name);
      setDesc(result.product_description);
      setSku(result.sku);
      setBrand(result.brand_name);
      setImage(result.product_images);

      const response2 = await fetch(
        "https://api-dev.evaly.com.bd/core/public/product/shops/222541/"
      );
      
      const shops = await response2.json();
      const shopName = shops.data;
      setShopName(shopName);
      }
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="productHeader">Product Details</h1>
      <div className="products">
        <Images images={image} />
        <ProductDetails
          title={title}
          desc={desc}
          sku={sku}
          brand={brand}
          color={color}
          size={size}
          handleClick={handleColorKey}
          sizeKey={handleSizeKey}
        />
        <Shops name={shopName} />
    {changeAttr()}

      </div>
    </div>
  );
};

export default Products;
