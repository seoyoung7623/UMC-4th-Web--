import KakaoLogin from "react-kakao-login";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import "./../styled/LoginPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const kakaoClientId = "565cade2d31f33e2aac2602ffb8eaa10";
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const idToken = data.response.id_token; // 인가코드 백엔드로 전달
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    issueToken();
  };

  const issueToken = () => {
    const { email, password } = user;

    if (email === "seoyoung7623@naver.com" && password === "TEST1234!") {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlb3lvdW5nNzYyM0BuYXZlci5jb20iLCJwYXNzd29yZCI6IlRFU1QxMjM0ISJ9.icBvvDa2mU1JFLVIX1HdFPORT8w8Pv8fIh2QvfhEA5k";
      localStorage.setItem("jwtToken", token);
      alert("로그인이 완료되었습니다.");
      navigate(-1);
    } else {
      alert("이메일이나 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="main">
      <TopHeader />
      <Header />
      <div className="login-">
        <div className="login-name">로그인</div>
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <div className="id-wrapper">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="아이디를 입력해주세요"
                ></input>
              </div>
              <div className="pwd-wrapper">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호를 입력해주세요"
                ></input>
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
              <div className="kakao-login">
                <KakaoLogin
                  token={kakaoClientId}
                  onSuccess={kakaoOnSuccess}
                  onFail={kakaoOnFailure}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
