import { ItemInfo, Message } from "@/types/chat/Chat.type";

export const mockItem: ItemInfo = {
  opponentName: "도파민 마켓0356",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
  title: "빈티지 레더 자켓",
};

export const mockMessages: Message[] = [
  {
    id: 1,
    senderId: 1,
    text: "안녕하세요.",
    createdAt: "2025-11-05T15:25:00Z",
    isRead: true,
  },
  {
    id: 2,
    senderId: 2,
    text: "안녕하세요.\n반갑습니다.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKNgJcjoXotdEgGY7ZuKmUCacqJjoEh2Omg&s",
    createdAt: "2025-11-05T15:31:00Z",
    isRead: true,
  },
];
