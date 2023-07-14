var express = require('express');
var router = express.Router();
const connect = require('../config/connection')
const emailCheck = require('../config/emailCheck')



router.post('/signup', function (req, res, next) {
  try {
    const { email, password, nickname } = req.body;
    emailCheck(email)
      .then((result) => {
        if (result[0].length > 0) {
          return res.status(201).json({
            message: "이미 있는 이메일"
          })
        }
        connect(email, password, nickname)
        return res.status(200).json({
          message: "완료"
        })
        .catch((error) => {
          console.error(error);
        });

      })
      .catch((error) => {
        console.error(error);
      })

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
