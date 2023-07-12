const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

let signupData = {};

// Use CORS middleware
app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Handle signup POST request
app.post('/signup', (req, res) => {
  const { email, password, name } = req.body;
  // Process the signup data as needed
  // Example: Store the data in a database
  signupData = { email, password, name };

  // Send a response back to the client
  res.send('Signup successful!');
});

app.get('/signup', (req, res) => {
  // Send the signup data back to the client
  res.send(signupData);
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});