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
-- Table structure for table `gyeonggi`
--

DROP TABLE IF EXISTS `gyeonggi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gyeonggi` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gyeonggi`
--

LOCK TABLES `gyeonggi` WRITE;
/*!40000 ALTER TABLE `gyeonggi` DISABLE KEYS */;
INSERT INTO `gyeonggi` VALUES ('제습기 팝니다','90,000원','경기도 수원시 영통구 영통동',94,'127','images/gg/ggimg0.jpg'),('제습기','10,000원','경기도 안산시 단원구 와동',9,'30','images/gg/ggimg1.jpg'),('위닉스 DHD169 제습기 팝니다 16리터','70,000원','경기도 수원시 영통구 광교2동',5,'21','images/gg/ggimg2.jpg'),('갤럭시에스23울트라 새폰','289,000원','경기도 수원시 권선구 권선1동',21,'70','images/gg/ggimg3.jpg'),('베트남동 판매해요','73,000원','경기도 용인시 수지구 죽전동',2,'17','images/gg/ggimg4.jpg'),('마이크로 킥보드 맥시','50,000원','경기도 성남시 분당구 정자동',5,'20','images/gg/ggimg5.jpg'),('갤럭시워치5','110,000원','경기도 평택시 비전동',7,'17','images/gg/ggimg6.jpg'),('위닉스 제습기','120,000원','경기도 부천시 중동',14,'29','images/gg/ggimg7.jpg'),('SEDEC 식탁세트판매','300,000원','경기도 성남시 분당구 정자동',55,'26','images/gg/ggimg8.jpg'),('코렐12피스 새상품','10,000원','경기도 화성시 남양읍',8,'7','images/gg/ggimg9.jpg'),('삼성65인치 티비','100,000원','경기도 용인시 수지구 풍덕천2동',13,'11','images/gg/ggimg10.jpg'),('전동 자전거 판매','50,000원','경기도 화성시 장지동',11,'4','images/gg/ggimg11.jpg'),('차량용 냉장고','5,000원','경기도 남양주시 진접읍',7,'14','images/gg/ggimg12.jpg'),('에어팟 5만원','50,000원','경기도 화성시 봉담읍',26,'41','images/gg/ggimg13.jpg'),('가마솥 팝니다','30,000원','경기도 광주시 장지동',9,'8','images/gg/ggimg14.jpg'),('위닉스 제습기','5,000원','경기도 김포시 양촌읍',5,'7','images/gg/ggimg15.jpg'),('아이폰 14 256기가 블루 급처 배터리 100%','500,000원','경기도 화성시 새솔동',12,'25','images/gg/ggimg16.jpg'),('무료로드려요','나눔?','경기도 수원시 영통구 매탄동',1,'33','images/gg/ggimg17.jpg'),('코스트코 창고','300,000원','경기도 광주시 오포읍',43,'9','images/gg/ggimg18.jpg'),('제습기 팝니당','130,000원','경기도 양주시 덕계동',7,'14','images/gg/ggimg20.jpg'),('신세계 상품권 10만원권','80,000원','경기도 시흥시 거모동',12,'37','images/gg/ggimg21.jpg'),('위닉스 제습기.','30,000원','경기도 시흥시 능곡동',3,'10','images/gg/ggimg22.jpg'),('장우산 재고 처분합니다','4,000원','경기도 파주시 동패동',96,'28','images/gg/ggimg23.jpg'),('체인 LV 남자팔찌','95,000원','경기도 화성시 반송동',20,'22','images/gg/ggimg24.jpg'),('캐리어 벽걸이 에어컨 6평형/22년구입(에어컨+실외기)','100,000원','경기도 화성시 병점1동',4,'13','images/gg/ggimg25.jpg'),('메리다 스컬트라 100 로드 자전거','50,000원','경기도 성남시 분당구 서현1동',7,'12','images/gg/ggimg27.jpg'),('전자랜지 8천원','8,000원','경기도 고양시 일산동구 백석동',2,'8','images/gg/ggimg28.jpg'),('에르메스 팔찌 판매합니다','120,000원','경기도 평택시 비전동',20,'32','images/gg/ggimg29.jpg'),('위니아 200리터 냉장고 팔아요','30,000원','경기도 용인시 수지구 성복동',5,'9','images/gg/ggimg30.jpg'),('구찌 가방','70,000원','경기도 성남시 수정구 복정동',14,'7','images/gg/ggimg31.jpg'),('다이슨 청소기','10,000원','경기도 광명시 일직동',4,'5','images/gg/ggimg32.jpg'),('파라솔','100,000원','경기도 광주시 초월읍',13,'10','images/gg/ggimg33.jpg'),('자전거 싸게 팝니다','15,000원','경기도 수원시 영통구 원천동',6,'14','images/gg/ggimg34.jpg'),('캠핑부탄 이소가스 음료 등등','9억 9999만 9999원','경기도 고양시 일산동구 설문동',57,'59','images/gg/ggimg35.jpg'),('먹태깡 2000','2,000원','경기도 의정부시 의정부동',9,'26','images/gg/ggimg36.jpg'),('에어컨 10평형','100,000원','경기도 여주시 가남읍',8,'7','images/gg/ggimg37.jpg'),('아이폰12미니 128','250,000원','경기도 평택시 서정동',4,'9','images/gg/ggimg38.jpg'),('이미스 에코백','14,500원','경기도 용인시 수지구 상현동',6,'12','images/gg/ggimg40.jpg'),('노래방기계','90,000원','경기도 가평군 조종면',8,'5','images/gg/ggimg41.jpg'),('엔화팝니다.. 55000엔','400,000원','경기도 부천시 중4동',15,'49','images/gg/ggimg42.jpg'),('중고 자전거 팝니다','100,000원','경기도 고양시 덕양구 행신1동',26,'18','images/gg/ggimg43.jpg'),('아이폰 11 팝니다','45,000원','경기도 고양시 덕양구 화정2동',0,'7','images/gg/ggimg44.jpg'),('게이밍모니터32인치팔아요','60,000원','경기도 수원시 권선구 금곡동',9,'4','images/gg/ggimg45.jpg'),('냉동고 팝니다.','30,000원','경기도 용인시 수지구 동천동',5,'8','images/gg/ggimg46.jpg'),('아이폰12프러 사시겠다는분 톡주세요','8원','경기도 평택시 비전동',1,'14','images/gg/ggimg47.jpg'),('삼성 창문형 에어컨','250,000원','경기도 수원시 영통구 광교1동',25,'22','images/gg/ggimg48.jpg'),('헬렌카민스키 마리나','50,000원','경기도 고양시 일산서구 송포동',14,'4','images/gg/ggimg49.jpg'),('삼성46인치 스마트티브','50,000원','경기도 화성시 봉담읍',9,'11','images/gg/ggimg50.jpg'),('진공포장기','40,000원','경기도 고양시 일산서구 일산3동',6,'13','images/gg/ggimg51.jpg'),('아이폰14프로 256기가 검정','110만원','경기도 수원시 권선구 권선1동',7,'14','images/gg/ggimg52.jpg'),('컴퓨터 부품 일괄 판매합니다.','20,000원','경기도 화성시 영천동',12,'2','images/gg/ggimg53.jpg'),('z플립','30,000원','경기도 안양시 동안구 부림동',32,'35','images/gg/ggimg54.jpg'),('싱크대 및 육수화구','10,000원','경기도 화성시 동탄1동',4,'9','images/gg/ggimg55.jpg'),('서큘레이터 선풍기','10,000원','경기도 용인시 수지구 동천동',5,'4','images/gg/ggimg56.jpg'),('5도어 냉장고+김냉','50,000원','경기도 화성시 정남면',4,'8','images/gg/ggimg58.jpg'),('남자 LV 모노콤비 팔찌','95,000원','경기도 안양시 동안구 범계동',47,'20','images/gg/ggimg59.jpg'),('삼성스마트 에어컨 16평형 스탠드 2 in 1 팝니다','150,000원','경기도 화성시 동탄1동',6,'5','images/gg/ggimg60.jpg'),('lg트롬 9kg건조기','100,000원','경기도 평택시 비전2동',4,'7','images/gg/ggimg61.jpg'),('아이폰 14','600,000원','경기도 평택시 칠괴동',8,'24','images/gg/ggimg62.jpg'),('필리핀 페소 11717 팔아요','274,000원','경기도 용인시 수지구 죽전동',1,'10','images/gg/ggimg63.jpg'),('찰옥수수30','20,000원','경기도 화성시 양감면',39,'47','images/gg/ggimg64.jpg'),('철제선반 팔아요~','5,000원','경기도 수원시 장안구 율천동',5,'7','images/gg/ggimg65.jpg'),('커피 외믹스커피','50원','경기도 고양시 덕양구 원흥동',10,'35','images/gg/ggimg66.jpg'),('추피의 생활이야기','30,000원','경기도 성남시 분당구 삼평동',1,'10','images/gg/ggimg67.jpg'),('에브리봇 로봇 청소기','10,000원','경기도 성남시 분당구 판교동',3,'5','images/gg/ggimg68.jpg'),('위닉스제습기','110,000원','경기도 용인시 처인구 남사읍',3,'9','images/gg/ggimg69.jpg'),('제작 공구함, 적재함','30,000원','경기도 화성시 안녕동',4,'9','images/gg/ggimg70.jpg'),('케터 우드랜드 야외보관함','50,000원','경기도 수원시 영통구 광교1동',10,'6','images/gg/ggimg71.jpg'),('접이식 캠핑테이블','10,000원','경기도 부천시 원미1동',6,'5','images/gg/ggimg72.jpg'),('위닉스 제습기  10리터','90,000원','경기도 용인시 처인구 양지면',5,'8','images/gg/ggimg73.jpg'),('오덴세 그릇 세트','30,000원','경기도 용인시 수지구 죽전동',12,'7','images/gg/ggimg74.jpg'),('삼성 4도어 냉장고 팝니다.','100,000원','경기도 수원시 권선구 권선동',5,'9','images/gg/ggimg75.jpg'),('에어컨 투인원 판매합니다(21년도 구매)','400,000원','경기도 남양주시 진접읍',2,'4','images/gg/ggimg76.jpg'),('위니아 제습기(8L)','75,000원','경기도 성남시 분당구 야탑동',9,'5','images/gg/ggimg77.jpg'),('먹태깡','2,000원','경기도 파주시 운정2동',3,'9','images/gg/ggimg78.jpg'),('냉장고','120,000원','경기도 성남시 분당구 구미1동',4,'10','images/gg/ggimg79.jpg'),('전자 피아노','20,000원','경기도 남양주시 와부읍',10,'7','images/gg/ggimg80.jpg'),('뉴발란스 M992GR 265','110,000원','경기도 고양시 일산동구 정발산동',7,'10','images/gg/ggimg81.jpg'),('갤럭시워치 4 40mm','50,000원','경기도 김포시 양촌읍',19,'26','images/gg/ggimg82.jpg'),('대림 비데 판매','30,000원','경기도 의정부시 의정부동',4,'5','images/gg/ggimg83.jpg'),('위닉스 제습기','120,000원','경기도 용인시 기흥구 마북동',1,'7','images/gg/ggimg84.jpg'),('예초기 혼다 4싸이클 5회사용','150,000원','경기도 김포시 양촌읍',2,'8','images/gg/ggimg85.jpg'),('주문제작한 선반 판매합니다','45,000원','경기도 시흥시 배곧동',19,'8','images/gg/ggimg86.jpg'),('폴로 정품 반팔티 면티 판매해요','15,000원','경기도 파주시 와동동',11,'15','images/gg/ggimg87.jpg'),('프라다 가방','360,000원','경기도 구리시 수택1동',52,'18','images/gg/ggimg88.jpg'),('회전책장','35,000원','경기도 화성시 동탄1동',10,'5','images/gg/ggimg89.jpg'),('어스본 사운드북 3권(상태좋음)','15,000원','경기도 김포시 운양동',4,'10','images/gg/ggimg90.jpg'),('르쿠르제 17cm 면기 새제품','10,000원','경기도 성남시 분당구 정자2동',1,'8','images/gg/ggimg91.jpg'),('신세계 상품권','45,000원','경기도 수원시 장안구 파장동',12,'18','images/gg/ggimg92.jpg'),('주유보관증 팝니다','100,000원','경기도 고양시 일산서구 일산1동',6,'6','images/gg/ggimg93.jpg'),('선반','10,000원','경기도 수원시 영통구 이의동',14,'5','images/gg/ggimg94.jpg'),('디윌트 충전 햄머드릴 DCD796','120,000원','경기도 광주시 곤지암읍',23,'37','images/gg/ggimg95.jpg'),('ORT 9단계까지 일괄~','200,000원','경기도 용인시 수지구 풍덕천2동',7,'9','images/gg/ggimg96.jpg'),('르젠 선풍기','20,000원','경기도 광명시 광명6동',7,'5','images/gg/ggimg97.jpg'),('여자 목걸이','75,000원','경기도 의정부시 의정부3동',25,'31','images/gg/ggimg98.jpg');
/*!40000 ALTER TABLE `gyeonggi` ENABLE KEYS */;
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
