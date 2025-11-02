import BidHistoryList from "@/components/item/detail/bidHistory/BidHistoryList";
import Footer from "@/components/item/detail/footer/Footer";
import Header from "@/components/item/detail/header/Header";
import ItemCard from "@/components/item/detail/itemCard/ItemCard";
import ItemImage from "@/components/item/detail/itemImage/ItemImage";
import QnaList from "@/components/item/detail/qna/QnaList";
import { useItemState } from "@/hooks/useItemState";
import { mockBids, mockImages, mockItems, mockQna } from "@/mock/itemDetail";

const handleAskQuestion = () => {
  return;
};

const handleReply = () => {
  return;
};

const handleBidClick = () => {
  alert("입찰하기");
};

const handleChatClick = () => {
  alert("채팅하기 클릭");
};

const handleRejectBuyClick = () => {
  alert("구매 거부 클릭");
};

const ItemDetailPage = () => {
  const item = mockItems;
  const userId = 1;
  const { isLive, isEnded, viewState, depositAmount, hasBid, isSeller } =
    useItemState({ item, userId });

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
        onChatClick={handleChatClick}
        onRejectBuyClick={handleRejectBuyClick}
      />
    </div>
  );
};

export default ItemDetailPage;
