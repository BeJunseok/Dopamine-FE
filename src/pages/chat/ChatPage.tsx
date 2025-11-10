import Footer from "@/components/chat/footer/Footer";
import Header from "@/components/chat/header/Header";
import MessageList from "@/components/chat/message/MessageList";
import ConfirmModal from "@/components/common/ConfirmModal";
import { mockItem, mockMessages } from "@/mock/chatInfo";
import { useUserStore } from "@/store/useUserStore";
import { Message } from "@/types/chat/Chat.type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [isSending, setSending] = useState(false);
  const [isModalOPen, setModalOpen] = useState(false);

  const userId = useUserStore(state => state.userId);

  const navigate = useNavigate();

  const handleMessageSubmit = (text: string) => {
    if (isSending) return;

    setSending(true);

    const tempMessage: Message = {
      id: Math.random(),
      senderId: userId,
      text: text,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    setMessages(prevMessages => [...prevMessages, tempMessage]);

    setSending(false);
  };

  const handelCompleteAution = () => {
    setModalOpen(false);

    navigate("/items");
  };

  return (
    <div className="flex flex-col h-full">
      <Header item={mockItem} />
      <MessageList messages={messages} />
      <Footer
        isBuyer={true}
        isSending={isSending}
        onSubmit={handleMessageSubmit}
        onComplete={() => setModalOpen(true)}
      />

      <ConfirmModal
        isOpen={isModalOPen}
        onClose={() => setModalOpen(false)}
        onConfirm={handelCompleteAution}
        title="거래 종료"
        confirmText="거래 완료 됐어요"
      >
        <p>
          거래가 무사히 성사되었나요?
          <br />
          상품을 받으신 후, 거래 완료를 눌러주세요
        </p>
      </ConfirmModal>
    </div>
  );
};

export default ChatPage;
