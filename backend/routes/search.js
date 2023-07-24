const express = require('express');
const router = express.Router();
const searchCheck = require('./searchCheck');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '검색어를 입력하세요' });
});

router.get('/:search', function (req, res, next) {
    const { search } = req.params
    searchCheck(search)
        .then((result) => {
            if (result.length > 0) { res.send(result); }
            else {
                res.send('')
            }
        })
        .catch((error) => {
            return error;
        })
});

module.exports = router;
