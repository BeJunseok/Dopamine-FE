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
