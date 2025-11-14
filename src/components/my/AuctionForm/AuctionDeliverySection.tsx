import DeliverySelector from "./DeliverySelector";
import { Warning } from "@/assets/svgs/my";

interface Props {
  delivery: string;
  onChangeDelivery: (value: string) => void;
  options: string[];
}

const AuctionDeliverySection = ({
  delivery,
  onChangeDelivery,
  options,
}: Props) => {
  return (
    <div className="mb-6">
      {/* 배송방법 */}
      <label className="block font-med16 text-bluegrey10 mb-2">배송방법</label>

      <DeliverySelector
        value={delivery}
        onChange={onChangeDelivery}
        options={options}
      />

      {/* 주의사항 */}
      <div className="bg-[#FEFCE8] border border-[#FEF08A] text-[#854D0E] p-4 rounded-[8px] mt-6">
        {/* 제목 + 아이콘 */}
        <div className="flex items-center gap-2 mb-2">
          <Warning className="w-[13px] h-[13px]" />
          <span className="font-med14">주의사항</span>
        </div>

        {/* 본문 (들여쓰기 적용) */}
        <p className="font-reg14 leading-[20px] ml-5">
          등록한 정보는 수정이 제한됩니다.
          <br />
          위조품·허위 등록 시 계정이 제재됩니다.
        </p>
      </div>
    </div>
  );
};

export default AuctionDeliverySection;
