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
-- Table structure for table `daegu`
--

DROP TABLE IF EXISTS `daegu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daegu` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daegu`
--

LOCK TABLES `daegu` WRITE;
/*!40000 ALTER TABLE `daegu` DISABLE KEYS */;
INSERT INTO `daegu` VALUES ('장마철 제습기 싸게 들여놓으세요','50,000원','대구 수성구 범어3동',15,'33','images/dg/dgimg0.jpg'),('냉동고 4년사용','50,000원','대구 수성구 고산2동',18,'18','images/dg/dgimg1.jpg'),('캣타워','10,000원','대구 남구 대명동',13,'14','images/dg/dgimg2.jpg'),('저진짜 돈이 급합니다 ㅠㅠ(세트형 구매)','440,000원','대구 북구 국우동',4,'8','images/dg/dgimg3.jpg'),('18k 팔찌','25,000원','대구 달서구 송현동',29,'37','images/dg/dgimg4.jpg'),('스쿳앤라이드 퀵보드','30,000원','대구 남구 봉덕2동',5,'14','images/dg/dgimg5.jpg'),('엘지공기청정기','80,000원','대구 동구 신암3동',16,'21','images/dg/dgimg6.jpg'),('베트남 동','56,000원','대구 달서구 이곡1동',0,'9','images/dg/dgimg7.jpg'),('코렐 그릇','50,000원','대구 수성구 범어동',7,'4','images/dg/dgimg8.jpg'),('갤럭시 A90','55,000원','대구 달서구 송현동',15,'19','images/dg/dgimg9.jpg'),('제습기','200,000원','대구 북구 태전동',11,'16','images/dg/dgimg10.jpg'),('자전거. 팝니다','30,000원','대구 달서구 유천동',3,'7','images/dg/dgimg11.jpg'),('코렐 냉면기 새상품','8,000원','대구 수성구 지산2동',17,'21','images/dg/dgimg12.jpg'),('펜디 셀러리아 시계','70,000원','대구 동구 신암2동',11,'6','images/dg/dgimg13.jpg'),('원목 캣타워 팝니다','20,000원','대구 동구 신천3동',5,'7','images/dg/dgimg14.jpg'),('삼성 통돌이 세탁기','70,000원','대구 남구 봉덕2동',3,'8','images/dg/dgimg15.jpg'),('3단 파티션(화이트원목)','25,000원','대구 수성구 신매동',10,'10','images/dg/dgimg16.jpg'),('사진에 보이는거 전부 판매','10원','대구 남구 대명2동',17,'19','images/dg/dgimg17.jpg'),('아기사랑세탁기','70,000원','대구 북구 사수동',8,'8','images/dg/dgimg18.jpg'),('삼성 갤럭시 와이드4 골드 A급 휴대폰 팔아요','30,000원','대구 달성군 화원읍',6,'6','images/dg/dgimg19.jpg'),('이케아 철제 수납장(캐비넷수납장)','5,000원','대구 중구 교동',5,'7','images/dg/dgimg20.jpg'),('아이폰 12 그린','350,000원','대구 달서구 두류3동',3,'8','images/dg/dgimg21.jpg'),('기타 가져가세요 ~','15,000원','대구 중구 남산4동',3,'5','images/dg/dgimg22.jpg'),('잔디깍기 기계 팔아요','100,000원','대구 달성군 가창면',11,'4','images/dg/dgimg23.jpg'),('3구 가스레인지','30,000원','대구 중구 대신동',9,'5','images/dg/dgimg24.jpg'),('카누커피','18,000원','대구 달성군 화원읍',8,'19','images/dg/dgimg25.jpg'),('먹태깡 6봉지','4,000원','대구 남구 대명3동',2,'24','images/dg/dgimg26.jpg'),('내친구 과학공룡 판매해요~','120,000원','대구 남구 봉덕동',5,'9','images/dg/dgimg27.jpg'),('갤럭시 노트8','30,000원','대구 달서구 송현동',10,'12','images/dg/dgimg28.jpg'),('파파야나인 푸쉬카 (캐노피포함)','25,000원','대구 달서구 상인1동',8,'5','images/dg/dgimg29.jpg'),('노브랜드 짜장라면 유통기간 임박 판매','7,000원','대구 서구 내당4동',3,'5','images/dg/dgimg30.jpg'),('펜션양도','170,000원','대구 동구 사복동',27,'10','images/dg/dgimg31.jpg'),('삼성 에어컨 1등급 판매','300,000원','대구 중구 남산3동',19,'20','images/dg/dgimg32.jpg'),('65인치tv','50,000원','대구 남구 봉덕3동',4,'2','images/dg/dgimg33.jpg'),('이사 가서 다 팔아요','20,000원','대구 수성구 범어2동',16,'7','images/dg/dgimg34.jpg'),('베이비존 3단 회전책장','25,000원','대구 달서구 월성동',1,'7','images/dg/dgimg35.jpg'),('화분다이','2,000원','대구 달서구 상인2동',6,'1','images/dg/dgimg36.jpg'),('아기 자동차 푸쉬카','10,000원','대구 달서구 두류1.2동',2,'6','images/dg/dgimg37.jpg'),('집 가구','650,000원','대구 달성군 다사읍',2,'12','images/dg/dgimg38.jpg'),('침대프레임','30,000원','대구 서구 평리동',6,'9','images/dg/dgimg39.jpg'),('디월트배터리  팝니다','78,000원','대구 서구 내당4동',4,'7','images/dg/dgimg40.jpg'),('방금 산 싱싱한 먹태깡!!','5,000원','대구 수성구 황금동',2,'7','images/dg/dgimg41.jpg'),('상태좋은전자렌지','30,000원','대구 남구 대명1동',11,'17','images/dg/dgimg42.jpg'),('쿠잉 미니 냉장고 (156L 냉장고)','180,000원','대구 남구 대명동',19,'9','images/dg/dgimg43.jpg'),('삼성tv','150,000원','대구 달서구 두류1.2동',4,'7','images/dg/dgimg44.jpg'),('각종 티팟정리','111만 1111원','대구 수성구 범어3동',6,'16','images/dg/dgimg45.jpg'),('외장하드 일괄판매합니다','20,000원','대구 북구 서변동',6,'4','images/dg/dgimg46.jpg'),('자전거판매(로드마스터)','70,000원','대구 수성구 만촌3동',4,'4','images/dg/dgimg47.jpg'),('위닉스 제습기','150,000원','대구 달서구 파호동',15,'9','images/dg/dgimg48.jpg'),('풍년압력솥 6인용','10,000원','대구 수성구 황금동',1,'5','images/dg/dgimg49.jpg'),('여행용캐리어','10,000원','대구 달서구 진천동',8,'7','images/dg/dgimg51.jpg'),('갤럭시 s21 블랙 256g 팝니다','240,000원','대구 중구 남산1동',5,'8','images/dg/dgimg52.jpg'),('소금판매합니다','15,000원','대구 북구 검단동',22,'15','images/dg/dgimg53.jpg'),('삼성 통돌이 세탁기','100,000원','대구 서구 평리5동',6,'7','images/dg/dgimg54.jpg'),('창고정리 아기 백일드레스 돌드레스 백일한복 돌 한복','3,000원','대구 동구 신천3동',38,'30','images/dg/dgimg55.jpg'),('갤럭시 S21울트라 5G 판매','290,000원','대구 동구 신암2동',8,'8','images/dg/dgimg56.jpg'),('젝시오 XXIO 골프백 캐디백 블랙','90,000원','대구 동구 효목동',19,'11','images/dg/dgimg57.jpg'),('lg 냉장고 팔아요.','250,000원','대구 수성구 노변동',19,'13','images/dg/dgimg59.jpg'),('낚시 파라솔 각도기 팝니다','20,000원','대구 달서구 용산1동',2,'7','images/dg/dgimg60.jpg'),('지갑','50,000원','대구 수성구 황금동',9,'10','images/dg/dgimg61.jpg'),('제주도 2박 3일 여행티켓(2인)','50,000원','대구 달성군 다사읍',19,'6','images/dg/dgimg62.jpg'),('티파니반지','30,000원','대구 달성군 다사읍',34,'15','images/dg/dgimg63.jpg'),('디올  미니어쳐향수','18,000원','대구 동구 신천4동',12,'3','images/dg/dgimg64.jpg'),('삼성 전자렌지 판매합니다','40,000원','대구 중구 대봉동',2,'7','images/dg/dgimg65.jpg'),('냉장고 에어컨','50,000원','대구 북구 침산동',2,'4','images/dg/dgimg66.jpg'),('발렌시아가 선글라스','30,000원','대구 수성구 수성동1가',11,'3','images/dg/dgimg67.jpg'),('엄마몰래 공기계 샀는데 사고보니까 공부는 안하고 점점 휴대폰 중독자가 되어가는것같아 큰맘먹고 팝니다..','300,000원','대구 수성구 범어동',11,'4','images/dg/dgimg68.jpg'),('이사갑니다~완전!!급처리!!!','30,000원','대구 수성구 범어3동',24,'6','images/dg/dgimg69.jpg'),('압력솥','15,000원','대구 수성구 범어2동',28,'15','images/dg/dgimg70.jpg'),('마이크로 맥시 퀵보드','80,000원','대구 달서구 도원동',1,'6','images/dg/dgimg71.jpg'),('옷이 너무 많아서 상태 좋은 옷들만 싸게 팔아요 ㅠㅠ','5,000원','대구 중구 교동',10,'6','images/dg/dgimg72.jpg'),('새상품) 이불','15,000원','대구 수성구 상동',6,'5','images/dg/dgimg73.jpg'),('플스4 pro 팔아요','150,000원','대구 남구 대명6동',4,'7','images/dg/dgimg74.jpg'),('디월트 임팩드릴','70,000원','대구 남구 이천동',11,'1','images/dg/dgimg75.jpg'),('마켓비 철제수납함','5,000원','대구 달서구 도원동',7,'5','images/dg/dgimg76.jpg'),('이불 배게 5천원','5,000원','대구 수성구 사월동',1,'3','images/dg/dgimg77.jpg'),('쇼파 팔아용','50,000원','대구 수성구 범어2동',16,'14','images/dg/dgimg78.jpg'),('성능 매우좋고 예쁘고 깨끗한 노트북팝니다','200,000원','대구 서구 내당4동',19,'6','images/dg/dgimg79.jpg'),('리바이스 511정품청바지','25,000원','대구 남구 대명11동',38,'23','images/dg/dgimg80.jpg'),('까르디에 못반지','600,000원','대구 남구 대명3동',27,'15','images/dg/dgimg81.jpg'),('오클리 선그라스 판매','70,000원','대구 달성군 다사읍',5,'6','images/dg/dgimg82.jpg'),('아이폰13 128기가','600,000원','대구 중구 성내1동',2,'8','images/dg/dgimg83.jpg'),('샤넬 샌들','150,000원','대구 수성구 범어동',3,'3','images/dg/dgimg84.jpg'),('베트남 동 팝니다.','110만원','대구 달성군 다사읍',5,'14','images/dg/dgimg85.jpg'),('대구 메리어트호텔 프리미엄 디럭스시티뷰 당일숙박 팔아요','120,000원','대구 수성구 수성동4가',8,'4','images/dg/dgimg86.jpg'),('20인치 접이식 자전거','70,000원','대구 달성군 화원읍',8,'6','images/dg/dgimg87.jpg'),('템바보드 테이블 1달사용 (상태최상) 오늘의집','50,000원','대구 북구 침산3동',13,'4','images/dg/dgimg88.jpg'),('다이슨 에어랩','380,000원','대구 남구 봉덕2동',37,'6','images/dg/dgimg89.jpg'),('타올','10,000원','대구 달성군 다사읍',5,'5','images/dg/dgimg90.jpg'),('장화','5,000원','대구 북구 사수동',15,'6','images/dg/dgimg91.jpg'),('엔화 7000엔 판매합니다','60,000원','대구 동구 효목동',0,'5','images/dg/dgimg92.jpg'),('기저귀정리함','8,000원','대구 달서구 월성1동',4,'5','images/dg/dgimg93.jpg'),('메가커피 아이스아메리카노1잔','1,000원','대구 동구 입석동',0,'8','images/dg/dgimg94.jpg'),('가정용 금고 팝니다','90,000원','대구 남구 봉덕동',20,'11','images/dg/dgimg95.jpg');
/*!40000 ALTER TABLE `daegu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 12:21:29
