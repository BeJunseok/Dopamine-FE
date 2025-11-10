import MessageItem from "@/components/chat/message/MessageItem";
import { Message } from "@/types/chat/Chat.type";
import { useEffect, useRef } from "react";

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map(msg => (
        <MessageItem key={msg.id} msg={msg} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessageList;
