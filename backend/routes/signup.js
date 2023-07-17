const emailCheck = require('../config/emailCheck');
const nicknameCheck = require('../config/nicknameCheck');
const connect = require('../config/connection')


async function signup(email, password, nickname,res){
    const emcheck = emailCheck(email);
    const nicheck = nicknameCheck(nickname);
    const em = await emcheck;
    const ni = await nicheck;
    if (em) {
      return res.status(201).json({
        message: "중복되는 정보가 존재합니다."
      })
    } else if (ni) {
      return res.status(202).json({
        message: "이미 있는 닉네임"
      })
    } else {
      connect(email, password, nickname)
      return res.status(200).json({
        message: "완료"
      })
    }
  }

  module.exports = signup;
