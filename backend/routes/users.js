var express = require('express');
var router = express.Router();
const isCheck = require('../routeCheck/isCheck');
const {connection} = require('../config/connection');

const login = require('../config/login');
const nickname = require('../config/nickname');



const { swaggerUi, specs } = require('../swagger/swagger');


router.post('/signup', function (req, res, next) {
  try {
    const { email, password, nickname } = req.body;

    isCheck(email, password, nickname)
      .then(({ emcheck, nicheck }) => {
        if (emcheck) {
          return res.status(201).json({
            message: "중복되는 정보가 존재합니다."
          })
        } else if (nicheck) {
          return res.status(202).json({
            message: "이미 있는 닉네임"
          })
        } else {
          connection(email, password, nickname)
          return res.status(200).json({
            message: "완료",
            nickname : nickname
          })
        }
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
    login(email, password)
      .then((result) => {
        if (result) {
          // Call the nickname function to get the nickname based on the login result
          return nickname(email, password)
            .then((nicknameResult) => {
              return res.status(200).json({
                message: "Done",
                nickname: nicknameResult.nickname
              });
            })
            .catch((error) => {
              console.error('Error retrieving nickname:', error);
              return res.status(500).json({
                message: 'Internal server error'
              });
            });
        } else {
          return res.status(205).json({
            message: "Invalid email or password"
          });
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        return res.status(500).json({
          message: 'Internal server error'
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
});


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 사용자 로그인
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: 성공 메시지
 *       205:
 *         description: 잘못된 이메일 또는 비밀번호 입력
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: 에러 메시지
 *       500:
 *         description: 서버 내부 오류
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: 에러 메시지
 */