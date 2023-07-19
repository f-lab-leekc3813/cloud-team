var express = require('express');
var router = express.Router();
const isCheck = require('../config/isCheck');
const connect = require('../config/connection');
const login = require('../config/login');



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
          connect(email, password, nickname)
          return res.status(200).json({
            message: "완료"
          })
        }
      })
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error'
    })
  }
});


/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 사용자 회원 가입
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
 *               nickname:
 *                 type: string
 *     responses:
 *       200:
 *         description: 회원 가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: 성공 메시지
 *       201:
 *         description: 중복되는 정보가 존재하는 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: 에러 메시지
 *       202:
 *         description: 이미 존재하는 닉네임인 경우
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


router.post('/login', function (req, res, next) {
  try {
    let { email, password } = req.body;
    login(email, password)
      .then((result) => {
        if (result) {
          return res.status(200).json({
            message: "완료"
          });
        } else {
          return res.status(205).json({
            message: "잘못된 이메일 또는 비밀번호"
          })
        }
      })
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error'
    })
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