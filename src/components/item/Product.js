import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../modules/products";
import { useNavigate } from "react-router-dom";
import "./../../styled/Item.scss";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const onSubmittt = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    const product = {
      name: name,
      price: price,
      detail: detail, // Assuming you have a detail state as well
    };
    dispatch(addProduct(product));
    setName("");
    setPrice(0);
    setDetail("");
  };

  return (
    <div className="productadd-wrapper">
      <form onSubmit={onSubmittt}>
        <div className="input-set">
          이름:{" "}
          <div className="input-wrapper">
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="input-set">
          가격:{" "}
          <div className="input-wrapper">
            {" "}
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="input-set">
          상세설명:{" "}
          <div className="input-wrapper-textarea">
            <textarea onChange={(e) => setDetail(e.target.value)}></textarea>
          </div>
        </div>
        <br />
        <button className="submit" type="submit">
          등록
        </button>
      </form>
    </div>
  );
}
export default Product;
