import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Down, Up } from "@/assets/svgs/main";

type BidSheetProps = {
  open: boolean;
  value: number;
  onChange: (v: number) => void;
  onClose: () => void;
  onConfirm: () => void;
};

export default function BidSheet({
  open,
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
        <motion.div
          className="
            absolute bottom-2 left-1/2 z-50
            w-[360px] h-[220px]
            -translate-x-1/2 flex flex-col justify-between items-center
            p-4 ring-1 ring-white/10
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          "
          style={{
            borderRadius: "30px 30px 15px 15px",
            borderTop: "1px solid #A4A4A4",
            background:
              "linear-gradient(180deg, rgba(251, 250, 250, 0.25) 0%, rgba(255, 255, 255, 0.6) 100%)",
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          onPointerDownCapture={e => e.stopPropagation()}
        >
          {/* 그랩 핸들 */}
          <div className="mx-auto -mt-[7px] h-[3px] w-[60px] rounded-full bg-[#A4A4A4]" />

          {/* 가격 컨트롤 영역 */}
          <div className="flex items-center justify-between w-full px-4">
            {/* 내림 버튼 */}
            <button
              className="grid h-[54.504px] w-[54.504px] place-items-center rounded-full bg-[#FFCDDE] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
              onClick={e => {
                e.stopPropagation();
                onChange(Math.max(0, value - 1000));
              }}
            >
              <Down className="cursor-pointer" />
            </button>

            {/* 중앙 가격 표시 */}
            <div
              className="flex items-center justify-center gap-2 w-[162px] h-[49px] font-med18 text-white shadow-inner"
              style={{
                borderRadius: "27.776px",
                border: "2px solid var(--grey-grey15, #999)",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.35) 57.69%, rgba(255, 255, 255, 0.49) 100%)",
              }}
            >
              <span className="text-white text-[12px]">₩</span>
              <span>{value.toLocaleString()}</span>
            </div>

            {/* 올림 버튼 */}
            <button
              className="grid h-[54.504px] w-[54.504px] place-items-center rounded-full bg-[#FFCDDE] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
              onClick={e => {
                e.stopPropagation();
                onChange(value + 1000);
              }}
            >
              <Up className="cursor-pointer" />
            </button>
          </div>

          {/* 완료 버튼 */}
          <button
            className="mt-5 w-[244px] h-[47px] rounded-[25.68px] bg-mainpink cursor-pointer font-med16 text-white shadow-[0_8px_18px_rgba(255,4,88,0.35)] active:scale-[0.99]"
            onClick={e => {
              e.stopPropagation();
              onConfirm();
            }}
          >
            완료
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
