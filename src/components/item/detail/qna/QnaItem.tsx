import { QnaItemProps } from "@/types/item/detail/Qna.type";
import { formatTimeAgo } from "@/utils/dateUtils";
import clsx from "clsx";

const QnaItem = ({ qna, isSeller, onReply }: QnaItemProps) => {
  const hasAnswer = !!qna.answer;

  return (
    <div className="flex gap-5">
      <div
        className={clsx(
          "w-1 shrink-0",
          hasAnswer ? "bg-mainpink" : "bg-bluegrey02"
        )}
      />

      <div className="w-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img
                src={qna.image}
                alt={qna.name}
                className="w-8 h-8 object-cover bg-grey06"
              />
              <div>
                <div className="text-med14 text-darkgrey05">{qna.name}</div>
                <div className="text-reg12 text-darkgrey01">
                  {formatTimeAgo(qna.createdAt)}
                </div>
              </div>
            </div>

            {isSeller && !hasAnswer && (
              <button
                onClick={onReply}
                className="bg-lightpink text-mainpink text-reg12 rounded-md h-7 my-auto px-2 py-1 cursor-pointer"
              >
                답변 달기
              </button>
            )}
          </div>

          <p className="text-reg14 text-darkgrey03">{qna.text}</p>
        </div>

        {qna.answer && (
          <div className="bg-grey02 mt-2 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-mainpink text-med14">판매자</span>
              <span className="text-bluegrey08 text-reg12">
                {formatTimeAgo(qna.answer.createdAt)}
              </span>
            </div>
            <p className="text-darkgrey03 text-reg14">{qna.answer?.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QnaItem;
