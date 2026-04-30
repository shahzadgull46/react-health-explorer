


const Product = ({ groData }) => {
  const {thumbnail,title,price,rating,stock} =groData
  return (
    <div className="product">
      <img
        className="product-img"
        src={thumbnail}
        alt={title}
      />
      <h4>{title}</h4>
      <h4>Price: ${price}</h4>
      <h4>Rating: {rating}</h4>
      <h4>({stock}) In Stock</h4>
      <button className="buttons">Add to cart</button>
    </div>
  );
};
export default Product;