import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useItemModal = (roomId: number) => {
  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleConfirmChat = () => {
    setChatModalOpen(false);

    navigate(`/chat/${roomId}`);
  };

  const handleConfirmReject = () => {
    setRejectModalOpen(false);
    navigate("/");
  };

  return {
    isChatModalOpen,
    setChatModalOpen,
    isRejectModalOpen,
    setRejectModalOpen,
    handleConfirmChat,
    handleConfirmReject,
  };
};
