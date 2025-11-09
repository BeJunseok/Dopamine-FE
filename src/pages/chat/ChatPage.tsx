import Header from "@/components/chat/header/Header";
import { mockItem } from "@/mock/chatInfo";

const ChatPage = () => {
  return (
    <>
      <Header item={mockItem} />
    </>
  );
};

export default ChatPage;
