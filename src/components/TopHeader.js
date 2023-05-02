import { useState } from "react";
import "./../styled/Header.scss";

const TopHeader = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  function handleRemoveClick() {
    setIsRemoved(true);
  }

  if (isRemoved) {
    return null; // return null to remove the component from the DOM
  }

  return (
    <section className="Top-header">
      <div className="header-text">
        <a>지금 가입하고 인기상품 100원에 받아가세요!</a>
        <span className="button">
          <button onClick={handleRemoveClick}>x</button>
        </span>
      </div>
    </section>
  );
};

export default TopHeader;
