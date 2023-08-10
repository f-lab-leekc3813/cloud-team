const express = require('express');
const router = express.Router();
const bestCheck = require('../routeCheck/bestCheck');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '검색어를 입력하세요' });
});


// many_books, score_books
router.get('/:best', function (req, res, next) {
    const { best } = req.params;
    bestCheck(best)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            return error;
        });
});

module.exports = router;
