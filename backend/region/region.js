const express = require('express');
const router = express.Router();
const regionCheck = require('../region/regionCheck');

const { swaggerUi, specs } = require('../swagger/swagger');

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page related endpoints
 */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Please enter a region' });
});

/**
 * @swagger
 * /{region}:
 *   get:
 *     summary: 지역을 입력받아 해당 지역의 상품을 조회합니다.
 *     tags: [Region]
 *     description: Check if the specified region exists.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: region
 *         in: path
 *         description: The name of the region to check.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Region exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Result message indicating region existence.
 *                   example: Region exists.
 *       404:
 *         description: Region not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating region does not exist.
 *                   example: Region not found.
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
router.get('/:region', function (req, res, next) {
  const { region } = req.params;
  regionCheck(region)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      return error;
    });
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;