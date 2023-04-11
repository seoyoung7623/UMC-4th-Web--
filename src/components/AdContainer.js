import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./../styled/Header.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const AdContainer = () => {
  return (
    <div className="ADmain">
      <div className="swiper">
        <div className="swiper-wrapper">
          <Swiper
            className="banner"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <img
                alt="AD배너1"
                src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/0896b689-af45-4f50-a63e-92eaaa883b0c.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="AD배너2"
                src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/92e11927-f187-462c-849d-64367644a1a3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                alt="AD배너3"
                src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b0b32de3-1e08-454b-a7e6-fafd45dd86b5.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                alt="AD배너"
                src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a085e0e7-ad2c-47fa-8118-b555ddb5cadc.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                alt="AD배너"
                src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/20139e33-d871-4de9-a2e8-18a3024af36d.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
