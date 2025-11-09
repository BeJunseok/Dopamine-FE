import { Bid } from "@/assets/svgs/common";
import BiddingItem from "@/components/item/bid/bidding/BiddingItem";
import ToggleSwitch from "@/components/item/bid/bidding/ToggleSwitch";
import { BiddingItems } from "@/types/item/bid/Bid.type";
import { useState } from "react";

interface BiddingProps {
  biddingItems: BiddingItems;
}

const Bidding = ({ biddingItems }: BiddingProps) => {
  const [showAuctioningOnly, setShowAuctioningOnly] = useState(false);

  const filteredItems = showAuctioningOnly
    ? biddingItems.autions.filter(item => item.state === "RUNNING")
    : biddingItems.autions;

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center justify-center gap-2">
          <Bid className="w-5 h-5 text-mainpink" />
          <span className="text-med18 text-darkgrey05">입찰한 물품</span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-reg14 text-darkgrey01">경매중</span>
          <ToggleSwitch
            checked={showAuctioningOnly}
            onChange={setShowAuctioningOnly}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filteredItems.map(item => (
          <BiddingItem key={item.autionId} biddingItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Bidding;
