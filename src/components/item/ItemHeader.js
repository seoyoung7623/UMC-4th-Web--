import "./../../styled/Item.scss";

const ItemHeader = () => {
  return (
    <div className="product">
      <div className="main">
        <div className="itemImg"></div>
        <section className="explain">
          <div>샛별배송</div>
          <div>
            <div>
              <h1></h1>
              <button></button>
            </div>
          </div>
          <h2>
            <span>10,900</span>
            <span>원</span>
          </h2>
          <div>
            <a>
              <div>
                <p>
                  컬리카드 - 최대
                  <strong>545원</strong>
                </p>
                <svg></svg>
              </div>
            </a>
          </div>

          <div>
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

      {/* <main id="product-atf" class="css-1eoy87d e17iylht4"><div class="css-1hd24w7 e17iylht3"></div>
      <section class="css-1ua1wyk e17iylht2"><div class="css-12lw2qc ezpe9l14">샛별배송</div>
      <div class="css-1fttcpj ezpe9l13">
        <div class="css-1bhm8h2 ezpe9l12">
            <h1 class="css-1f2zq3n ezpe9l11">[뚝심] 진한 갈비홍탕</h1><button class=" css-gplgk2 eaxuegm1"></button></div>
            <h2 class="css-47pv1l ezpe9l10">든든히 즐기는 얼큰 보양식</h2></div>
            <h2 class="css-liviaq e1q8tigr5"><span class="css-9pf1ze e1q8tigr3">10,900</span>
            <span class="css-1x9cx9j e1q8tigr2">원</span></h2>
            <div class="css-toq1xn e1hhkg2t2">로그인 후, <!-- -->적립 혜택<!-- -->이 제공됩니다.</div>
            <div><a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2023/0403/plcc"><div class="css-362vkr e1hhkg2t1"><p class="css-1pf406l e1hhkg2t0">컬리카드 - 최대 <strong>545원</strong> 적립 + 첫 결제 3만원 할인</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><path id="gfk9q0rhta" d="M1.657 1.657L9.657 1.657 9.657 9.657"></path></defs><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"><use stroke="#5f0080" stroke-linecap="round" stroke-width="1.2" stroke-linejoin="round" transform="rotate(45 5.657 5.657)" xlink:href="#gfk9q0rhta"></use></g></g></g></g></g></svg></div></a></div><div class="css-iqoq9n e6qx2kx2"><dl class="css-e6zlnr epzddad2"><dt class="css-lytdfk epzddad1">배송</dt><dd class="css-1k8t52o epzddad0"><p class="css-c02hqi e6qx2kx1">샛별배송</p><p class="css-uy94b2 e6qx2kx0">23시 전 주문 시 내일 아침 7시 전 도착
(대구·부산·울산 샛별배송 운영시간 별도 확인)
</p></dd></dl>
<dl class="css-e6zlnr epzddad2">
    <dt class="css-lytdfk epzddad1">판매자</dt>
    <dd class="css-1k8t52o epzddad0"><p class="css-c02hqi e6qx2kx1">컬리</p></dd></dl><dl class="css-e6zlnr epzddad2"><dt class="css-lytdfk epzddad1">포장타입</dt>
    <dd class="css-1k8t52o epzddad0"><p class="css-c02hqi e6qx2kx1">냉동 (종이포장)</p><p class="css-uy94b2 e6qx2kx0">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p></dd></dl><dl class="css-e6zlnr epzddad2"><dt class="css-lytdfk epzddad1">판매단위</dt><dd class="css-1k8t52o epzddad0"><p class="css-c02hqi e6qx2kx1">1팩</p></dd></dl><dl class="css-e6zlnr epzddad2"><dt class="css-lytdfk epzddad1">중량/용량</dt><dd class="css-1k8t52o epzddad0">
        <p class="css-c02hqi e6qx2kx1">800g</p></dd></dl><dl class="css-e6zlnr epzddad2"><dt class="css-7ypij epzddad1">원산지</dt><dd class="css-1k8t52o epzddad0"><p class="css-y1eoge e6qx2kx1">상품설명/상세정보 참조</p></dd></dl><dl class="css-e6zlnr epzddad2"><dt class="css-lytdfk epzddad1">알레르기정보</dt><dd class="css-1k8t52o epzddad0"><p class="css-c02hqi e6qx2kx1">- 쇠고기, 밀, 우유, 대두 함유
* 돼지고기,달걀,아황산류,조개류(굴,전복,홍합포함),닭고기,메밀,땅콩,복숭아,토마토,호두,오징어,잣,게,새우,고등어 와 같은 시설에서 제조</p></dd></dl></div><div class="css-1bp09d0 e17iylht1"><div class="css-2lvxh7 e1qy0s5w0"><dl class="css-e6zlnr epzddad2"><dt class="css-lytdfk epzddad1">상품선택</dt><dd class="css-1k8t52o epzddad0"><div class="cart-option-item css-1cb5lnc e1bjklo17"><div class="css-1qdyvok e1bjklo15"><span class="css-100vshh e1bjklo13">[뚝심] 진한 갈비홍탕</span></div><div class="css-1liqj4s e1bjklo14"><div class="css-16dy8wz e1cqr3m40"><button type="button" aria-label="수량내리기" disabled="" class="css-1e90glc e1hx75jb0"></button><div class="count css-6m57y0 e1cqr3m41">1</div><button type="button" aria-label="수량올리기" class="css-18y6jr4 e1hx75jb0"></button></div><div><span class="css-1foiu5e e1bjklo10">10,900원</span></div></div></div></dd></dl></div><div class="css-9y0nwt e17iylht0"><div class="css-ixlb9s eebc7rx8"><div class="css-yhijln eebc7rx7"><span class="css-w1is7v eebc7rx6">총 상품금액 :</span><span class="css-x4cdgl eebc7rx5">10,900</span><span class="css-1jb8hmu eebc7rx4">원</span></div><div class="css-1iis94s eebc7rx3"><span class="css-12p95ok eebc7rx2">적립</span><span class="css-10e9px3 eebc7rx1">로그인 후, 적립 혜택 제공</span></div></div></div><div class="css-gnxbjx e10vtr1i2"><button class="css-3z91zj e4nu7ef3" type="button" width="56" height="56" radius="3"><span class="css-ymwvow e4nu7ef1"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" alt="" class="css-0"></span></button><button class="css-3z91zj e4nu7ef3" type="button" disabled="" width="56" height="56" radius="3"><span class="css-ymwvow e4nu7ef1"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="" class="css-0"></span></button><div class="css-14jnwd7 e10vtr1i0"><button class="cart-button css-1qirdbn e4nu7ef3" type="button" radius="3"><span class="css-ymwvow e4nu7ef1">장바구니 담기
</span>
</button>
</div></div>
</div></section></main> */}
    </div>
  );
};

export default ItemHeader;
