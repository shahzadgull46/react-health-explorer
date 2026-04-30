import Product from "./Product";
import groProducts from "../../public/utils/mockdata";

import { IMG_URL } from "../../public/utils/constants";
import { THUMBNAIL_URL } from "../../public/utils/constants";

import { useState } from "react";

const Body = () => {
  // Using our mockData
  const [productList, setproductList] = useState(groProducts);

  // Another way to write the upper code of line:
  // const arr = useState(groProducts);

  // const [productList, setproductList] = arr;
  // const productList =arr[0]
  // const setproductList =arr[1]

  // local state variable - powerful variable
  // let [productList,setproductList]=useState([    {
  //       id: 1,
  //       title: "Essence Mascara Lash Princess",
  //       category: "beauty",
  //       price: 9.99,
  //       rating: 4.1,
  //       stock: 99,
  //       images: [
  //       {IMG_URL},
  //       ],
  //       thumbnail:
  //       THUMBNAIL_URL
  //     },
  //     {
  //       id: 2,
  //       title: "Eyeshadow Palette with Mirror",
  //       price: 19.99,
  //       rating: 2.86,
  //       stock: 34,

  //       images: [
  //         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  //       ],
  //       thumbnail:
  //         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  //     },]);

  // Local state Variable - powerful variable
  // const [productList,setproductList]=useState([{
  //       id: 1,
  //       title: "Essence Mascara Lash Princess",
  //       category: "beauty",
  //       price: 9.99,
  //       rating: 2.56,
  //       stock: 99,
  //       images: [IMG_URL],
  //       thumbnail: THUMBNAIL_URL,
  //     },
  //     {
  //       id: 2,
  //       title: "Eyeshadow Palette with Mirror",
  //       price: 19.99,
  //       rating: 4.3,
  //       stock: 34,

  //       images: [
  //         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  //       ],
  //       thumbnail:
  //         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  //     },
  //     {
  //       id: 6,
  //       title: "Eyeshadow Palette with Mirror",
  //       price: 19.99,
  //       rating: 4.3,
  //       stock: 34,

  //       images: [
  //         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  //       ],
  //       thumbnail:
  //         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  //     },]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = productList.filter(
              (product) => product.rating > 4.5,
            );
            setproductList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Products
        </button>
      </div>

      <div className="super-saver">
        {productList.map((product) => (
          <Product key={product.id} groData={product} />
        ))}
      </div>
    </div>
  );
};
export default Body;
