import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import "./../styled/LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="main">
      <TopHeader />
      <Header />
      <div className="login-">
        <div className="login-name">로그인</div>
        <div className="login-wrapper">
          <form>
            <div className="login-input">
              <div className="id-wrapper">
                <input placeholder="아이디를 입력해주세요"></input>
              </div>
              <div className="pwd-wrapper">
                <input placeholder="비밀번호를 입력해주세요"></input>
              </div>
            </div>
            <div className="login-search">
              <a>아이디 찾기</a>
              <span></span>
              <a>비밀번호 찾기</a>
            </div>
            <div className="login-submit">
              <button className="submit">
                <span>로그인</span>
              </button>
              <button className="join">
                <span>회원가입</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
