const express = require('express');
const router = express.Router();
const likeCheck = require('./likeCheck');


const { like, duplicate_like } = require('../config/connection');

router.post('/likeReview', function (req, res, next) {
    try {
        const { userId, bookId, rating } = req.body;
        likeCheck(userId, bookId)
            .then((result) => {
                if (result.length > 0) {
                    duplicate_like(userId, bookId, rating)
                    return res.status(200).json({
                        message: 'duplicate'
                    })
                } else {
                    like(userId, bookId, rating)
                    return res.status(200).json({
                        message: 'clear',
                    })
                }
            }) 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'internal server error'
        })
    } 
})

module.exports = router;