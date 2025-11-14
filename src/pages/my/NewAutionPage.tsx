import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Goback } from "@/assets/svgs/search";
import Footer from "@/components/common/Footer";

import AuctionDropdown from "@/components/my/AuctionForm/AuctionDropdown";
import AuctionImageUploader from "@/components/my/AuctionForm/AuctionImageUploader";
import AuctionTimeSection from "@/components/my/AuctionForm/AuctionTimeSection";
import AuctionDeliverySection from "@/components/my/AuctionForm/AuctionDeliverySection";

import Check from "@/assets/svgs/item/bid/check.svg?react";

const categories = [
  "디지털 기기",
  "가구/인테리어",
  "유아동",
  "생활가전",
  "뷰티/미용",
  "스포츠",
  "취미/게임/음반",
  "가공식품",
  "도서",
  "티켓/교환권",
  "여성의류",
  "여성잡화",
  "남성패션/잡화",
  "식물",
];

const conditions = [
  "S급(새상품급)",
  "A급(미세 사용감)",
  "B급(사용감 있음)",
  "C급(생활감 많음)",
  "D급(수리/부품 필요)",
  "New(미개봉 새상품)",
];

const deliveryMethods = ["직거래", "택배"];
const durations = ["12시간", "24시간", "직접 입력"];

const NewAutionPage = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState<(File | null)[]>([null, null, null]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");

  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");

  const [duration, setDuration] = useState("12시간");

  const [hideBid, setHideBid] = useState(false);
  const [delivery, setDelivery] = useState("직거래");

  // alert 모달 상태
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const openAlert = (message: string, success: boolean) => {
    setAlertMessage(message);
    setIsSuccess(success);
    setAlertOpen(true);
  };

  const handleAlertConfirm = () => {
    setAlertOpen(false);
    if (isSuccess) {
      navigate("/my");
    }
  };

  const handleSubmit = () => {
    if (!title || !category || !condition || !year || !location) {
      openAlert("내용을 모두 입력해주세요.", false);
      return;
    }

    openAlert("새 경매 등록이 완료되었습니다.", true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 overflow-y-auto pb-20">
        {/* 헤더 */}
        <div className="flex items-center gap-2 mt-5 ml-5 mb-4">
          <Goback
            className="w-5 h-5 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="font-med18 ml-24 text-bluegrey10">새 경매 등록</h1>
        </div>

        {/* 본문 */}
        <div className="p-4">
          <div className="bg-white rounded-xl py-[16px] -mt-4">
            <AuctionImageUploader images={images} setImages={setImages} />

            <label className="block font-med16 text-bluegrey10 mb-2">
              물품명
            </label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="물품명을 입력하세요"
              className="w-full border font-reg16 border-bluegrey03 rounded-[8px] p-3 mb-4 outline-none"
            />

            <label className="block font-med16 text-bluegrey10 mb-2">
              설명 작성
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="기본 성능, 구성품 등 상세한 설명을 작성해주세요."
              maxLength={200}
              className="w-full border font-reg16 border-bluegrey03 rounded-[8px] p-3 mb-4 h-28 resize-none outline-none"
            />

            <AuctionDropdown
              label="카테고리"
              value={category}
              onChange={setCategory}
              options={categories}
            />

            <AuctionDropdown
              label="상태"
              value={condition}
              onChange={setCondition}
              options={conditions}
            />

            <div className="flex gap-3 mb-4">
              <div className="flex-1">
                <label className="block font-med16 text-bluegrey10 mb-2">
                  연식
                </label>
                <input
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  placeholder="예: 2023"
                  className="w-full border font-reg16 border-bluegrey03 rounded-[8px] p-3 outline-none"
                />
              </div>

              <div className="flex-1">
                <label className="block font-med16 text-bluegrey10 mb-2">
                  위치
                </label>
                <input
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="예: 서울시 강남구"
                  className="w-full border font-reg16 border-bluegrey03 rounded-[8px] p-3 outline-none"
                />
              </div>
            </div>

            <AuctionTimeSection
              duration={duration}
              onChangeDuration={setDuration}
              options={durations}
              hideBid={hideBid}
              onToggle={setHideBid}
            />

            <AuctionDeliverySection
              delivery={delivery}
              onChangeDelivery={setDelivery}
              options={deliveryMethods}
            />

            <button
              onClick={handleSubmit}
              className="w-[343px] bg-mainpink text-white py-3 rounded-[8px] font-med18 cursor-pointer transition"
            >
              경매 등록하기
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* 알림창 */}
      {alertOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[500]">
          <div className="bg-white w-[320px] rounded-xl p-6 text-center shadow-lg">
            <div className="flex justify-center mb-3">
              <Check className="w-10 h-10 text-mainpink" />
            </div>

            <p className="font-med16 text-darkgrey05 mb-4">{alertMessage}</p>

            <button
              onClick={handleAlertConfirm}
              className="w-full bg-mainpink text-white py-2 rounded-lg font-semibold cursor-pointer"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewAutionPage;
