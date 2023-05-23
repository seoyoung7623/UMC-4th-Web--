import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import "./../../styled/Item.scss";

function ItemList() {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  return (
    <div className="itemList-wrapper">
      <div className="item-list">
        <div className="title">
          <h2>등록한 상품 확인</h2>
        </div>
        <div className="item-wrapper">
          {products.map((product) => (
            <div className="item" key={product.id}>
              <div className="img">
                <img src={product.img} alt="Preview" />
              </div>
              <div>
                <h2 onClick={(e) => navigate(`/item/${product.id}`)}>
                  {product.name}
                </h2>
              </div>
              <p>가격: {product.price} 원</p>
              <p>상품 설명: {product.detail}</p>
            </div>
          ))}
        </div>
        <br />
        <div>
          <button
            className="add-btn"
            onClick={() => {
              navigate("/item/edit");
            }}
          >
            상품 등록
          </button>
        </div>
      </div>
      {/* <styledMain /> */}
    </div>
  );
}

export default ItemList;
