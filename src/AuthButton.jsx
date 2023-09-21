import { useState } from 'react';
import AuthModal from './Modal'; // Import the AuthModal component

export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <AuthModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}