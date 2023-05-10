import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import AdContainer from "../components/AdContainer";
import ItemContainer from "../components/ItemContainer";
import Footer from "../components/Footer";
import "./../styled/MainPage.scss";
import ItemList from "../components/item/ItemList";

const MainPage = () => {
  return (
    <div className="main">
      <TopHeader />
      <Header />
      <AdContainer />
      <ItemContainer />
      <ItemList />
      <div className="adImg">
        <img src="https://product-image.kurly.com/banner/random-band/pc/img/bc2ee9ff-d327-4d41-afb8-de3aa236a74a.jpg" />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
