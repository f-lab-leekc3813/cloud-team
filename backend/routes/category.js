const express = require('express');
const router = express.Router();
const categoryCheck = require('../routeCheck/categoryCheck');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '검색어를 입력하세요' });
});

router.get('/:category', function (req, res, next) {
    const { category } = req.params;
    categoryCheck(category)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            return error;
        });
});

module.exports = router;
