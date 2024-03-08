import Product from "../Product";

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
