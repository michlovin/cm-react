import "./App.css";
import { useState, useEffect } from "react";
import Cart from "./components/cart";
import Products from "./components/products";
import { Provider as ShoppingCartProvider } from "./context/shoppingCart";
//useContext is a helper function that all  ows us to use context in a functional component.
//passes around info with out drilling down into the component tree.
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  console.log(cart, "CART");
  console.log(products, "PRODUCTS");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Products products={products} />
        <hr />
        <Cart />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
