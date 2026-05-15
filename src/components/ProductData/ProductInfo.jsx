import { useParams } from "react-router-dom";
import { PRODUCTINFO_URL } from "../../../public/utils/constants";
import ProductInfoShimmer from "./ProductInfoShimmer";
import useProductInfo from "../../../public/utils/useProductInfo";
import HealthCard from "./HealthCard";
import mapHealthData from "../../../public/utils/Mapper.jsx/healthMapper";
import { useState } from "react";

const ProductInfo = () => {
  const { barcode } = useParams();
  // custom hook:
  const productInfo = useProductInfo(barcode);

   const [openSection,setopenSection]=useState(null);
   
  const handleClick=(section)=>{
       setopenSection(openSection===section ? null : section)
     }

  if (productInfo === null) {
    return <ProductInfoShimmer />;
  }
  const {
    product_name,
    code,
    quantity,
    brands,
    packaging,
    categories,
    countries,
    image_front_small_url,
    origin,
    origins_tags,
    manufacturing_places,
    manufacturing_places_tags,
  } = productInfo;
  return (
    <div>
      <div className="product-info m-6  p-6 flex gap-30 bg-slate-200 rounded-[7px]">
        <span>
          <img
            className="w-125 h-100 object-contain ml-9 rounded-[10px] mt-2 "
            src={image_front_small_url}
            alt=""
          />
        </span>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[2.6rem] ">
            {product_name}- {brands}-{quantity}
          </h1>
          {[
            { label: "Barcode", value: code },
            { label: "Quantity", value: quantity },
            { label: "Brands", value: brands },
            { label: "Packaging", value: packaging },
            { label: "Categories", value: categories },
            { label: "Origin of the product", value: origin || origins_tags },
            {
              label: "Manufacturing or processing places",
              value:
                manufacturing_places ||
                manufacturing_places_tags ||
                "Not Specified",
            },
            { label: "Countries where sold", value: countries },
          ].map((item, index) => (
            <p key={index}>
              <b>{item.label}:</b> {item.value}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-slate-300 m-6 p-4">
        {" "}
        <HealthCard health={mapHealthData(productInfo)} openSection={openSection} handleClick={handleClick} />
      </div>
    </div>
  );
};
export default ProductInfo;
