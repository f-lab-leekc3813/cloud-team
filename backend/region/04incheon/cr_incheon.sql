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
-- Table structure for table `incheon`
--

DROP TABLE IF EXISTS `incheon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incheon` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incheon`
--

LOCK TABLES `incheon` WRITE;
/*!40000 ALTER TABLE `incheon` DISABLE KEYS */;
INSERT INTO `incheon` VALUES ('매장정리합니다.','1,000원','인천 연수구 송도동 월드마크 1,2 단지',14,'4','images/ic/icimg0.jpg'),('코웨이 제습기 급처9만^^','90,000원','인천 남동구 논현2동',10,'11','images/ic/icimg1.jpg'),('월광보합 2900','40,000원','인천 부평구 청천동',10,'11','images/ic/icimg2.jpg'),('신세계 상품권 30만원 판매 합니다','270,000원','인천 부평구 청천1동',2,'16','images/ic/icimg3.jpg'),('위닉스제습기 판매합니다','30,000원','인천 미추홀구 도화2,3동',6,'10','images/ic/icimg4.jpg'),('Haier 냉장고 저렴하게 팝니다!','50,000원','인천 중구 운서동',0,'11','images/ic/icimg5.jpg'),('플립2 화이트 *정상해지*','100,000원','인천 미추홀구 주안8동',5,'5','images/ic/icimg6.jpg'),('냉장고~ 팝니다','50,000원','인천 서구 검암경서동',5,'3','images/ic/icimg7.jpg'),('카놀라유 / 올리고당 / 스팸','2,000원','인천 부평구 삼산동',23,'18','images/ic/icimg8.jpg'),('lg냉장고','50,000원','인천 서구 당하동',6,'4','images/ic/icimg9.jpg'),('제습기','120,000원','인천 부평구 부평6동',3,'13','images/ic/icimg10.jpg'),('선풍기팝니다','3,000원','인천 연수구 송도동',12,'17','images/ic/icimg11.jpg'),('한샘 4인용 소파 팝니다.','100,000원','인천 계양구 계산동',16,'8','images/ic/icimg12.jpg'),('파세코 창문형 에어컨','50,000원','인천 부평구 부개2동',2,'6','images/ic/icimg13.jpg'),('싸게 급처분합니다','200,000원','인천 부평구 십정1동',5,'10','images/ic/icimg14.jpg'),('갤A23','150,000원','인천 서구 청라동',7,'15','images/ic/icimg15.jpg'),('반건조오징어','5,000원','인천 부평구 갈산1동',9,'4','images/ic/icimg17.jpg'),('엘지냉장고 LG냉장고 4도어냉장고 팝니다','60,000원','인천 서구 청라2동',8,'5','images/ic/icimg18.jpg'),('냉장고','50,000원','인천 부평구 부평동',10,'4','images/ic/icimg19.jpg'),('먹태깡','1,700원','인천 남동구 만수동',1,'7','images/ic/icimg20.jpg'),('친구가 접어준 종이 용 팝니다','10,000원','인천 연수구 송도3동',8,'2','images/ic/icimg21.jpg'),('코카콜라냉장고','50,000원','인천 서구 가좌2동',11,'8','images/ic/icimg22.jpg'),('캠핑 롤 우드테이블 팔아요(새상품)','20,000원','인천 부평구 부평4동',65,'27','images/ic/icimg23.jpg'),('LG TV  팔아요...','50,000원','인천 서구 청라동',26,'28','images/ic/icimg24.jpg'),('구찌 마몽  그로스백','250,000원','인천 중구 중산동',44,'22','images/ic/icimg25.jpg'),('이케아 헬메르 서랍장','1,000원','인천 서구 신현동',3,'5','images/ic/icimg26.jpg'),('리바트 꼼므 책상','60,000원','인천 계양구 효성동',12,'7','images/ic/icimg27.jpg'),('5단앵글','50,000원','인천 부평구 부평동',4,'5','images/ic/icimg28.jpg'),('엘지 상냉장 하냉동 투도어 냉장고 판매합니다','80,000원','인천 중구 운서동',3,'5','images/ic/icimg29.jpg'),('스피드렉 철제렉 철제선반','45,000원','인천 미추홀구 학익동',14,'7','images/ic/icimg30.jpg'),('전자레인지 팝니다.','5,000원','인천 미추홀구 주안3동',3,'6','images/ic/icimg31.jpg'),('헬렌카민스키 정품','50,000원','인천 서구 청라동',3,'6','images/ic/icimg32.jpg'),('뭔지 모르지만 팜 스피커인 듯','10,000원','인천 미추홀구 학익2동',11,'6','images/ic/icimg33.jpg'),('토리버치 백','15,000원','인천 연수구 송도2동',5,'4','images/ic/icimg34.jpg'),('히츠 7키로 미니건조기','70,000원','인천 부평구 부개동',11,'4','images/ic/icimg35.jpg'),('제빙기 판매','150,000원','인천 남동구 도림동',16,'32','images/ic/icimg36.jpg'),('아이브 포카','300,000원','인천 미추홀구 용현3동',10,'10','images/ic/icimg37.jpg'),('냉장고 팔아요','100,000원','인천 부평구 산곡3동',1,'7','images/ic/icimg38.jpg'),('삼성 컴퓨터 모니터','15,000원','인천 남동구 구월동',10,'14','images/ic/icimg39.jpg'),('아이폰14프로팝니다','110만원','인천 연수구 송도1동',2,'8','images/ic/icimg40.jpg'),('삼성 냉동고 판매합니다','150,000원','인천 남동구 논현2동',4,'4','images/ic/icimg41.jpg'),('스피드랙','30,000원','인천 부평구 부평6동',7,'6','images/ic/icimg42.jpg'),('서울우유 멸균200x24','10,000원','인천 미추홀구 주안5동',5,'4','images/ic/icimg43.jpg'),('위닉스 제습기 16리터','60,000원','인천 미추홀구 숭의4동',5,'11','images/ic/icimg44.jpg'),('차량용 진공청소기','2,000원','인천 중구 신흥동',4,'8','images/ic/icimg45.jpg'),('이옷 구매하신분 제가 살게요~','25,000원','인천 서구 청라1동',0,'0','images/ic/icimg46.jpg'),('위오스크린','15,000원','인천 미추홀구 주안6동',29,'25','images/ic/icimg47.jpg'),('공구','15,000원','인천 남동구 간석동',6,'7','images/ic/icimg48.jpg'),('전자렌지','10,000원','인천 서구 당하동',1,'5','images/ic/icimg49.jpg'),('육수냉장고,100000','100,000원','인천 부평구 부개2동',3,'16','images/ic/icimg50.jpg'),('삼성 인버터 제습기 15리터 팝니다','100,000원','인천 서구 아라동',4,'4','images/ic/icimg51.jpg'),('야자매트','111만 1111원','인천 중구 연안동',19,'17','images/ic/icimg52.jpg'),('유선청소기','1,000원','인천 남동구 구월동',3,'6','images/ic/icimg53.jpg'),('쿠쿠압력밥솥','10,000원','인천 계양구 계산2동',6,'7','images/ic/icimg54.jpg'),('mtb 자전거','60,000원','인천 부평구 삼산2동',8,'8','images/ic/icimg55.jpg'),('와이업 유모차','10,000원','인천 연수구 송도동',7,'2','images/ic/icimg56.jpg'),('골프가방,보스턴백 팝니다.','50,000원','인천 연수구 동춘1동',17,'17','images/ic/icimg57.jpg'),('세탁기.냉장고','20,000원','인천 미추홀구 학익2동',1,'5','images/ic/icimg58.jpg'),('헌터부츠','60,000원','인천 연수구 송도2동',34,'14','images/ic/icimg59.jpg'),('탁구 티셔츠 급처 합니다','10,000원','인천 계양구 효성동',2,'10','images/ic/icimg60.jpg'),('의자 테이블 세트 팝니다','30,000원','인천 계양구 계산동',5,'4','images/ic/icimg61.jpg'),('진동안마기','5,000원','인천 부평구 산곡2동',5,'4','images/ic/icimg62.jpg'),('만원씩에 드립니다','10,000원','인천 서구 청라동',4,'2','images/ic/icimg63.jpg'),('냉장고','150,000원','인천 중구 신흥동',1,'7','images/ic/icimg64.jpg'),('꽃','10,000원','인천 남동구 남촌도림동',8,'13','images/ic/icimg65.jpg'),('크록스샌들','18,000원','인천 계양구 작전서운동',3,'3','images/ic/icimg66.jpg'),('압력솥 팝니다','10,000원','인천 서구 마전동',2,'4','images/ic/icimg67.jpg'),('고투 캠핑용 의자판매합니다','10,000원','인천 중구 운서동',4,'11','images/ic/icimg68.jpg'),('갤럭시 노트10 256g 판매','110,000원','인천 연수구 송도1동',2,'5','images/ic/icimg69.jpg'),('LG 4도어 DIOS 870L 냉장고','300,000원','인천 동구 화수2동',5,'5','images/ic/icimg70.jpg'),('카누180','21,000원','인천 남동구 논현1동',1,'7','images/ic/icimg71.jpg'),('구찌 곰돌이 티셔츠','50,000원','인천 부평구 부평1동',5,'6','images/ic/icimg72.jpg'),('보드게임 일괄 가져가실분','나눔?','인천 부평구 부개동',3,'6','images/ic/icimg73.jpg'),('18k반지 한쌍 팝니다','100,000원','인천 서구 가좌동',7,'3','images/ic/icimg74.jpg'),('여행용 캐리어/ 20인치 기내용 캐리어','37,000원','인천 미추홀구 도화2,3동',19,'12','images/ic/icimg75.jpg'),('심플룸 교구장','20,000원','인천 부평구 삼산2동',11,'3','images/ic/icimg76.jpg'),('맥북 프로 2016 15인치','200,000원','인천 계양구 계산3동',6,'3','images/ic/icimg77.jpg'),('65인치 tv 프리즘','150,000원','인천 서구 검암경서동',9,'6','images/ic/icimg78.jpg'),('야마토야 식탁의자 팔아요~','20,000원','인천 부평구 부평3동',11,'6','images/ic/icimg79.jpg'),('위닉스 제습기 16L','150,000원','인천 부평구 삼산2동',5,'3','images/ic/icimg80.jpg'),('셀린느 시계','39,000원','인천 미추홀구 용현동',13,'2','images/ic/icimg81.jpg'),('삼성 제습기','130,000원','인천 연수구 송도동',3,'4','images/ic/icimg82.jpg'),('겔럭시탭 a7 lite','130,000원','인천 부평구 청천동',2,'2','images/ic/icimg83.jpg'),('테이블,냉장고,제빙기,티비등등 물건들 정리합니다','40,000원','인천 남동구 논현고잔동',7,'10','images/ic/icimg84.jpg'),('노트10 액정깨진고장폰','30,000원','인천 남동구 구월1동',9,'9','images/ic/icimg85.jpg'),('수납장 판매','45,000원','인천 남동구 구월1동',29,'6','images/ic/icimg86.jpg'),('먹태깡 4봉 일괄판매','15,000원','인천 연수구 선학동',4,'11','images/ic/icimg87.jpg'),('오쿠사용가능','12,000원','인천 계양구 임학동',6,'7','images/ic/icimg88.jpg'),('레이디 디올 미니백','600,000원','인천 연수구 송도2동',38,'5','images/ic/icimg89.jpg'),('시스템니트셋트','10,000원','인천 연수구 연수2동',3,'2','images/ic/icimg90.jpg'),('장식품 콘솔','10,000원','인천 계양구 작전동',5,'12','images/ic/icimg91.jpg'),('컴퓨터 팝니다','100,000원','인천 남동구 간석동',0,'5','images/ic/icimg92.jpg'),('네스트호텔 숙박권(조식+수영장+바다뷰)','250,000원','인천 부평구 부평2동',39,'6','images/ic/icimg93.jpg'),('양문형 냉장고','15,000원','인천 서구 오류왕길동',0,'4','images/ic/icimg94.jpg'),('써큘레이터 / 선풍기','7,000원','인천 부평구 부개2동',6,'20','images/ic/icimg95.jpg'),('전자렌지','10,000원','인천 연수구 옥련2동',3,'6','images/ic/icimg96.jpg'),('멸균우유','10,000원','인천 미추홀구 주안7동',2,'6','images/ic/icimg97.jpg'),('사무 및 게임도 가능한 컴퓨터 풀세트! (듀얼모니터 가능)','350,000원','인천 서구 청라동',8,'7','images/ic/icimg98.jpg');
/*!40000 ALTER TABLE `incheon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 12:21:31