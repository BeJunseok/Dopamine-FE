import { ChevronLeft } from "@/assets/svgs/common";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative w-full h-12 flex items-center justify-center bg-white border-b border-bluegrey02">
      <button
        onClick={handleBack}
        className="absolute left-2 cursor-pointer w-8 h-8"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <h1 className="text-med16 text-bluegrey10">포인트 내역 조회</h1>
    </div>
  );
};

export default Header;
