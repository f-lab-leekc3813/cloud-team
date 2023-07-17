var express = require('express');
var router = express.Router();
const isCheck = require('./isCheck');
const connect = require('../config/connection');


const { swaggerUi, specs } = require('../swagger/swagger');


router.post('/signup', function (req, res, next) {
  try {
    const { email, password, nickname } = req.body;

    isCheck(email, password, nickname)
      .then((result) => {
        if (result.emcheck) {
          return res.status(201).json({
            message: "중복되는 정보가 존재합니다."
          })
        } else if (result.nicheck) {
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
 * /login:
 *   post:
 *     summary: Authenticate user and generate a token
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
 *         description: Successful login
 *       500:
 *         description: Internal server error
 */


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


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;
