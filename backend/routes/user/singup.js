const express = require('express');

const app = express();

app.post('/user/signup', (req, res) => {
    const { email, password, nickname } = req.body;
    res.sendStatus(200);
});

app.get('/user/signup', (req, res) => {
    const data = {};
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });