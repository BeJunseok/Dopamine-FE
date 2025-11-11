import Read from "@/assets/svgs/chat/read.svg?react";
import { useUserStore } from "@/store/useUserStore";
import { Message } from "@/types/chat/Chat.type";
import { formatTimeStamp } from "@/utils/dateUtils";

interface MessageItemProps {
  msg: Message;
}

const MessageItem = ({ msg }: MessageItemProps) => {
  const userId = useUserStore(state => state.userId);
  const isSender = msg.senderId === userId;

  if (isSender) {
    return (
      <div className="flex justify-end mb-5">
        <div className="flex flex-col items-end gap-2 ml-10">
          <div className="px-4 py-3 bg-mainpink text-white rounded-2xl rounded-br-md whitespace-pre-line">
            {msg.text}
          </div>

          <div className="flex items-center justify-center gap-1">
            <span className="text-reg12 text-bluegrey08">
              {formatTimeStamp(msg.createdAt)}
            </span>
            {msg.isRead && <Read className="w-3 h-3" />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-5">
      <div className="flex items-end gap-3">
        <img
          src={msg.image}
          className="w-8 h-8 bg-grey04 rounded-full object-cover"
        />

        <div className="flex flex-col gap-2 mr-10">
          <div className="px-4 py-3 bg-white text-bluegrey10 border border-bluegrey02 rounded-2xl rounded-bl-md whitespace-pre-line">
            {msg.text}
          </div>
          <div className="text-reg12 text-bluegrey08">
            {formatTimeStamp(msg.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
