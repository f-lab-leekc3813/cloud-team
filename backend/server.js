const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const mysql = require('mysql'); //mysql을 설치했기 때문에 가져올 수 있다.
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const connection = mysql.createConnection({
  host: 'localhost:3306',     // MySQL 호스트 주소
  user: 'root',  // MySQL 사용자 이름
  password: '1023ldde',  // MySQL 비밀번호
  database: 'yourdatabase'  // 사용할 데이터베이스 이름
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL database.');
});

const data = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

connection.query('INSERT INTO your_table SET ?', data, (err, result) => {
  if (err) {
    console.error('Error executing MySQL query: ' + err.stack);
    return;
  }

  console.log('New row inserted with ID:', result.insertId);
});

app.listen(8080)