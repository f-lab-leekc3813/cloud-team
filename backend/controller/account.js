const express = require('express')

const router = express.Router()

let signupData = {};

router.post('/signup', (request, response, next)=>{
    try {
        const { email, password, name } = req.body;
        // Process the signup data as needed
        // Example: Store the data in a database
        signupData = { email, password, name };
      
        // Send a response back to the client
        return response.status(200).json({
            data : signupData,
            message : "success"
        });
    } catch (error) {
        return response.status(500).json({
            message : error
        })
    }
});


module.exports = router;