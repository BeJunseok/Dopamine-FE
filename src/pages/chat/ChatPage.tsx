import Header from "@/components/chat/header/Header";
import MessageList from "@/components/chat/message/MessageList";
import { mockItem, mockMessages } from "@/mock/chatInfo";

const ChatPage = () => {
  return (
    <>
      <Header item={mockItem} />
      <MessageList messages={mockMessages} myUserId={1} />
    </>
  );
};

export default ChatPage;
