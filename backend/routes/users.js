var express = require('express');
var router = express.Router();
const { swaggerUi, specs } = require('../swagger/swagger');

/* GET home page. */
/**
 * 200 status OK
 * 201 status OK (post)
 * 
 * 304 status no update
 * 
 * 400 status bad request
 * 401 status unauthorized
 * 403 status forbidden
 * 404 status not found
 * 
 * 500 status internal server error
 * 
 * asynchronus 형태로 동작
 */

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
    // 경찬씨가 보내주는 키 값이 존재.
    // 키 값에 맞춰서 보내주면 됨
    // 예를 들어 id, password를 post 방식으로 보냈다고 하면
    // const {id, password} = req.body
    const {email,password,nickname}  = req.body;
    console.log(email,password,nickname)
    return res.status(200).json({
      // data : '전달할 데이터',
      message : "완료"
    });  
  } catch (error) {
    return res.status(500).json({
      message : 'internal server error'
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
    let {email, password} = req.body;
    console.log(email,password)
    return res.status(200).json({
      message : "완료"
    });  
  } catch (error) {
    return res.status(500).json({
      message : 'internal server error'
    })
  }
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;
