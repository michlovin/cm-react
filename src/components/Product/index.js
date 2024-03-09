import { useContext } from "react";
import ShoppingCartContext from "../../context/shoppingCart";

const Product = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <>
      <button onClick={() => addToCart(product.title)}> add to cart </button>
      {product.title}
      {""}
    </>
  );
};
export default Product;
