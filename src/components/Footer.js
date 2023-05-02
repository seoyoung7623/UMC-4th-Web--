import "./../styled/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="main">
        <div className="main-Wrapper">
          <div>고객행복센터</div>
          <div className="bold">1644- 1107</div>
        </div>
      </div>
      <div className="bottom"></div>

      {/* <div id="footer">
      <div>
      <div >
      <h2>고객행복센터</h2>
      <strong class="css-9jqcug eam2qm57">1644-1107<span class="css-1uz1ro8 eam2qm58">월~토요일 오전 7시 - 오후 6시</span></strong>
      <div class="css-1fttcpj eam2qm56"><div class="css-ho1qnd eam2qm53">
      <button class="eam2qm54 css-hupzfj e19i509p0">카카오톡 문의</button>
      <div class="css-1lxmeik eam2qm52">월~토요일<svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-w0fx7a eam2qm50"><line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line></svg>오전 7시 - 오후 6시<br>일/공휴일<svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-w0fx7a eam2qm50"><line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line></svg>오전 7시 - 오후 1시</div></div><div class="css-ho1qnd eam2qm53"><button class="css-1pgo3vb eam2qm55">1:1 문의</button>
      <div class="css-1lxmeik eam2qm52">365일<br>고객센터 운영시간에 순차적으로 답변드리겠습니다.</div></div><div class="css-ho1qnd eam2qm53"><button class="css-1pgo3vb eam2qm55">대량주문 문의</button><div class="css-1lxmeik eam2qm52">월~금요일<svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-w0fx7a eam2qm50"><line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line></svg>오전 9시 - 오후 6시<br>점심시간<svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-w0fx7a eam2qm50"><line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line></svg>낮 12시 - 오후 1시</div></div></div><div class="css-vtjvf eam2qm51">비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a><br>비회원 대량주문 문의 : <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a></div></div><div class="css-1fttcpj ebj6vxr3"><ul class="css-17hse91 e13nap1l2"><li class="css-1tayzmu e13nap1l1"><a href="/introduce" target="_self" class="css-1tfhwyj e13nap1l0">컬리소개</a></li><li class="css-1tayzmu e13nap1l1"><a href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;enablejsapi=1" target="_self" class="css-1tfhwyj e13nap1l0">컬리소개영상</a></li><li class="css-1tayzmu e13nap1l1"><a href="https://ir.kurly.com" target="_blank" class="css-1tfhwyj e13nap1l0">투자정보</a></li>
      <li class="css-1tayzmu e13nap1l1"><a href="https://kurly.career.greetinghr.com" target="_blank" class="css-1tfhwyj e13nap1l0">인재채용</a></li><li class="css-1tayzmu e13nap1l1"><a href="/user-terms/agreement" target="_self" class="css-1tfhwyj e13nap1l0">이용약관</a></li><li class="css-1tayzmu e13nap1l1"><a href="/user-terms/privacy-policy" target="_self" class="css-1tfhwyj e13nap1l0">개인정보처리방침</a></li><li class="css-1tayzmu e13nap1l1"><a href="/user-guide" target="_self" class="css-1tfhwyj e13nap1l0">이용안내</a></li></ul><div class="css-bz7mfs ebj6vxr2">법인명 (상호) : 주식회사 컬리 <span class="css-1ekjygq ebj6vxr1"></span> 사업자등록번호 : 261-81-23567<a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no=" target="_blank" rel="noreferrer" class="css-1tby8gd ebj6vxr0">사업자정보 확인</a><br>통신판매업 : 제 2018-서울강남-01646 호 <span class="css-1ekjygq ebj6vxr1"></span> 개인정보보호책임자 : 이원준<br>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span class="css-1ekjygq ebj6vxr1"></span> 대표이사 : 김슬아<br>입점문의 :<a href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="css-1tby8gd ebj6vxr0">입점문의하기</a><span class="css-1ekjygq ebj6vxr1"></span>제휴문의 :<a href="mailto:business@kurlycorp.com" class="css-1tby8gd ebj6vxr0">business@kurlycorp.com</a><br>채용문의 :<a href="mailto:recruit@kurlycorp.com" class="css-1tby8gd ebj6vxr0">recruit@kurlycorp.com</a>
      <br>팩스: 070 - 7500 - 6098</div>
      <ul class="css-zjik7 ek68y4g1">
        <a href="https://instagram.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
          <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="컬리 인스타그램 바로가기"></a><a href="https://www.facebook.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0"><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="컬리 페이스북 바로가기"></a><a href="https://blog.naver.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0"><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="컬리 네이버블로그 바로가기"></a><a href="https://m.post.naver.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
            <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="컬리 네이버포스트 바로가기"></a>
            <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0"><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="컬리 유튜브 바로가기"></a></ul></div></div><div class="css-81eeg3 e1t23cq0"><button class="css-12t5wjq e57xuci2"><img src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="isms 로고" class="css-1262i6n e57xuci1"><p class="css-bft4sh e57xuci0">[인증범위] 컬리 쇼핑몰 서비스 개발·운영<br>(심사받지 않은 물리적 인프라 제외)<br>[유효기간] 2022.01.19 ~ 2025.01.18</p></button><button class="css-12t5wjq e57xuci2">
              <img src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="eprivacy plus 로고" class="css-1262i6n e57xuci1"><p class="css-bft4sh e57xuci0">개인정보보호 우수 웹사이트 ·<br>개인정보처리시스템 인증 (ePRIVACY PLUS)</p></button><button class="css-12t5wjq e57xuci2"><img src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="payments 로고" class="css-as7ifw e57xuci1"><p class="css-bft4sh e57xuci0">토스페이먼츠 구매안전(에스크로)<br>서비스를 이용하실 수 있습니다.</p></button><button class="css-12t5wjq e57xuci2"><img src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="우리은행 로고" class="css-1262i6n e57xuci1"><p class="css-bft4sh e57xuci0">고객님이 현금으로 결제한 금액에 대해 우리은행과
        <br>채무지급보증 계약을 체결하여 안전거래를 보장하고
        <br>있습니다.
      </p>
        </button>
        </div>
      </div>
 */}
    </div>
  );
};

export default Footer;
