export interface WonItemData {
  autionId: number;
  title: string;
  image: string;
  wonPrice: number;
  state: "ENDED";
  roomId: number;
}

export interface WonItems {
  autions: WonItemData[];
}

export interface BiddingItemData {
  autionId: number;
  title: string;
  image: string;
  bidPrice: number;
  state: "RUNNING" | "ENDED";
  endsAt: string;
}

export interface BiddingItems {
  autions: BiddingItemData[];
}
