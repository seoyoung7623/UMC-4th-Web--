import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../modules/products";
import Product from "../components/item/Product";

function ProductContainer() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const onCreate = (product) => dispatch(addProduct(product));

  return <Product products={products} onCreate={onCreate} />;
}

export default ProductContainer;
