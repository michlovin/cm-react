import { useContext } from "react";
import ShoppingCartContext from "../../context/shoppingCart";

const Product = ({ product }) => {
  const { addToCard } = useContext(ShoppingCartContext);
  return (
    <>
      <button onClick={() => addToCard(product.title)}> add to card </button>
      {product.title}
      {""}
    </>
  );
};
export default Product;
