import { useUserStore } from "@/store/useUserStore";
import type { ItemData } from "@/types/item/detail/ItemCard.type";
import { ViewState } from "@/types/item/detail/ItemCard.type";

interface UseItemStateProps {
  item: ItemData;
}

export interface ItemState {
  isLive: boolean;
  isEnded: boolean;
  viewState: ViewState;
  depositAmount: number;
  hasBid: boolean;
  isSeller: boolean;
}

export const useItemState = ({ item }: UseItemStateProps): ItemState => {
  const userId = useUserStore(state => state.userId);

  const isSeller = item.seller.id === userId;
  const hasBid = item.myPrice !== null && item.myPrice > 0;
  const isWinner = item.winnerId === userId;
  const isLive = item.state === "RUNNING";
  const isEnded = item.state === "ENDED";

  /**
   * LIVE : 입찰 안 함(경매중)
   * LIVE_BIDDING : 입찰함(경매중)
   * WON : 낙찰됨
   * LOST : 낙찰 실패
   * ENDED : 경매 종료
   */
  const viewState: ViewState = (() => {
    if (isLive) {
      return hasBid && !isSeller ? "LIVE_BIDDING" : "LIVE";
    }
    if (isEnded) {
      if (isWinner || (isSeller && item.winnerId !== null)) return "WON";
      if (!isWinner && hasBid) return "LOST";
    }
    return "ENDED";
  })();

  // 보증금
  const depositAmount = item.myPrice ? item.myPrice / 10 : 0;

  return {
    isLive,
    isEnded,
    viewState,
    depositAmount,
    hasBid,
    isSeller,
  };
};
