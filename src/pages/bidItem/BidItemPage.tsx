import Bidding from "@/components/item/bid/bidding/Bidding";
import Header from "@/components/item/bid/header/Header";
import WonBid from "@/components/item/bid/won/WonBid";
import type { BiddingItems, WonItems } from "@/types/item/bid/Bid.type";

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

const mockBiddingItems: BiddingItems = {
  autions: [
    {
      autionId: 1,
      title: "인세스 홀더",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      bidPrice: 8500,
      state: "RUNNING",
      endsAt: "2025-11-08T15:25:00Z",
    },
    {
      autionId: 2,
      title: "인세스 홀더",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      bidPrice: 8500,
      state: "RUNNING",
      endsAt: "2025-11-10T15:25:00Z",
    },
    {
      autionId: 3,
      title: "인세스 홀더",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      bidPrice: 8500,
      state: "ENDED",
      endsAt: "2025-11-05T15:25:00Z",
    },
    {
      autionId: 4,
      title: "인세스 홀더",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      bidPrice: 8500,
      state: "ENDED",
      endsAt: "2025-11-05T15:25:00Z",
    },
    {
      autionId: 5,
      title: "인세스 홀더",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
      bidPrice: 8500,
      state: "RUNNING",
      endsAt: "2025-11-11T15:25:00Z",
    },
  ],
};

const BidItemPage = () => {
  return (
    <div className="bg-grey02">
      <Header />
      <WonBid wonItems={mockWonItems} />
      <Bidding biddingItems={mockBiddingItems} />
    </div>
  );
};

export default BidItemPage;
