const { emailCheck, nicknameCheck } = require('../config/checker');

async function isCheck(email, password, nickname) {
  const emcheck = await emailCheck(email);
  const nicheck = await nicknameCheck(nickname);
  return {emcheck, nicheck};
}

module.exports = isCheck;