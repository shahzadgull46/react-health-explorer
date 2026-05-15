import ProductInfo from "../../../src/components/ProductData/ProductInfo";



const mapHealthData = (product) => {
  return {
    nutrition: getNutrition(product),
    safety: getSafety(product),
    diet: getDiet(product),
    environment: getEnvironment(product),
  };
};

const getNutrition = (product) => {
  return {
    sugar: product.nutriments.sugars_value,
    fat: product.nutriments.fat_value,
    salt: product.nutriments.salt_value,
    protein: product.nutriments.proteins_value,
    energy: product.nutriments["energy-kcal_value"],
    grade: product.nutriscore_grade,
  };
};

const getSafety = (product) => {
  return {
    allergens: (product.allergens_tags || []).map((e) => e.replace("en:", "")),
    additives: product.additives_n,
  };
};

const getDiet = (product) => {
  return {
    vegan: (product.ingredients_analysis_tags || []).includes("en:vegan"),
    vegetarian: (product.ingredients_analysis_tags || []).includes(
      "en:vegetarian",
),
  };
};

const getEnvironment = (product) => {
  return {
    ecoscore_grade: product.ecoscore_grade,
    ecoscore: product.ecoscore_score,
    packaging:
      (product.packaging_materials_tags || [])[0]?.replace("en:", "") ||
      "Unknown",
    tags: (product.packaging_materials_tags || []).map((e) =>
      e.replace("en:", ""),
    ),
  };
};
export default mapHealthData;