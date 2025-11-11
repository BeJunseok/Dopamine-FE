// File: src/components/BidSheet.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Down, Up } from "@/assets/svgs/main";

type BidSheetProps = {
  open: boolean;
  title: string;
  basePrice: number; // 현재 최고가
  value: number; // 선택 가격
  onChange: (v: number) => void;
  onClose: () => void;
  onConfirm: () => void;
};

export default function BidSheet({
  open,
  title,
  basePrice,
  value,
  onChange,
  onClose,
  onConfirm,
}: BidSheetProps) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 컨테이너(카드) 내부만 덮는 딤 */}
          <motion.div
            className="absolute inset-0 z-40 bg-black/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* 인라인 전용 시트 */}
          <motion.div
            className="
              absolute bottom-4 left-1/2 z-50
              w-[360px] h-[220px]
              -translate-x-1/2
              rounded-2xl bg-white/25 backdrop-blur-xl
              shadow-[0_12px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/20
              p-4"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            // 뒤 카드로 포인터 이벤트 전파 방지
            onPointerDownCapture={e => e.stopPropagation()}
          >
            {/* 그랩 핸들 */}
            <div className="mx-auto mb-3 mt-[7px] h-[3px] w-[58px] rounded-[2.5px] bg-[#A4A4A4]" />

            {/* 제목 + 현재 최고가 */}
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <span className="text-xs text-white/90">
                현재 최고가 {basePrice.toLocaleString()}원
              </span>
            </div>

            {/* 가격 컨트롤 */}
            <div className="flex items-center justify-between gap-3">
              <button
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-gray-800"
                onClick={e => {
                  e.stopPropagation();
                  onChange(Math.max(0, value - 1000));
                }}
                aria-label="가격 1,000원 내리기"
              >
                <Down />
              </button>

              <div className="flex-1 rounded-[20px] bg-white/55 px-5 py-3 text-center text-lg font-semibold text-gray-900 ring-1 ring-white/40 backdrop-blur">
                {value.toLocaleString()}원
              </div>

              <button
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-gray-800"
                onClick={e => {
                  e.stopPropagation();
                  onChange(value + 1000);
                }}
                aria-label="가격 1,000원 올리기"
              >
                <Up />
              </button>
            </div>

            {/* 완료 버튼 */}
            <button
              className="mt-4 w-full rounded-[16px] bg-mainpink py-3 font-semibold text-white shadow-[0_8px_18px_rgba(255,0,92,0.35)] active:scale-[0.99]"
              onClick={e => {
                e.stopPropagation();
                onConfirm();
              }}
            >
              완료
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
