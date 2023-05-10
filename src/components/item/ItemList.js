import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ItemList() {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>등록한 상품 확인</h2>
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <h2 onClick={(e) => navigate(`/item`)}>{product.name}</h2>
            </div>
            <p>{product.price}</p>
            <p>{product.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
