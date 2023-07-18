const express = require('express');
const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host     : 'localhost',
    user     : 'root',
    password : 'mysql_native_password',
    database : 'cr'
});

// Express 앱 생성
const app = express();

// GET 요청에 대한 핸들러
app.get('/', (req, res) => {
  // 데이터베이스 쿼리 실행
  connection.query('SELECT * FROM best', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// 서버 시작
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});