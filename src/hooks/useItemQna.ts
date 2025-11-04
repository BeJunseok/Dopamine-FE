import type { QnaData } from "@/types/item/detail/Qna.type";
import { useState } from "react";

export const useItemQna = (initialQna: QnaData[]) => {
  const [qnaList, setQnaList] = useState<QnaData[]>(initialQna);
  const [isAsking, setIsAsking] = useState(false);
  const [replyingToId, setReplyingToId] = useState<number | null>(null);

  // 질문하기
  const handleAskQuestion = () => {
    setIsAsking(true);
    setReplyingToId(null);
  };

  // 답변 달기
  const handleStartReply = (questionId: number) => {
    setReplyingToId(questionId);
    setIsAsking(false);
  };

  // 답변 취소 클릭
  const handleCancelReply = () => {
    setReplyingToId(null);
  };

  // 새 질문 제출
  const handleQuestionSubmit = (questionText: string) => {
    // 임시 객체
    const newQuestion: QnaData = {
      id: new Date().getTime(),
      name: "My",
      image: "",
      text: questionText,
      createdAt: new Date().toString(),
      answer: null,
    };
    setQnaList(prevList => [...prevList, newQuestion]);
    setIsAsking(false);
  };

  // 답변 제출
  const handleReplySubmit = (questionId: number, answerText: string) => {
    const newAnswer = {
      text: answerText,
      createdAt: new Date().toString(),
    };

    setQnaList(prevList =>
      prevList.map(qna =>
        qna.id === questionId ? { ...qna, answer: newAnswer } : qna
      )
    );

    setReplyingToId(null);
  };

  const cancelAsking = () => setIsAsking(false);

  return {
    qnaList,
    isAsking,
    replyingToId,
    setIsAsking,
    handleAskQuestion,
    handleStartReply,
    handleCancelReply,
    handleQuestionSubmit,
    handleReplySubmit,
    cancelAsking,
  };
};
