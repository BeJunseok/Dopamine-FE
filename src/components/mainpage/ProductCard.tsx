import type { MainPageProduct } from "@/types/item/bid/Bid.type";
import { Flip, Edit, Bidding } from "@/assets/svgs/main";

type Props = {
  product: MainPageProduct;
  onOpenBid: () => void;
  onDefer: () => void;
};

export default function ProductCard({ product, onOpenBid, onDefer }: Props) {
  const Media = () => {
    if (product.imageUrl) {
      return (
        <img
          src={product.imageUrl}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      );
    }
    if (product.ImageIcon) {
      const Icon = product.ImageIcon;
      return (
        <div className="absolute inset-0">
          <Icon
            className="h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          />
        </div>
      );
    }
    return <div className="absolute inset-0 bg-gray-200" />;
  };

  return (
    <div
      className="
        relative h-[632px] w-full overflow-hidden
        rounded-[15px] border border-white
        shadow-[0_8px_10.9px_rgba(81, 73, 73, 0.29)]
        bg-transparent
      "
    >
      {/* 배경 이미지/아이콘 */}
      <Media />

      {/* 하단으로 갈수록 진해지는 그라데이션 */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_49.04%,#000_100%)]" />

      {/* 콘텐츠 */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        {/* 제목(좌) + 현재 최고 입찰가(우) */}
        <div className="flex items-end justify-between gap-3">
          <h3 className="text-[20px] font-extrabold leading-tight text-white">
            {product.title}
          </h3>
          <div className="shrink-0 text-[11px] text-grey04">
            <span>현재 최고 입찰가 </span>
            <span className="font-semibold">
              ₩ {product.highestBid.toLocaleString()}
            </span>
          </div>
        </div>

        {/* 버튼 줄 */}
        {!product.bidPlaced ? (
          <div className="mt-3 flex items-center gap-3">
            {/* 입찰 버튼: 가로 가득 + 중앙정렬 */}
            <button
              onClick={onOpenBid}
              className="
                w-[203px] h-[47px] ml-[72px]
                rounded-[25.68px] bg-mainpink
                text-white cursor-pointer
                flex items-center justify-center gap-2"
            >
              <Bidding className="h-[20px] w-[20px]" />
              <span>입찰</span>
            </button>

            {/* 보류 원형 버튼: 우측 고정 */}
            <button onClick={onDefer} title="보류" aria-label="보류">
              <Flip className="h-13 w-13 cursor-pointer" />
            </button>
          </div>
        ) : (
          <div className="mt-3 flex items-center gap-3">
            {/* 내가 입찰한 금액 뱃지 */}
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-[14px] bg-black/45 px-4 py-2 text-white backdrop-blur">
              <span className="text-pink-300">w</span>
              <span className="font-semibold truncate">
                {(product.bidPrice ?? 0).toLocaleString()}원
              </span>
            </div>

            {/* 편집 버튼 */}
            <button
              onClick={onOpenBid}
              className="grid h-12 w-12 place-items-center rounded-full"
              title="가격 수정"
              aria-label="가격 수정"
            >
              <Edit className="h-5 w-5" />
            </button>

            {/* 보류 버튼 */}
            <button
              onClick={onDefer}
              title="보류"
              aria-label="보류"
              className="
                grid h-12 w-12 place-items-center cursor-pointer"
            >
              <Flip className="h-5 w-5 cursor-pointer" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
