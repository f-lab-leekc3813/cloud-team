var express = require('express');
var router = express.Router();
const connect = require('../config/connection')
const emailCheck = require('../config/emailCheck');
const nicknameCheck = require('../config/nicknameCheck');



router.post('/signup', function (req, res, next) {
  try {
    const { email, password, nickname } = req.body;
    async function check(){
      const emcheck = emailCheck(email);
      const nicheck = nicknameCheck(nickname);
      const em = await emcheck;
      const ni = await nicheck;
      if (em) {
        return res.status(201).json({
          message: "이미 있는 이메일"
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
    check()
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error'
    })
  }
});


router.post('/login', function (req, res, next) {
  try {
    let { email, password } = req.body;
    console.log(email, password)
    return res.status(200).json({
      message: "완료"
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error'
    })
  }
});



module.exports = router;
