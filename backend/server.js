const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const bodyParser = require('body-parser');
const accountRouter = require('./controller/account.js');
const cors = require('cors');
const app = express();

const port = 8080;

let signupData = {};

// Use CORS middleware
app.use(cors());
app.use('/account', accountRouter);
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/account', (req, res) => {
  // Send the signup data back to the client
  res.send(signupData);
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});