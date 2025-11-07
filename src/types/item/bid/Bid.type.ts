export interface WonItemData {
  autionId: number;
  title: string;
  wonPrice: number;
  state: "낙찰 완료";
  roomId: number;
}

export interface WonItems {
  autions: WonItemData[];
}
