import Header from "@/components/item/detail/header/Header";
import ItemImage from "@/components/item/detail/image/ItemImage";
import ItemCard from "@/components/item/detail/itemCard/ItemCard";
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
