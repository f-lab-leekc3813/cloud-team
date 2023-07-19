const express = require('express');
const router = express.Router();
const regionCheck = require('../region/regionCheck');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '지역을 입력하세요' });
});


router.get('/:region', function (req, res, next) {
  const { region } = req.params
  regionCheck(region)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      return error;
    })
});

module.exports = router;
