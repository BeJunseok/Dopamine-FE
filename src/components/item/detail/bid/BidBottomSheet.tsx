import { Bid } from "@/assets/svgs/common";
import { ChevronDown, ChevronUp } from "@/assets/svgs/item/detail";
import { formatPrice } from "@/utils/priceUtils";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface BidBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentHighestPrice: number;
  onBidSubmit: (amount: number) => void;
}

const BidBottomSheet = ({
  isOpen,
  onClose,
  currentHighestPrice,
  onBidSubmit,
}: BidBottomSheetProps) => {
  const minBidAmount = currentHighestPrice + 1000;
  const [bidAmount, setBidAmount] = useState(minBidAmount);

  useEffect(() => {
    if (isOpen) {
      setBidAmount(minBidAmount);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, currentHighestPrice]);

  const handleIncrease = () => {
    setBidAmount(prev => prev + 1000);
  };

  const handleDecrease = () => {
    setBidAmount(prev => Math.max(currentHighestPrice + 1000, prev - 1000));
  };

  const handleInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const numValue = parseInt(value) || 0;

    setBidAmount(numValue);
  };

  const handleSubmit = () => {
    if (bidAmount <= currentHighestPrice) {
      alert("현재 최고 입찰가보다 높은 금액을 입력해야 합니다.");
      setBidAmount(minBidAmount);
      return;
    }

    onBidSubmit(bidAmount);
    onClose();
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 flex justify-center items-end z-50 transition-opacity duration-500 ease-in-out",
        isOpen ? "bg-black/30 opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "w-full max-w-[375px] bg-white rounded-t-3xl p-4 shadow-lg transform transition-all duration-500 ease-in-out",
          isOpen ? "translate-0 opacity-100" : "translate-y-full opacity-0"
        )}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-darkgrey05 text-reg14 mb-3">
          현재 최고 입찰자 {formatPrice(currentHighestPrice)}
        </div>

        <div className="flex items-center justify-between gap-2 mb-4">
          <button
            onClick={handleDecrease}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-lightpink text-mainpink cursor-pointer"
            disabled={bidAmount <= minBidAmount}
          >
            <ChevronDown className="w-6 h-6" />
          </button>

          <div className="flex flex-1 justify-center items-center border-2 border-grey02 rounded-4xl">
            <input
              type="text"
              inputMode="numeric"
              value={formatPrice(bidAmount)}
              onChange={handleInputChnage}
              className="w-full h-14 bg-transparent border-none outline-none text-center text-med18 text-darkgrey05"
            />
          </div>

          <button
            onClick={handleIncrease}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-lightpink text-mainpink cursor-pointer"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full flex justify-center items-center gap-2 py-3 bg-mainpink text-white rounded-xl text-med16 cursor-pointer"
        >
          <Bid className="w-5 h-5" />
          입찰하기
        </button>
      </div>
    </div>
  );
};

export default BidBottomSheet;
