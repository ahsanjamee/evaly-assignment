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
  const [size, setSize] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [shopImage, setShopImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api-dev.evaly.com.bd/core/public/products/colorsize-e7c141f05/"
      );
      const item = await response.json();
      // const result = item.results[10];
      const image = item.data.product_variants[0].product_images;
      const details = item.data.product_variants[0];
      const attrColor = item.data.attributes[0].attribute_values[0].value;
      const attrSize = item.data.attributes[1].attribute_values[0].value;

      setSize(attrSize);
      setColor(attrColor);
      setTitle(details.product_name);
      setDesc(details.product_description);
      setSku(details.sku);
      setBrand(details.brand_name);
      setImage(image);

      const response2 = await fetch(
        "https://api-dev.evaly.com.bd/core/public/product/shops/222541/"
      );

      const shops = await response2.json();
      const shopName = shops.data;
      setShopName(shopName[0].shop_name);
      setShopImage(shopName[0].shop_image);
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
        />
        <Shops name={shopName} image={shopImage} />
      </div>
    </div>
  );
};

export default Products;
