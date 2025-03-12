import React, {FC, useState} from "react";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  Id: string | null;
  currentStatus: string; // Truyền trạng thái hiện tại của order
}

