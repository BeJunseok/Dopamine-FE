import BidHistoryList from "@/components/item/detail/bidHistory/BidHistoryList";
import Footer from "@/components/item/detail/footer/Footer";
import Header from "@/components/item/detail/header/Header";
import ItemCard from "@/components/item/detail/itemCard/ItemCard";
import ItemImage from "@/components/item/detail/itemImage/ItemImage";
import ConfirmModal from "@/components/item/detail/modal/ConfirmModal";
import QnaList from "@/components/item/detail/qna/QnaList";
import { useItemState } from "@/hooks/useItemState";
import { mockBids, mockImages, mockItems, mockQna } from "@/mock/itemDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const handleAskQuestion = () => {
  return;
};

const handleReply = () => {
  return;
};

const handleBidClick = () => {
  alert("입찰하기");
};

const ItemDetailPage = () => {
  const item = mockItems;
  const userId = 1;
  const { isLive, isEnded, viewState, depositAmount, hasBid, isSeller } =
    useItemState({ item, userId });

  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleConfirmChat = () => {
    setChatModalOpen(false);
    alert("채팅방으로 이동");
  };

  const handleConfirmReject = () => {
    setRejectModalOpen(false);
    navigate("/");
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
        qnaList={mockQna}
        isSeller={isSeller}
        onAskQuestion={handleAskQuestion}
        onReply={handleReply}
      />
      <Footer
        viewState={viewState}
        isSeller={isSeller}
        onBidClick={handleBidClick}
        onChatClick={() => setChatModalOpen(true)}
        onRejectBuyClick={() => setRejectModalOpen(true)}
      />

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
