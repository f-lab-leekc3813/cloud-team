import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";

const SignIn = ({ isOpen, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // const loginClickHandler = () => {
  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  return (
    <>
      {isOpen ? (
        <div className={classes.modal} onClick={close}>
          <div className={classes.loginModal}>
            <span className={classes.close} onClick={close}>
              ×
            </span>
            <div className={classes.modalContents} onClick={(e) => e.stopPropagation()}>
              <img className={classes.signinIcon} src="images/logo.png" alt="애플마켓 로그인" />
              <input
                name="email"
                className={classes.loginId}
                type="text"
                placeholder="id"
                onChange={loginHandler}
              />
              <input
                name="password"
                className={classes.loginPw}
                type="password"
                placeholder="password"
                onChange={loginHandler}
              />
              <div className={classes.loginMid}>
                <label className={classes.autoLogin} htmlFor="hint">
                  <input type="checkbox" id="hint" /> 로그인 유지하기
                </label>
                <div className={classes.autoLogin}>아이디/비밀번호 찾기</div>
              </div>
              <button className={classes.loginBtn} >
                로그인
              </button>
              <div className={classes.socialBox}>
                <div className={classes.kakao}>
                  <img className={classes.kakaoLogo} src="images/signUp/kakao.jpg" alt="Kakao Logo" />
                  <div className={classes.kakaoText}>카카오톡 계정으로 신규가입</div>
                </div>
                <div className={classes.google}>
                  <img className={classes.googleLogo} src="images/signUp/google.png" alt="Facebook Logo" />
                  <div className={classes.googleText}>구글 계정으로 신규가입</div>
                </div>
              </div>
              <div className={classes.loginEnd}>
                <div className={classes.loginLine}>
                  회원이 아니신가요? 
                </div>
                <div className={classes.noUser}>비회원 주문 조회</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SignIn;