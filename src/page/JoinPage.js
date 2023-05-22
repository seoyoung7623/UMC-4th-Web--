const SocialKakao = () => {
  const Rest_api_key = "1ea71e8f978adf34c568e0aacf2c7510"; //REST API KEY
  const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

function JoinPage() {
  return (
    <>
      <SocialKakao />
    </>
  );
}

export default JoinPage;
