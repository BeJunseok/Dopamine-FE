import BidHistoryItem from "@/components/item/detail/bidHistory/BidHistoryItem";
import { BidHistoryListProps } from "@/types/item/detail/BidHistory.type";
import { useState } from "react";

const BidHistoryList = ({
  state,
  bids,
  totalBidCount,
}: BidHistoryListProps) => {
  const [showAll, setShowAll] = useState(false);

  const displayBids = showAll ? bids : bids.slice(0, 4);

  return (
    <div className="bg-white py-4 mb-2">
      <div className="mx-4">
        <h3 className="text-med18 text-darkgrey05 mb-4">입찰 히스트리</h3>

        <div className="flex flex-col gap-3">
          {displayBids.map((bid, index) => {
            const rank = index + 1;

            const isWinner = state === "ENDED" && rank === 1; // 경매 종료시 1등
            const isCurrentTop = state === "RUNNING" && rank === 1; // 경매 진행중 1등

            return (
              <BidHistoryItem
                key={index}
                bid={bid}
                rank={rank}
                isWinner={isWinner}
                isCurrentTop={isCurrentTop}
              />
            );
          })}
        </div>

        {!showAll && totalBidCount > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="w-full mt-4 py-2 text-center text-reg14 text-darkgrey02 cursor-pointer hover:bg-grey04 rounded-lg"
          >
            모든 입찰 보기 ({totalBidCount})
          </button>
        )}
      </div>
    </div>
  );
};

export default BidHistoryList;
