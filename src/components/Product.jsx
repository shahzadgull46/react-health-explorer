// groData is the prop
import { Link } from "react-router-dom";

const Product = ({ groData,  preference }) => {
  const { product_name, brands, image_front_small_url, quantity } = groData;

  return (
    <Link
      to={`/product/${groData.code}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div className="product relative flex flex-col rounded-[10px] m-4 overflow-hidden w-74.5 h-78 bg-white border-2 border-transparent hover:border-blue-300 transition-all duration-300 cursor-pointer">
        <div className="text-xs py-1 rounded-t-[10px]  text-center w-full rounded-xs text-white bg-green-500">Preference Match:{preference}%</div>
        <div>

          <img
            className="w-50 h-50 p-3 mt-7  flex justify-center items-center object-contain"
            src={image_front_small_url}
            alt=""
          />
        </div>
        <div className="flex items-center">
          <span>{product_name} -</span>
          <span>{quantity}</span>
          <span>{brands}</span>
          
        </div>
      </div>
    </Link>
  );
};
const calculateScores = (groData) => {
  if (!groData) {
    return 0;
  }
  let score = 0;
  const {
    ecoscore_grade,
    nutriscore_grade,
    nutriments,
    ingredients_analysis_tags,
  } = groData;

  const sugarValue = nutriments?.sugars_100g;
  const proteinvalue = nutriments?.proteins_100g;

  if (ecoscore_grade === "a" || ecoscore_grade === "b") {
    score += 20;
  }
  if (nutriscore_grade === "a") {
    score += 30;
  }
  if (sugarValue != null && sugarValue <= 5) {
    score += 20;
  }
  if (proteinvalue != null && proteinvalue >= 10) {
    score += 20;
  }
  if (ingredients_analysis_tags?.includes("en:palm-oil-free")) {
    score += 10;
  }

  return score;
};

// Higher order component:
// input product card ==> card with preference percentage
export const withPreferenceLabel = (Product) => {
  return ({ groData }) => {
    const totalScores = calculateScores(groData);

    const MAX_SCORE = 100;
    const percentage = (totalScores / MAX_SCORE) * 100;
    return (
      <Product groData={groData} score={totalScores} preference={percentage} />
    );
  };
};

export default Product;
