import BidHistoryList from "@/components/item/detail/bidHistory/BidHistoryList";
import Footer from "@/components/item/detail/footer/Footer";
import Header from "@/components/item/detail/header/Header";
import ItemCard from "@/components/item/detail/itemCard/ItemCard";
import ItemImage from "@/components/item/detail/itemImage/ItemImage";
import ConfirmModal from "@/components/item/detail/modal/ConfirmModal";
import QnaInputBar from "@/components/item/detail/qna/QnaInputBar";
import QnaList from "@/components/item/detail/qna/QnaList";
import { useItemState } from "@/hooks/useItemState";
import { mockBids, mockImages, mockItems, mockQna } from "@/mock/itemDetail";
import { QnaData } from "@/types/item/detail/Qna.type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const handleBidClick = () => {
  alert("입찰하기");
};

const ItemDetailPage = () => {
  const item = mockItems;
  const userId = 1;
  const { isLive, isEnded, viewState, depositAmount, hasBid, isSeller } =
    useItemState({ item, userId });

  // 모달
  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const navigate = useNavigate();

  // Q&A 질문/답변
  const [qnaList, setQnaList] = useState<QnaData[]>(mockQna);
  const [isAsking, setIsAsking] = useState(false);
  const [replyingToId, setReplyingToId] = useState<number | null>(null);

  // 채팅하기
  const handleConfirmChat = () => {
    setChatModalOpen(false);
    alert("채팅방으로 이동");
  };

  // 구매 거부
  const handleConfirmReject = () => {
    setRejectModalOpen(false);
    navigate("/");
  };

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

  // 답변 취소 클릭시
  const handleCancelReply = () => {
    setReplyingToId(null);
  };

  // 새 질문 제출
  const handleQuestionSubmit = (questionText: string) => {
    // 암시 객체
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

  return (
    <div className="bg-grey02">
      <Header />
      <ItemImage images={mockImages} />
      <ItemCard
        item={item}
        isLive={isLive}
        isEnded={isEnded}
        viewState={viewState}
        depositAmount={depositAmount}
        hasBid={hasBid}
      />
      <BidHistoryList
        state={item.state}
        bids={mockBids}
        userId={userId}
        totalBidCount={7}
      />
      <QnaList
        qnaList={qnaList}
        isSeller={isSeller}
        replyingToId={replyingToId}
        onAskQuestion={handleAskQuestion}
        onStartReply={handleStartReply}
        onCancelReply={handleCancelReply}
        onReplySubmit={handleReplySubmit}
      />

      {/* 질문하기를 누르면 Footer X */}
      {isAsking ? (
        <QnaInputBar
          onSubmit={handleQuestionSubmit}
          onClose={() => setIsAsking(false)}
        />
      ) : (
        <Footer
          viewState={viewState}
          isSeller={isSeller}
          onBidClick={handleBidClick}
          onChatClick={() => setChatModalOpen(true)}
          onRejectBuyClick={() => setRejectModalOpen(true)}
        />
      )}

      {/* 채팅 모달 */}
      <ConfirmModal
        isOpen={isChatModalOpen}
        onClose={() => setChatModalOpen(false)}
        onConfirm={handleConfirmChat}
        title="채팅"
        confirmText="네, 채팅할래요."
      >
        <p>채팅하시겠습니까?</p>
      </ConfirmModal>

      {/* 구매 거부 모달 */}
      <ConfirmModal
        isOpen={isRejectModalOpen}
        onClose={() => setRejectModalOpen(false)}
        onConfirm={handleConfirmReject}
        title="구매 거부하시겠습니까?"
        confirmText="구매 거부 할래요"
      >
        <p>
          낙찰된 경매의 구매를 거부할 시,
          <br />
          최종 날찰가의 10%가 보증금으로 차감됩니다.
        </p>
      </ConfirmModal>
    </div>
  );
};

export default ItemDetailPage;
