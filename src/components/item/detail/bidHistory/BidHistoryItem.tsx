import TrophyIcon from "@/assets/svgs/item/detail/trophy.svg?react";
import { BidHistoryItemProps } from "@/types/item/detail/BidHistory.type";
import { formatTimeAgo } from "@/utils/dateUtils";
import { formatPrice } from "@/utils/priceUtils";
import clsx from "clsx";

const BidHistoryItem = ({
  bid,
  rank,
  isWinner,
  isCurrentTop,
  isMybid,
}: BidHistoryItemProps) => {
  const renderRank = () => {
    if (isWinner) {
      return (
        <div className="text-mainpink w-7 h-7 flex items-center justify-center flex-shrink-0 overflow-visible">
          <TrophyIcon className="w-7 h-6 -translate-x-1" />
        </div>
      );
    }

    if (isCurrentTop) {
      return (
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-mainpink text-white text-reg12 mr-2">
          1
        </div>
      );
    }

    return (
      <div
        className={clsx(
          "w-5 h-5 flex items-center justify-center rounded-full text-white text-reg12 mr-2",
          isMybid ? "bg-darkgrey05" : "bg-grey06"
        )}
      >
        {rank}
      </div>
    );
  };

  const renderNameInfo = () => (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <span className="text-reg14 text-darkgrey05">{bid.name}</span>
        {isMybid && (
          <span className="w-[5px] h-[5px] rounded-full bg-mainpink"></span>
        )}
      </div>

      <div className="text-reg12 text-darkgrey01">
        {isWinner && <span>최종 낙찰자</span>}
        {isCurrentTop && <span>현재 최고 입찰자</span>}
      </div>
    </div>
  );

  const renderPriceInfo = () => (
    <div className="ml-auto text-right">
      <div
        className={
          isWinner || isCurrentTop
            ? "text-mainpink text-bold16"
            : "text-darkgrey05 text-med16"
        }
      >
        {formatPrice(bid.bidPrice)}
      </div>

      <div className="text-darkgrey01 text-reg12">
        {formatTimeAgo(bid.bidAt)}
      </div>
    </div>
  );

  return (
    <div
      className={clsx(
        "flex items-center justify-center p-3 rounded-lg border",
        {
          "bg-lightpink border-mainpink": isWinner,
          "bg-grey00 border-grey04": !isWinner && isMybid,
          "bg-white border-grey04": !isWinner && !isMybid,
        }
      )}
    >
      {renderRank()}

      <img
        src={bid.image}
        alt={bid.name}
        className="w-10 h-10 rounded-full mr-3 bg-grey06"
      />

      {renderNameInfo()}
      {renderPriceInfo()}
    </div>
  );
};

export default BidHistoryItem;
