import "./../styled/Header.scss";

const TopHeader = () => {
  return (
    <section className="Top-header">
      <div className="header-text">
        <a>지금 가입하고 인기상품 100원에 받아가세요!</a>
        <span className="button">
          <button>x</button>
        </span>
      </div>
    </section>
  );
};

export default TopHeader;
