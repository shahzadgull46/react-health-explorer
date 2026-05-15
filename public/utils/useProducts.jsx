import { useState, useEffect } from "react";
const useProducts = () => {
  const [allProductList, setallProductList] = useState([]);

  // const [filteredList, setfilteredList] = useState([]);

useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // for specific fields:
"https://world.openfoodfacts.org/api/v2/search?search_terms=yogurt&page_size=50&fields=code,product_name,quantity,brands,categories_tags,labels_tags,allergens,ingredients_analysis_tags,additives_tags,nutriscore_grade,ecoscore_grade,nova_group,origins_tags,manufacturing_places_tags,stores_tags,countries_tags,image_front_small_url,nutriments"
      // for all fields
      // "https://world.openfoodfacts.org/api/v2/search?search_terms=snacks&page_size=50"
    );

    const json = await data.json();
    console.log(json);

    // optional chaining
    setallProductList(json?.products);
    // setfilteredList(json?.products);
  };

  return allProductList;
 
};
export default useProducts;
