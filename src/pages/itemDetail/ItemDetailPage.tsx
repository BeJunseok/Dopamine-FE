import Header from "@/components/item/detail/Header";
import ItemCard from "@/components/item/detail/ItemCard";
import ItemImage from "@/components/item/detail/ItemImage";
import { images, items } from "@/mock/itemDetail";

const ItemDetailPage = () => {
  return (
    <div className="bg-grey02">
      <Header />
      <ItemImage images={images} />
      <ItemCard item={items} userId={1} />
    </div>
  );
};

export default ItemDetailPage;
