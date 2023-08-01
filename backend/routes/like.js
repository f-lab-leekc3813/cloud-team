var express = require('express');
var router = express.Router();

const {like} = require('../config/connection');

router.post('/likeReview', function (req, res, next) {
    try{
        const {userId, bookId, rating} = req.body;

        like(userId, bookId, rating)
        return res.status(200).json({
            message: 'clear',
        })
    }catch (error) {
        return res.status(500).json({
            message: 'internal server error'
          })
    }
})

module.exports = router;