import { useState } from "react";

export const useItemBid = (initialPrice: number) => {
  const [isBidSheetOpen, setBidSheetOpen] = useState(false);
  const [currentHighestPrice, setCurrentHighestPrice] = useState(initialPrice);

  const handleBidClick = () => {
    setBidSheetOpen(true);
  };

  const handleBidSubmit = (amount: number) => {
    alert(`🎉 ${amount}원으로 입찰 성공`);
    setCurrentHighestPrice(amount);
  };

  const closeBidSheet = () => setBidSheetOpen(false);

  return {
    isBidSheetOpen,
    setBidSheetOpen,
    currentHighestPrice,
    handleBidClick,
    handleBidSubmit,
    closeBidSheet,
  };
};
