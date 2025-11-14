import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PointCardProps {
  amount: number;
}

const PointCard = ({ amount }: PointCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="mx-4 mt-5 rounded-xl bg-grey00">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-med18">포인트</p>
        <button
          onClick={() => navigate("/my/points/charge")}
          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex flex-col items-center py-5">
        <p className="font-med30 ">₩ {amount.toLocaleString()}</p>
        <p className="font-med14 text-darkgrey01 mb-5">사용 가능한 포인트</p>
      </div>
    </div>
  );
};

export default PointCard;
