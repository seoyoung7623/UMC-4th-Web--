import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import AdContainer from "../components/AdContainer";
import ItemContainer from "../components/ItemContainer";
import Footer from "../components/Footer";
import "./../styled/MainPage.scss";
import ItemList from "../components/item/ItemList";
import WeatherApi from "../components/WeatherApi";
// import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
function getToken() {
  return localStorage.getItem("jwtToken");
}

const MainPage = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = getToken();

    if (token) {
      setEmail("seoyoung7623@naver.com");
    }
  }, []);

  return (
    <div className="main">
      <TopHeader />
      <Header email={email} />
      <AdContainer />
      <ItemContainer />
      <ItemList />
      <br />
      <div className="adImg">
        <img src="https://product-image.kurly.com/banner/random-band/pc/img/bc2ee9ff-d327-4d41-afb8-de3aa236a74a.jpg" />
      </div>
      <WeatherApi />
      <Footer />
    </div>
  );
};

export default MainPage;
