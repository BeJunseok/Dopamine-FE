export interface QnaData {
  id: number;
  name: string;
  image: string;
  text: string;
  createdAt: string;
  answer: {
    text: string;
    createdAt: string;
  } | null;
}

export interface QnaListProps {
  qnaList: QnaData[];
  isSeller: boolean;
  onAskQuestion: () => void;
  onReply: (questionId: number) => void;
}

export interface QnaItemProps {
  qna: QnaData;
  isSeller: boolean;
  onReply: () => void;
}
