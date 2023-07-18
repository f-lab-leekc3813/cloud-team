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
-- Table structure for table `jeonbuk`
--

DROP TABLE IF EXISTS `jeonbuk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jeonbuk` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jeonbuk`
--

LOCK TABLES `jeonbuk` WRITE;
/*!40000 ALTER TABLE `jeonbuk` DISABLE KEYS */;
INSERT INTO `jeonbuk` VALUES ('제습기','50,000원','전북 전주시 완산구 삼천3동',6,'22','images/jb/jbimg0.jpg'),('현무암 50t  부정형 팔아요','28,000원','전북 전주시 완산구 평화동2가',19,'25','images/jb/jbimg1.jpg'),('SK건조기 (전기식) 팔아요','40,000원','전북 전주시 덕진구 송천동2가',3,'10','images/jb/jbimg2.jpg'),('냉장고 4도어 854리터 팔아요','200,000원','전북 전주시 완산구 효자1동',11,'9','images/jb/jbimg3.jpg'),('갤럭시 S23 울트라 팝니다','238,000원','전북 군산시 조촌동',34,'92','images/jb/jbimg4.jpg'),('LG 통돌이세탁기 16kg 이사가면서 내놓습니다.','50,000원','전북 전주시 완산구 평화동2가',6,'8','images/jb/jbimg6.jpg'),('보쉬 10.8 전동드릴','15,000원','전북 전주시 덕진구 진북동',4,'8','images/jb/jbimg7.jpg'),('LG 트롬 건조기','200,000원','전북 전주시 완산구 중화산동2가',3,'8','images/jb/jbimg8.jpg'),('원목2단선반','3,000원','전북 군산시 조촌동',10,'3','images/jb/jbimg9.jpg'),('와이드 3단 서랍장','20,000원','전북 전주시 완산구 효자동3가',11,'11','images/jb/jbimg10.jpg'),('카페정리 합니다','500만원','전북 전주시 덕진구 인후3동',13,'9','images/jb/jbimg11.jpg'),('웅진 제습기팝니다','50,000원','전북 전주시 덕진구 송천2동',2,'12','images/jb/jbimg12.jpg'),('조말론향수   새상품','45,000원','전북 익산시 마동',23,'24','images/jb/jbimg13.jpg'),('냉동고 입니다','120,000원','전북 전주시 덕진구 송천1동',12,'9','images/jb/jbimg14.jpg'),('한국도자기 수저세트','5,000원','전북 전주시 완산구 중화산동2가',38,'27','images/jb/jbimg15.jpg'),('원목 행거 선반','40,000원','전북 전주시 덕진구 덕진동',10,'7','images/jb/jbimg16.jpg'),('크록스 바야밴드 네비이, 검은색 새상품 팝니다','25,000원','전북 전주시 덕진구 송천동1가',33,'29','images/jb/jbimg17.jpg'),('(7평형 )위니아 에어컨(냉난방기) 벽걸이','270,000원','전북 전주시 완산구 중화산2동',11,'14','images/jb/jbimg18.jpg'),('아이폰 13프로 팝니다!!','800,000원','전북 전주시 완산구 효자동1가',4,'10','images/jb/jbimg19.jpg'),('무선청소기 차이슨','15,000원','전북 전주시 완산구 효자동3가',3,'4','images/jb/jbimg20.jpg'),('물건이 너무 많아 완전저렴하게 내놨어요~','5,000원','전북 전주시 완산구 태평동',17,'11','images/jb/jbimg21.jpg'),('쌀20kg','40,000원','전북 전주시 덕진구 인후동1가',1,'8','images/jb/jbimg22.jpg'),('애플워치 울트라 팔아요','800,000원','전북 전주시 완산구 풍남동',9,'10','images/jb/jbimg23.jpg'),('냉장고','100,000원','전북 익산시 금마면',3,'8','images/jb/jbimg24.jpg'),('삼성 2in1에어컨 팝니다','550,000원','전북 전주시 덕진구 송천동2가',3,'4','images/jb/jbimg25.jpg'),('옷수납함 팔아여','1,000원','전북 정읍시 신정동',5,'5','images/jb/jbimg27.jpg'),('식탁 의자 세트','20,000원','전북 군산시 소룡동',4,'2','images/jb/jbimg28.jpg'),('다이슨 에어랩 퍼플','390,000원','전북 전주시 덕진구 만성동',4,'2','images/jb/jbimg29.jpg'),('선풍기 팔아요~','10,000원','전북 정읍시 수성동',3,'12','images/jb/jbimg30.jpg'),('세탁기15kg','50,000원','전북 전주시 덕진구 조촌동',2,'6','images/jb/jbimg32.jpg'),('3단 선반','20,000원','전북 전주시 덕진구 인후동1가',8,'4','images/jb/jbimg33.jpg'),('아이폰 12미니 글 필독!','117,000원','전북 전주시 완산구 효자동1가',12,'13','images/jb/jbimg34.jpg'),('갤럭시워치5 40m 팔아요','190,000원','전북 익산시 부송동',13,'7','images/jb/jbimg35.jpg'),('(급처)삼성 스마트 50인치 LED tv','200,000원','전북 익산시 삼성동',1,'1','images/jb/jbimg36.jpg'),('삼성 하우젠에어컨 2in1','150,000원','전북 군산시 지곡동',2,'4','images/jb/jbimg37.jpg'),('차량용 무선 청소기','1,500원','전북 전주시 완산구 평화동2가',2,'3','images/jb/jbimg38.jpg'),('서랍장필요한분!','30,000원','전북 정읍시 상동',6,'3','images/jb/jbimg39.jpg'),('에어컨','300,000원','전북 군산시 나운2동',3,'4','images/jb/jbimg40.jpg'),('LG휘센 2in1 에어컨(실외기포함)','350,000원','전북 군산시 대명동',3,'5','images/jb/jbimg42.jpg'),('삼성 갤럭시 S23 울트라 팔아요','248,000원','전북 전주시 완산구 삼천1동',23,'43','images/jb/jbimg43.jpg'),('회전책장 아기책장','70,000원','전북 전주시 완산구 중화산동2가',14,'4','images/jb/jbimg44.jpg'),('텐트천막 판매합니다','200,000원','전북 전주시 완산구 동서학동',18,'5','images/jb/jbimg45.jpg'),('토분,빈티지토분,이태리토분 화분받침 팝니다(남아있는 화분)','2,000원','전북 군산시 미성동',9,'11','images/jb/jbimg46.jpg'),('냉장고','100,000원','전북 완주군 소양면',5,'6','images/jb/jbimg47.jpg'),('발도르프 레인보우 교구 5종','50,000원','전북 전주시 완산구 효자동1가',7,'6','images/jb/jbimg48.jpg'),('코렐 식기','30,000원','전북 정읍시 연지동',2,'6','images/jb/jbimg49.jpg'),('청암산 방갈로 양도','123만 4567원','전북 군산시 나운동',2,'5','images/jb/jbimg50.jpg'),('간이 접이식 침대','10,000원','전북 남원시 향교동',2,'1','images/jb/jbimg51.jpg'),('갤럭시s20 128기가','180,000원','전북 군산시 서흥남동',3,'6','images/jb/jbimg52.jpg'),('버즈 +','10,000원','전북 익산시 모현동',3,'5','images/jb/jbimg53.jpg'),('시어머니 시집올때부터 사용하던 재봉틀 입니다','90원','전북 군산시 삼학동',4,'4','images/jb/jbimg54.jpg'),('신세계상품권 20만원','180,000원','전북 전주시 완산구 효자동3가',1,'5','images/jb/jbimg55.jpg'),('24인치 자전거','70,000원','전북 전주시 덕진구 송천동2가',4,'2','images/jb/jbimg56.jpg'),('판도라 팔찌','60,000원','전북 전주시 완산구 서신동',12,'2','images/jb/jbimg57.jpg'),('동국제약 센텔리안24 시즌5 마데카크림','10,000원','전북 전주시 완산구 삼천3동',2,'2','images/jb/jbimg58.jpg'),('야외원목테이블','100,000원','전북 전주시 덕진구 송천동2가',22,'5','images/jb/jbimg59.jpg'),('케리어 에어컨 2in1 냉난방 실외기포함','500,000원','전북 전주시 완산구 효자5동',5,'11','images/jb/jbimg60.jpg'),('세탁기','50,000원','전북 전주시 덕진구 금암1동',4,'14','images/jb/jbimg61.jpg'),('구찌지갑','30,000원','전북 전주시 완산구 효자동3가',13,'6','images/jb/jbimg62.jpg'),('제빙기','150,000원','전북 전주시 덕진구 우아2동',6,'6','images/jb/jbimg63.jpg'),('전기 전압 테스트기','5,000원','전북 익산시 신동',2,'3','images/jb/jbimg64.jpg'),('치약판매합니다.','1,000원','전북 정읍시 상동',7,'13','images/jb/jbimg65.jpg'),('고추건조기 팝니다.','150,000원','전북 익산시 모현동',3,'5','images/jb/jbimg66.jpg'),('전축','50,000원','전북 전주시 완산구 효자동1가',10,'12','images/jb/jbimg67.jpg'),('컴퓨터 책상 3만원입니다','30,000원','전북 남원시 월락동',9,'9','images/jb/jbimg68.jpg'),('그레이 갤럭시 s20+5g  팝니다 256기가','100,000원','전북 전주시 완산구 효자동3가',10,'9','images/jb/jbimg70.jpg'),('미니냉장고','60,000원','전북 전주시 덕진구 여의동',4,'3','images/jb/jbimg71.jpg'),('직구 믹서기','10,000원','전북 전주시 완산구 교동',6,'3','images/jb/jbimg72.jpg'),('돌쇼파','200,000원','전북 전주시 완산구 서신동',6,'5','images/jb/jbimg73.jpg'),('인셀덤 화장품','18,000원','전북 전주시 완산구 서신동',20,'8','images/jb/jbimg74.jpg'),('나무 수납','30,000원','전북 전주시 덕진구 우아2동',36,'7','images/jb/jbimg75.jpg'),('온수매트','나눔?','전북 익산시 영등1동',2,'5','images/jb/jbimg76.jpg'),('게이밍 컴퓨터','600,000원','전북 전주시 덕진구 금암1동',3,'6','images/jb/jbimg77.jpg'),('이번주에 가져가시면 10만원에 드릴께요','100,000원','전북 익산시 삼성동',1,'1','images/jb/jbimg78.jpg'),('자동차 워셔액 팝니다','500원','전북 익산시 마동',8,'4','images/jb/jbimg79.jpg'),('lg 다이아몬드 통돌이세탁기 17kg','100,000원','전북 전주시 완산구 평화동2가',1,'4','images/jb/jbimg80.jpg'),('추피','60,000원','전북 전주시 덕진구 금암동',3,'10','images/jb/jbimg82.jpg'),('카페용품 풀세트 급처합니다','350만원','전북 전주시 덕진구 금암1동',16,'12','images/jb/jbimg83.jpg'),('캠핑용품(2버너,1버너,코펠,선풍기,렌턴)','5,000원','전북 군산시 조촌동',9,'15','images/jb/jbimg84.jpg'),('철제 의자 테이블 셋트','100,000원','전북 전주시 완산구 동서학동',15,'5','images/jb/jbimg85.jpg'),('임팩 팔아요','50,000원','전북 전주시 완산구 중화산2동',10,'5','images/jb/jbimg86.jpg'),('블랙야크 안전화','20,000원','전북 전주시 덕진구 우아2동',1,'3','images/jb/jbimg87.jpg'),('육각렌치','15,000원','전북 전주시 완산구 서신동',4,'2','images/jb/jbimg88.jpg'),('손.청소기','10,000원','전북 김제시 공덕면',4,'3','images/jb/jbimg89.jpg'),('딤채냉장고','50,000원','전북 전주시 완산구 효자동3가',2,'3','images/jb/jbimg90.jpg'),('원목 2단 선반 1000','10,000원','전북 익산시 삼성동',3,'1','images/jb/jbimg91.jpg'),('아이브 포카 양도','10,000원','전북 군산시 지곡동',8,'9','images/jb/jbimg92.jpg'),('아이폰12미니128기가팝니다.','300,000원','전북 정읍시 시기동',2,'4','images/jb/jbimg93.jpg'),('삼단 서랍장','30,000원','전북 익산시 영등1동',4,'2','images/jb/jbimg94.jpg'),('카봇 또봇 일괄 5만원에 팝니다!!!','50,000원','전북 군산시 나운3동',0,'3','images/jb/jbimg95.jpg');
/*!40000 ALTER TABLE `jeonbuk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 12:21:28
