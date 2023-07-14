var express = require('express');
var router = express.Router();

const mysql = require('mysql2');


// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',     // MySQL 호스트 주소
  user: 'root',  // MySQL 사용자 이름
  password: 'mysql',  // MySQL 비밀번호
  database: 'project'  // 사용할 데이터베이스 이름
});


router.post('/signup',  function(req, res, next) {
  try {
    const {email,password,nickname}  = req.body;
    
    // MySQL 연결
    connection.connect((err) => {
      if (err) {
        console.error('MySQL 연결 실패:', err);
        return;
      }
      console.log('MySQL에 성공적으로 연결되었습니다.');

      // 여기에서 MySQL 쿼리를 실행하거나 다른 작업을 수행할 수 있습니다.
      const query = 'INSERT INTO project.project (email, password, nickname) VALUES (?, ?, ?)';
      const values = [email,password,nickname];
      connection.query(query, values, (err, results) => {
        if (err) {
          console.error('데이터 조회 실패:', err);
          return;
        }
        // console.log('조회된 데이터:', results);
        
        

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

    return res.status(200).json({
      message : "완료"
    });  
  } catch (error) {
    return res.status(500).json({
      message : 'internal server error'
    })
  }
  
});

router.post('/login',  function(req, res, next) {
  try {
    let {email, password} = req.body;
    console.log(email,password)
    return res.status(200).json({
      message : "완료"
    });  
  } catch (error) {
    return res.status(500).json({
      message : 'internal server error'
    })
  }
});



module.exports = router;
