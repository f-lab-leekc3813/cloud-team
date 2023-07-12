const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
// const mongodb = require('mongodb');
const app = express()

const port = 8080;
// const mongoClient = mongodb.MongoClient;
// const mongoUrl = 'mongodb://localhost:27017/test';


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/users', (req, res) => {
//   mongoClient.connect(mongoUrl, (err, client) => {
//     if (err) {
//       console.error('Failed to connect to MongoDB:', err);
//       res.status(500).send('Failed to connect to MongoDB');
//       return;
//     }

//     const db = client.db();
//     const collection = db.collection('users');

//     collection.find().toArray((err, users) => {
//       if (err) {
//         console.error('Failed to retrieve users from MongoDB:', err);
//         res.status(500).send('Failed to retrieve users from MongoDB');
//         return;
//       }

//       res.json(users);
//       client.close();
//     });
//   });
// });


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});