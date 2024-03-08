import { useContext } from "react";
import ShoppingCartContext from "../../context/shoppingCart";

const Cart = ({ cart }) => {
  const { items } = useContext(ShoppingCartContext);
  return (
    <>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default Cart;
