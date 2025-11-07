import Header from "@/components/item/bid/header/Header";
import WonBid from "@/components/item/bid/won/WonBid";
import type { WonItems } from "@/types/item/bid/Bid.type";

const mockWonItems: WonItems = {
  autions: [
    {
      autionId: 1,
      title: "빈티지 레더 자켓",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      wonPrice: 89000,
      state: "ENDED",
      roomId: 1,
    },
    {
      autionId: 2,
      title: "빈티지 카메라",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      wonPrice: 150000,
      state: "ENDED",
      roomId: 2,
    },
  ],
};

const BidItemPage = () => {
  return (
    <div className="bg-grey02">
      <Header />
      <WonBid wonItems={mockWonItems} />
    </div>
  );
};

export default BidItemPage;
