var express = require('express');
var router = express.Router();
const connect = require('../config/connection')
const emailCheck = require('../config/emailCheck');
const nicknameCheck = require('../config/nicknameCheck');
const { swaggerUi, specs } = require('../swagger/swagger');


/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management APIs
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
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
 *         description: Successful registration
 *       500:
 *         description: Internal server error
 */

router.post('/signup',  function(req, res, next) {
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


router.post('/login',  function(req, res, next) {
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
