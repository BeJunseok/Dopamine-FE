import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useItemModal = () => {
  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleConfirmChat = () => {
    setChatModalOpen(false);
    alert("채팅방으로 이동");
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
