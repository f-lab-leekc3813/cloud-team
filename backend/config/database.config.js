const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',     // MySQL 호스트 주소
  user: 'root',  // MySQL 사용자 이름

  password: '0000',  // MySQL 비밀번호 1023ldde
  database: 'project'  // 사용할 데이터베이스 이름
});


module.exports = connection