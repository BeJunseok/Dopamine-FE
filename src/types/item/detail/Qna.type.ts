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
  replyingToId: number | null;
  onAskQuestion: () => void;
  onStartReply: (questionId: number) => void;
  onCancelReply: () => void;
  onReplySubmit: (questionId: number, answerText: string) => void;
}

export interface QnaItemProps {
  qna: QnaData;
  isSeller: boolean;
  isReplying: boolean;
  onStartReply: (questionId: number) => void;
  onCancelReply: () => void;
  onReplySubmit: (questionId: number, answerText: string) => void;
}
