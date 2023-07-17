import React, { useState } from "react";

import SignIn from "./SignIn";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button variant="secondary"  onClick={openModal}>로그인</Button>
      <SignIn isOpen={isModalOpen} close={closeModal} />
    </>
  );
};

export default LoginButton;