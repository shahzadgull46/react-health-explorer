import Product, { withPreferenceLabel } from "./Product";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../public/utils/useOnlineStatus";

const Body = () => {
  const [allProductList, setallProductList] = useState([]);

  const [filteredList, setfilteredList] = useState([]);

  const [searchText, setsearchText] = useState("");

  const EnhancedProduct = withPreferenceLabel(Product);

  const fetchData = async () => {
    const data = await fetch(
      // for specific fields:
      "https://world.openfoodfacts.org/api/v2/search?search_terms=yogurt&page_size=50&fields=code,product_name,quantity,brands,categories_tags,labels_tags,allergens,ingredients_analysis_tags,additives_tags,nutriscore_grade,ecoscore_grade,nova_group,origins_tags,manufacturing_places_tags,stores_tags,countries_tags,image_front_small_url,nutriments.sugars_100g,nutriments.proteins_100g",
      // for all fields
      // "https://world.openfoodfacts.org/api/v2/search?search_terms=snacks&page_size=50"
    );

    const json = await data.json();
    console.log(json);

    // optional chaining
    setallProductList(json?.products);
    setfilteredList(json?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline Please check your network connection</h1>
    );
  }

  return allProductList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-7 p-1 rounded-[5px] flex mt-3.5 items-center bg-blue-50">
        <div>
          <input
            type="text"
            className="m-4 p-1 border-2 text-xl"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="bg-[hsl(0,83%,50%)] px-7 py-3   rounded-lg text-white text-lg font-semibold cursor-pointer  hover:scale-105 hover:bg-red-600 transition-all duration-300 shadow-lg"
            onClick={() => {
              // filter products and update ui
              console.log(searchText);
              const searchProduct = allProductList.filter((item) => {
                return item.product_name
                  ?.toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setfilteredList(searchProduct);
            }}
          >
            Search
          </button>
        </div>

        <button
          className=" m-3 p-3  text-center text-white text-lg font-medium cursor-pointer bg-[hsla(98,100%,60%,0.904)] rounded-lg  hover:scale-105 transition-all duration-300 shadow-lg "
          onClick={() => {
            const filtered = allProductList.filter((product) => {
              // Get grade from either location, normalize to lowercase string
              const rawGrade =
                product.ecoscore_grade || product.ecoscore_data?.grade;
              const grade = String(rawGrade || "")
                .toLowerCase()
                .trim();
              return grade === "a" || grade === "b";
            });

            setfilteredList(filtered);
          }}
        >
          {" "}
          Top Rated Eco
        </button>

        <button
          className="m-3 p-3 bg-[hsl(0,83%,50%)] rounded-lg text-white text-lg font-semibold cursor-pointer  hover:scale-105 hover:bg-red-600 transition-all duration-300 shadow-lg"
          onClick={() => setfilteredList([...allProductList])}
        >
          Show All
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3.5 p-7 m-7 bg-slate-200">
        {filteredList.map((product) => {
          //Show default preference per to product card

          return <EnhancedProduct key={product.code} groData={product} />;
        })}
      </div>
    </div>
  );
};
export default Body;
