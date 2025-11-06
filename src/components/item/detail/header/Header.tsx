import { ChevronLeft } from "@/assets/svgs/common";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-[40px] flex items-center bg-white">
      <ChevronLeft
        className="pl-3 cursor-pointer w-10 h-10"
        onClick={handleBack}
      />
    </div>
  );
};

export default Header;
