import Header from "@/components/item/bid/header/Header";
import WonBid from "@/components/item/bid/won/WonBid";
import type { WonItems } from "@/types/item/bid/Bid.type";

const mockWonItems: WonItems = {
  autions: [
    {
      autionId: 1,
      title: "빈티지 레더 자켓",
      wonPrice: 89000,
      state: "낙찰 완료",
      roomId: 1,
    },
    {
      autionId: 2,
      title: "빈티지 카메라",
      wonPrice: 150000,
      state: "낙찰 완료",
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
