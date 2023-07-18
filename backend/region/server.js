const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})



// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',     // MySQL 호스트 주소
  user: 'root',  // MySQL 사용자 이름
  password: '1023ldde',  // MySQL 비밀번호
  database: 'project'  // 사용할 데이터베이스 이름
});

let loginData = [];

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL에 성공적으로 연결되었습니다.');

  // 여기에서 MySQL 쿼리를 실행하거나 다른 작업을 수행할 수 있습니다.

  const query = 'SELECT * FROM project.project'; // 테이블 이름을 적절히 변경합니다.

  connection.query(query, (err, results) => {
    if (err) {
      console.error('데이터 조회 실패:', err);
      return;
    }
    console.log('조회된 데이터:', results);
    
    loginData = results;

    // MySQL 연결 종료
    connection.end((err) => {
        if (err) {
        console.error('MySQL 연결 종료 실패:', err);
        return;
        }
        console.log('MySQL 연결을 성공적으로 종료했습니다.');
    });
  });
});