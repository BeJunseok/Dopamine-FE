import BidHistoryList from "@/components/item/detail/bidHistory/BidHistoryList";
import Header from "@/components/item/detail/header/Header";
import ItemCard from "@/components/item/detail/itemCard/ItemCard";
import ItemImage from "@/components/item/detail/itemImage/ItemImage";
import QnaList from "@/components/item/detail/qna/QnaList";
import { mockBids, mockImages, mockItems, mockQna } from "@/mock/itemDetail";

const handleAskQuestion = () => {
  return;
};

const handleReply = () => {
  return;
};

const ItemDetailPage = () => {
  return (
    <div className="bg-grey02">
      <Header />
      <ItemImage images={mockImages} />
      <ItemCard item={mockItems} userId={1} />
      <BidHistoryList
        state={mockItems.state}
        bids={mockBids}
        userId={1}
        totalBidCount={7}
      />
      <QnaList
        qnaList={mockQna}
        isSeller={false}
        onAskQuestion={handleAskQuestion}
        onReply={handleReply}
      />
    </div>
  );
};

export default ItemDetailPage;
