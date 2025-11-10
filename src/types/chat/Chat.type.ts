export interface ItemInfo {
  opponentName: string;
  image: string;
  title: string;
  statusText?: string;
  bidStatus?: string;
  paymentStatus?: string;
}

export interface Message {
  id: number;
  senderId: number | null;
  image?: string;
  text: string;
  createdAt: string;
  isRead: boolean;
}
