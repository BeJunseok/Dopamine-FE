import { ChevronLeft } from "@/assets/svgs/common";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-[60px] flex items-center">
      <ChevronLeft className="pl-3 cursor-pointer" onClick={handleBack} />
    </div>
  );
};

export default Header;
