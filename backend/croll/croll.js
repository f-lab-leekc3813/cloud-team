const express = require('express');
const router = express.Router();
const crollCheck = require('../croll/crollCheck');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '데이터를 입력하세요' });
});


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

module.exports = router;
