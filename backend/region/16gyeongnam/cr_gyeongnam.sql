-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: cr
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gyeongnam`
--

DROP TABLE IF EXISTS `gyeongnam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gyeongnam` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gyeongnam`
--

LOCK TABLES `gyeongnam` WRITE;
/*!40000 ALTER TABLE `gyeongnam` DISABLE KEYS */;
INSERT INTO `gyeongnam` VALUES ('제습기 판매','70,000원','경남 진주시 천전동',6,'21','images/gn/gnimg0.jpg'),('디올 나노백','110만원','경남 김해시 장유3동',19,'20','images/gn/gnimg1.jpg'),('다이슨 선풍기','60,000원','경남 창원시 성산구 신촌동',8,'14','images/gn/gnimg2.jpg'),('아몬드 키즈 풀빌라 양산 통도사점 숙박','200,000원','경남 양산시 하북면',50,'47','images/gn/gnimg3.jpg'),('위닉스제습기16L','30,000원','경남 창원시 의창구 도계동',3,'9','images/gn/gnimg4.jpg'),('에어팟 프로','나눔?','경남 양산시 남부동',23,'115','images/gn/gnimg5.jpg'),('알피쿨45','50,000원','경남 창원시 성산구 가음정동',9,'8','images/gn/gnimg6.jpg'),('75인치 저가형 tv','150,000원','경남 창원시 마산합포구 월영동',17,'2','images/gn/gnimg7.jpg'),('추피의 생활이야기. 70권','90,000원','경남 김해시 장유3동',10,'18','images/gn/gnimg8.jpg'),('선반','10,000원','경남 거제시 옥포동',6,'7','images/gn/gnimg9.jpg'),('LG공기청정기','70,000원','경남 김해시 주촌면',12,'13','images/gn/gnimg10.jpg'),('철제 랙 팝니다','10,000원','경남 진주시 충무공동',5,'6','images/gn/gnimg11.jpg'),('위닉스 제습기 팔아요~~~','150,000원','경남 창원시 의창구 북면',8,'12','images/gn/gnimg12.jpg'),('동원 참치캔(100g)','1,000원','경남 창원시 마산회원구 구암동',7,'14','images/gn/gnimg13.jpg'),('4단 선반','10,000원','경남 창원시 성산구 상남동',15,'16','images/gn/gnimg14.jpg'),('LG건조기 9kg','100,000원','경남 양산시 물금읍',5,'7','images/gn/gnimg15.jpg'),('플라스틱 빨래보관함,세탁선반','4,000원','경남 거제시 장평동',5,'13','images/gn/gnimg16.jpg'),('농막팝니다','300만원','경남 창원시 의창구 사림동',49,'16','images/gn/gnimg17.jpg'),('삼성 z플립 팔아요','100원','경남 김해시 장유1동',6,'25','images/gn/gnimg18.jpg'),('침대,옷장,책상,의자,가스레인지,냉장고,선반','999,999원','경남 진주시 충무공동',9,'16','images/gn/gnimg19.jpg'),('모니터 겸용 티비(TV) 32인치','20,000원','경남 거제시 장승포동',2,'16','images/gn/gnimg20.jpg'),('미니냉장고','15,000원','경남 거제시 장승포동',8,'16','images/gn/gnimg21.jpg'),('두산위브, 동신아파트 사는 9-10살 추정 아이 부모님 봐 주세요','10억원','경남 김해시 삼계동',37,'5','images/gn/gnimg22.jpg'),('수납장 팔아요','30,000원','경남 거제시 장평동',8,'2','images/gn/gnimg23.jpg'),('제습기010 3884 7953','50,000원','경남 창원시 의창구 소계동',3,'10','images/gn/gnimg24.jpg'),('냉장고 153리터 팝니다','40,000원','경남 양산시 덕계동',3,'7','images/gn/gnimg25.jpg'),('아메리칸 익스프레스 캐리어','10,000원','경남 김해시 내외동',5,'5','images/gn/gnimg26.jpg'),('5단선반','20,000원','경남 김해시 진영읍',12,'5','images/gn/gnimg27.jpg'),('경주 펜션1박권 양도합니다ㅠ(테라스,오션뷰)','130,000원','경남 창원시 마산회원구 양덕1동',29,'12','images/gn/gnimg28.jpg'),('빨래건조대','5,000원','경남 김해시 북부동',7,'6','images/gn/gnimg29.jpg'),('부라더가정용미싱,NCC오버룩','60,000원','경남 양산시 동면',18,'9','images/gn/gnimg30.jpg'),('클라쎄 전자렌지','20,000원','경남 통영시 광도면',1,'6','images/gn/gnimg31.jpg'),('웨건','20,000원','경남 김해시 진영읍',6,'8','images/gn/gnimg32.jpg'),('애플워치','100,000원','경남 진주시 강남동',17,'28','images/gn/gnimg33.jpg'),('삼성티비(43인치)','20,000원','경남 창원시 마산합포구 월영동',5,'4','images/gn/gnimg34.jpg'),('제습기','30,000원','경남 창원시 마산회원구 양덕동',6,'6','images/gn/gnimg35.jpg'),('벽걸이 에어컨','100,000원','경남 김해시 구산동',4,'6','images/gn/gnimg36.jpg'),('위니아 벽걸이 에어컨 팔아요','60,000원','경남 김해시 장유3동',3,'11','images/gn/gnimg37.jpg'),('원목 3단 선반','15,000원','경남 진주시 호탄동',25,'11','images/gn/gnimg38.jpg'),('선반 팔아용','15,000원','경남 창원시 마산합포구 해운동',15,'11','images/gn/gnimg39.jpg'),('손수레 판매해요','8,000원','경남 김해시 장유2동',14,'16','images/gn/gnimg40.jpg'),('세탁기(10k), 냉장고 팝니다~','80,000원','경남 창원시 성산구 중앙동',6,'14','images/gn/gnimg41.jpg'),('롯데워터파크 종일이용권 판매.','34,000원','경남 김해시 장유3동',49,'27','images/gn/gnimg42.jpg'),('풍년압력솥','10,000원','경남 김해시 북부동',4,'3','images/gn/gnimg43.jpg'),('제습기 15리터','100,000원','경남 사천시 곤명면',2,'5','images/gn/gnimg44.jpg'),('이사가서 처리합니다..','5,000원','경남 양산시 물금읍',1,'5','images/gn/gnimg45.jpg'),('선반만~!','25,000원','경남 거제시 옥포동',2,'5','images/gn/gnimg46.jpg'),('5878페소 일관 판매합니다','137,000원','경남 창원시 마산합포구 월영동',0,'9','images/gn/gnimg47.jpg'),('LG 65인치 티비와 고정 블라켓 팝니다','150,000원','경남 진주시 주약동',11,'2','images/gn/gnimg48.jpg'),('선풍기','10,000원','경남 창원시 성산구 중앙동',13,'13','images/gn/gnimg49.jpg'),('추피','50,000원','경남 김해시 장유2동',3,'8','images/gn/gnimg50.jpg'),('2인용 소파 팝니다!','20,000원','경남 진주시 충무공동',7,'3','images/gn/gnimg51.jpg'),('작은 주택으로 이사 관계로 첨으로  내놓습니다','30,000원','경남 함안군 칠원읍',4,'14','images/gn/gnimg52.jpg'),('냉장고550리터','20,000원','경남 창원시 의창구 봉곡동',5,'17','images/gn/gnimg53.jpg'),('브루클린웍스 모던쿨러 33L','20,000원','경남 진주시 충무공동',6,'1','images/gn/gnimg54.jpg'),('타요랑 미니자동차 장난감','10,000원','경남 창원시 성산구 중앙동',2,'6','images/gn/gnimg55.jpg'),('4단선반','4,000원','경남 거제시 장평동',6,'7','images/gn/gnimg56.jpg'),('LG벽걸이 에어컨 새상품','200,000원','경남 진주시 신안동',8,'9','images/gn/gnimg57.jpg'),('s22울트라','200,000원','경남 창원시 의창구 북면',9,'10','images/gn/gnimg58.jpg'),('수납장','15,000원','경남 진주시 가좌동',5,'4','images/gn/gnimg59.jpg'),('5단 조립식 고릴라렉 판매','35,000원','경남 양산시 물금읍',11,'16','images/gn/gnimg60.jpg'),('사용하지않은 프로파일 팔아요.','10,000원','경남 진주시 가호동',2,'3','images/gn/gnimg61.jpg'),('아이패드미니6 256GB','450,000원','경남 창원시 의창구 의창동',8,'5','images/gn/gnimg62.jpg'),('선반','20,000원','경남 진주시 충무공동',31,'20','images/gn/gnimg63.jpg'),('삼성 55인치 SUHD 스마트 TV','350,000원','경남 창원시 의창구 동읍',16,'8','images/gn/gnimg64.jpg'),('아이폰se2','110,000원','경남 거제시 아주동',7,'8','images/gn/gnimg65.jpg'),('딤채김치냉장고','150,000원','경남 거제시 수양동',4,'3','images/gn/gnimg66.jpg'),('양문형냉장고 팝니다','250,000원','경남 진주시 초전동',14,'7','images/gn/gnimg67.jpg'),('삼성무선청소기판매합니다','10,000원','경남 거창군 거창읍',2,'6','images/gn/gnimg68.jpg'),('18k 팬던트','28,000원','경남 창원시 마산합포구 완월동',12,'4','images/gn/gnimg69.jpg'),('LG 휘센 2in1 에어컨 (FNQ160MKMW)','350,000원','경남 양산시 동면',2,'4','images/gn/gnimg70.jpg'),('먹태깡 김해이마트에 팔아여~','9999만 9999원','경남 김해시 내외동',30,'6','images/gn/gnimg71.jpg'),('삼성 2in 1 에어컨','350,000원','경남 창원시 의창구 팔룡동',10,'9','images/gn/gnimg72.jpg'),('세탁기 15kg 삼성','20,000원','경남 창원시 의창구 팔룡동',1,'5','images/gn/gnimg73.jpg'),('위닉스 제습기','110,000원','경남 창원시 성산구 신촌동',6,'5','images/gn/gnimg74.jpg'),('원목선반','9,000원','경남 거창군 거창읍',2,'3','images/gn/gnimg75.jpg'),('칠원자이아파트 계신분 꼭 봐주세요!','나눔?','경남 창원시 마산회원구 합성1동',2,'4','images/gn/gnimg76.jpg'),('새 타이어 팝니다','100,000원','경남 진주시 평거동',8,'17','images/gn/gnimg77.jpg'),('데상트 크로스백','7,000원','경남 김해시 내외동',7,'7','images/gn/gnimg78.jpg'),('어항 판매합니다','5,000원','경남 진주시 충무공동',3,'5','images/gn/gnimg79.jpg'),('한샘 4인식탁 팝니다','50,000원','경남 거제시 고현동',10,'9','images/gn/gnimg80.jpg'),('한샘 클린트 거실장 (티비다이) 판매합니다','10,000원','경남 김해시 장유3동',8,'1','images/gn/gnimg81.jpg'),('전기자전거1000w','100,000원','경남 김해시 동상동',5,'4','images/gn/gnimg82.jpg'),('뷰델 카라반페션 양도(7/14~15)','50,000원','경남 김해시 부원동',3,'11','images/gn/gnimg83.jpg'),('캣타워. 한 번도 쓰지 않은.','10,000원','경남 창원시 성산구 남양동',3,'7','images/gn/gnimg84.jpg'),('삼성 스마트 컴팩트 제습기 / AY055FBVANDD 민트급 5.5L','130,000원','경남 김해시 진영읍',8,'9','images/gn/gnimg86.jpg'),('아난티 남해 8월3일(목) 숙박','600,000원','경남 창원시 성산구 대원동',38,'4','images/gn/gnimg87.jpg'),('닭모이로쓰실분','10원','경남 김해시 진영읍',2,'5','images/gn/gnimg88.jpg'),('배관부속판매합니다','1,000원','경남 창원시 의창구 팔룡동',5,'7','images/gn/gnimg89.jpg'),('양철통','10,000원','경남 창원시 성산구 남양동',3,'5','images/gn/gnimg90.jpg'),('콤프레샤 계양 2.5마력','100,000원','경남 창원시 마산합포구 교방동',6,'8','images/gn/gnimg91.jpg'),('포트메리온 머그컵2+커피잔2 팔아요','20,000원','경남 거제시 능포동',0,'6','images/gn/gnimg93.jpg'),('실내자전거','15,000원','경남 창원시 성산구 가음동',1,'3','images/gn/gnimg94.jpg');
/*!40000 ALTER TABLE `gyeongnam` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 12:21:30
