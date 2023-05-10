import "./../../styled/Item.scss";

const ItemHeader = () => {
  return (
    <div main>
      <div className="product">
        <div className="main">
          <div className="itemImg"></div>
          <section className="explain">
            <div className="explain-1">샛별배송</div>
            <div className="explain-2">
              <div className="explain-2-1">
                <h1>[뚝심] 진한 갈비홍탕</h1>
                <button></button>
              </div>
              <h2>든든히 즐기는 얼큰 보양식</h2>
            </div>
            <h2>
              <span className="h2-1">10,900</span>
              <span className="h2-2">원</span>
            </h2>
            <div className="explain-3">
              <p>
                컬리카드 - 최대
                <strong>545원</strong>
              </p>
            </div>

            <div className="explain-4">
              <dl>
                <dt>배송</dt>
                <dd>
                  <p>샛별배송</p>
                  <p>23시 전 주문 시 내일 아침 7시 전 도착</p>
                </dd>
              </dl>
              <dl>
                <dt>판매자</dt>
                <dd>
                  <p>컬리</p>
                </dd>
              </dl>
              <dl>
                <dt>포장타입</dt>
                <dd>
                  <p>냉동 (종이포장)</p>
                </dd>
              </dl>
              <dl>
                <dt>판매단위</dt>
                <dd>
                  <p>1팩</p>
                </dd>
              </dl>
              <dl>
                <dt>중량/용량</dt>
                <dd>
                  <p>800g</p>
                </dd>
              </dl>
              <dl>
                <dt>원산지</dt>
                <dd>
                  <p>상품설명/상세정보 참조</p>
                </dd>
              </dl>
              <dl>
                <dt>알레르기 정보</dt>
                <dd>
                  <p>
                    - 쇠고기, 밀, 우유, 대두 함유 *
                    돼지고기,달걀,아황산류,조개류(굴,전복,홍합포함),닭고기,메밀,땅콩,복숭아,토마토,호두,오징어,잣,게,새우,고등어
                    와 같은 시설에서 제조
                  </p>
                </dd>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
