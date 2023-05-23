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
  const [selectedImage, setSelectedImage] = useState(null);
  const onSubmittt = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    const product = {
      name: name,
      price: price,
      detail: detail,
      img: selectedImage,
      // Assuming you have a detail state as well
    };
    dispatch(addProduct(product));
    setName("");
    setPrice(0);
    setDetail("");
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="productadd-wrapper">
      <form className="item" onSubmit={onSubmittt}>
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
        <div className="input-set">
          <input type="file" onChange={handleImageUpload} />
          {selectedImage && <img src={selectedImage} alt="Preview" />}
        </div>
        <br />
        <button className="submit" type="submit" onClick={() => navigate(-1)}>
          등록
        </button>
      </form>
    </div>
  );
}
export default Product;
