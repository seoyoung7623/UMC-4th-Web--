import { useState } from "react";
// import { addProduct } from "../../modules/products";

function Product({ products, onCreate }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const onSubmittt = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    // addProduct({ name, price });
    const product = {
      name: name,
      price: price,
      detail: detail, // Assuming you have a detail state as well
    };
    onCreate(product);
    console.log(products);
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <form onSubmit={onSubmittt}>
        <div>
          이름: <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          가격:{" "}
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          상세설명:{" "}
          <textarea onChange={(e) => setDetail(e.target.value)}></textarea>
        </div>

        <button type="submit">등록</button>
      </form>
    </div>
  );
}
export default Product;
