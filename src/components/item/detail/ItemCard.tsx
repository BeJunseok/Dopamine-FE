import ItemsDetailSection from "@/components/item/detail/ItemDetailSection";
import ItemHeader from "@/components/item/detail/ItemHeader";
import PriceBox from "@/components/item/detail/PriceBox";
import SellerInfo from "@/components/item/detail/SellerInfo";
import { useItemCardState } from "@/hooks/useItemCardState";
import type { ItemCardProps } from "@/types/item/detail/ItemCard.type";

const ItemCard = ({ item, userId }: ItemCardProps) => {
  const { item: itemDetails, seller } = item;

  const { isLive, isEnded, viewState, depositAmount, hasBid } =
    useItemCardState({ item, userId });

  return (
    <div className="bg-white py-4">
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
