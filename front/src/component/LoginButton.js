import React, { useState } from "react";
import {useRecoilState} from "recoil";
import {LoginState} from "../store/LoginState";

import SignIn from "./SignIn";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useRecoilState(LoginState);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const logoutHandler = () => {
    setLogin(false);
  }

  return (
    <>
      {login ? <Button variant="primary" onClick={logoutHandler}>로그아웃</Button> : <Button variant="primary" onClick={openModal}>로그인</Button> }
      <SignIn isOpen={isModalOpen} close={closeModal} />
    </>
  );
};

export default LoginButton;