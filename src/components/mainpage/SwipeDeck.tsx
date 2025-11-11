import SwipeCard from "@/components/mainpage/SwipeCard";
import { useMemo, useState } from "react";
import type { MainPageProduct } from "@/types/item/bid/Bid.type";
import ProductCard from "./ProductCard";
import BidSheet from "./BidSheet";
import { useBid } from "@/hooks/useSwipeBid";

interface Props {
  items: MainPageProduct[];
  onChange?: (current: MainPageProduct | undefined) => void;
}

export default function SwipeDeck({ items, onChange }: Props) {
  // 로컬로 덱 복제
  const [deck, setDeck] = useState<MainPageProduct[]>(items);
  const [index, setIndex] = useState(0);

  const current = deck[index];
  const hasNext = index < deck.length - 1;

  // 시트 제어
  const [sheetOpen, setSheetOpen] = useState(false);
  const { price, setPrice } = useBid(
    current ? (current.bidPrice ?? current.highestBid) : 0
  );

  const openSheet = () => {
    if (!current) return;
    setPrice(current.bidPrice ?? current.highestBid);
    setSheetOpen(true);
  };

  const closeSheet = () => setSheetOpen(false);

  const confirmBid = () => {
    if (!current) return;
    const updated = deck.map((p, i) =>
      i === index ? { ...p, bidPlaced: true, bidPrice: price } : p
    );
    setDeck(updated);
    setSheetOpen(false);
  };

  const defer = () => {
    if (!current) return;
    setDeck(prev => {
      const next = [...prev];
      const [item] = next.splice(index, 1);
      next.push(item);
      return next;
    });
  };

  const onSwiped = (dir: string) => {
    if (dir === "left" && hasNext) {
      const nextIdx = Math.min(index + 1, deck.length - 1);
      setIndex(nextIdx);
      onChange?.(deck[nextIdx]);
    }
  };

  // 겹침 효과용 상위 3장
  const visible = useMemo(() => deck.slice(index, index + 3), [deck, index]);

  return (
    <div className="relative mx-auto h-[640px] w-[360px]">
      {visible.map((product, i) => {
        const z = visible.length - i; // 맨 위가 가장 큰 z
        const depth = i; // 0,1,2
        const scale = 1 - depth * 0.03;
        const translateY = depth * 10;
        const translateX = depth * 4;

        return (
          <div
            key={product.id}
            className="absolute inset-0"
            style={{
              zIndex: z,
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            }}
          >
            <SwipeCard
              onSwipe={onSwiped}
              preventSwipe={
                sheetOpen
                  ? ["left", "right", "up", "down"]
                  : ["right", "up", "down"]
              }
            >
              <ProductCard
                product={product}
                onOpenBid={openSheet}
                onDefer={defer}
              />
            </SwipeCard>
          </div>
        );
      })}

      {/* 바텀시트 */}
      {current && (
        <BidSheet
          open={sheetOpen}
          title={current.title}
          basePrice={current.highestBid}
          value={price}
          onChange={setPrice}
          onClose={closeSheet}
          onConfirm={confirmBid}
        />
      )}
    </div>
  );
}
