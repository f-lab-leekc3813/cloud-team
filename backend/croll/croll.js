const express = require('express');
const router = express.Router();
const crollCheck = require('../croll/crollCheck');

const { swaggerUi, specs } = require('../swagger/swagger');

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: 홈페이지 엔드페이지 입니다.
 */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '데이터를 입력하세요' });
});

/**
 * @swagger
 * /{croll}:
 *   get:
 *     summary: 크롤링 하여 해당 상품의 정보를 조회합니다.
 *     tags: [Croll]
 *     description: 상세 정보를 조회합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: croll
 *         in: path
 *         description: The croll data to check.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Croll exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Result message indicating croll existence.
 *                   example: Croll exists.
 *       404:
 *         description: Croll not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating croll does not exist.
 *                   example: Croll not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating internal server error.
 *                   example: Internal server error.
 */

router.get('/:croll', function (req, res, next) {
  const { croll } = req.params
  crollCheck(croll)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      return error;
    })
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;
