import { useState } from 'react';
import Modal from 'react-modal';
import LoginForm from './forms/LoginForm'; 
import RegisterForm from './forms/RegisterForm'; 
import "./styles/Modal.css";

Modal.setAppElement('#root'); // Set the app root element for accessibility

export default function AuthModal({ isOpen, onRequestClose }) {
  const [isLoginTabActive, setLoginTabActive] = useState(true);

  const switchTab = () => {
    setLoginTabActive(!isLoginTabActive);
  };

  return (
    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login/Register Modal"
    >
      <div>
        <h2>{isLoginTabActive ? 'Login' : 'Register'}</h2>
        <button onClick={switchTab}>
          {isLoginTabActive ? 'Switch to Register' : 'Switch to Login'}
        </button>
      </div>
      {isLoginTabActive ? <LoginForm /> : <RegisterForm />}
    </Modal>
    </>
  );
}
