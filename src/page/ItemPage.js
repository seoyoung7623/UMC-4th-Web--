import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import ItemHeader from "../components/item/ItemHeader";

const ItemPage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="produst">
      <TopHeader />
      <Header />
      <ItemHeader />
      <Footer />
    </div>
  );
};

export default ItemPage;
