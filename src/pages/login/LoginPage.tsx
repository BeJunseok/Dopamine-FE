import { Kakao, Logo } from "@/assets/svgs/common";

const LoginPage = () => {
  const handleKakaoLogin = () => {
    alert("카카오 로그인 페이지 이동");
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-[40%] left-1/2 -translate-1/2 w-full flex flex-col items-center px-8">
        <Logo className="w-20 h-10 mb-5" />
        <h1 className="text-center text-semibold20 font-semibold text-darkgrey05 mb-14">
          간편하게 로그인하고
          <br />
          바로 서비스를 이용해보세요
        </h1>
        <button
          onClick={handleKakaoLogin}
          className="bg-kakao w-full rounded-md flex items-center justify-center gap-5 py-3 cursor-pointer"
        >
          <Kakao className="w-6 h-5" />
          <span className="text-med16 text-black">카카오계정으로 로그인</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
