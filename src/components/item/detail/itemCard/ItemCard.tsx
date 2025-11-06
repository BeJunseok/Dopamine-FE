import ItemsDetailSection from "@/components/item/detail/itemCard/ItemDetailSection";
import ItemHeader from "@/components/item/detail/itemCard/ItemHeader";
import PriceBox from "@/components/item/detail/itemCard/PriceBox";
import SellerInfo from "@/components/item/detail/itemCard/SellerInfo";
import type { ItemCardProps } from "@/types/item/detail/ItemCard.type";

const ItemCard = ({
  item,
  isLive,
  isEnded,
  viewState,
  depositAmount,
  hasBid,
}: ItemCardProps) => {
  const { item: itemDetails, seller } = item;

  return (
    <div className="bg-white py-4 mb-2">
      <div className="mx-4">
        <ItemHeader isLive={isLive} endsAt={item.endsAt} title={item.title} />
        <PriceBox
          viewState={viewState}
          isEnded={isEnded}
          currentPrice={item.currentPrice}
          bidCount={item.bidCount}
          myPrice={item.myPrice}
          hasBid={hasBid}
          depositAmount={depositAmount}
        />
        <ItemsDetailSection
          description={item.description}
          itemDetails={itemDetails}
        />
        <SellerInfo seller={seller} />
      </div>
    </div>
  );
};

export default ItemCard;
