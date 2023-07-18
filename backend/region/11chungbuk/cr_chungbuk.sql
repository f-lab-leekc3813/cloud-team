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
-- Table structure for table `chungbuk`
--

DROP TABLE IF EXISTS `chungbuk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chungbuk` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chungbuk`
--

LOCK TABLES `chungbuk` WRITE;
/*!40000 ALTER TABLE `chungbuk` DISABLE KEYS */;
INSERT INTO `chungbuk` VALUES ('위닉스 제습기 판매','80,000원','충북 충주시 용산동',6,'16','images/cb/cbimg0.jpg'),('냉동고 막쓰실분','30,000원','충북 충주시 지현동',5,'2','images/cb/cbimg1.jpg'),('매장 물건들 정리합니다. 냉장고 테이블 냉동고 포스 커피머신 제빙기 해먹 등등','1,000원','충북 청주시 상당구 중앙동',13,'19','images/cb/cbimg2.jpg'),('접이식 4단 수납다이장 판매','15,000원','충북 충주시 연수동',14,'21','images/cb/cbimg3.jpg'),('사무실 정리합니다','1원','충북 충주시 칠금.금릉동',3,'14','images/cb/cbimg4.jpg'),('빨리 오시는 분 드려요','70,000원','충북 진천군 문백면',13,'5','images/cb/cbimg5.jpg'),('제습기','100,000원','충북 충주시 호암동',4,'9','images/cb/cbimg6.jpg'),('아이폰11프로(배터리 92%)','380,000원','충북 증평군 증평읍',19,'28','images/cb/cbimg7.jpg'),('위닉스 제습기 16L(설명 필수 읽기)','55,000원','충북 청주시 서원구 사창동',11,'14','images/cb/cbimg8.jpg'),('무선청소기','20,000원','충북 음성군 금왕읍',2,'9','images/cb/cbimg9.jpg'),('원목 선반','10,000원','충북 음성군 맹동면',5,'5','images/cb/cbimg10.jpg'),('다용도 나무선반','2,000원','충북 청주시 청원구 오창읍',4,'7','images/cb/cbimg11.jpg'),('테이블,의자셋트','50,000원','충북 충주시 중앙탑면',10,'7','images/cb/cbimg12.jpg'),('LG 냉장고','150,000원','충북 청주시 서원구 수곡2동',3,'8','images/cb/cbimg13.jpg'),('5단 서랍장','40,000원','충북 청주시 서원구 분평동',18,'11','images/cb/cbimg14.jpg'),('웨건','5,000원','충북 청주시 흥덕구 비하동',29,'26','images/cb/cbimg15.jpg'),('전동드릴','30,000원','충북 진천군 진천읍',5,'3','images/cb/cbimg16.jpg'),('공구','10,000원','충북 청주시 서원구 분평동',12,'22','images/cb/cbimg17.jpg'),('루컴즈 이동식 창문형 에어콘 팝니다','100,000원','충북 청주시 서원구 모충동',4,'5','images/cb/cbimg18.jpg'),('씨티100','50,000원','충북 청주시 흥덕구 오송읍',1,'2','images/cb/cbimg19.jpg'),('서큘레이터입니다','8,000원','충북 청주시 흥덕구 가경동',6,'14','images/cb/cbimg20.jpg'),('게이밍 의자','20,000원','충북 진천군 진천읍',3,'7','images/cb/cbimg21.jpg'),('에어컨 처분','300,000원','충북 음성군 맹동면',3,'8','images/cb/cbimg22.jpg'),('14kg 세탁기는 아직 새것이라 이사를 가느라 가져오지 못해서 판매합니다','80,000원','충북 음성군 대소면',3,'6','images/cb/cbimg23.jpg'),('아임삭 송풍기 ab-414w 베어툴','50,000원','충북 청주시 상당구 금천동',17,'12','images/cb/cbimg24.jpg'),('식당테이블','50,000원','충북 제천시 신백동',9,'11','images/cb/cbimg25.jpg'),('린나인3구 가스레인지 LPG','50,000원','충북 청주시 청원구 율량.사천동',5,'6','images/cb/cbimg26.jpg'),('막쓰실분','30,000원','충북 충주시 지현동',2,'2','images/cb/cbimg27.jpg'),('서큘레이터','17,500원','충북 진천군 덕산읍',6,'4','images/cb/cbimg28.jpg'),('장식장(세로 서랍장) 싸게 내놓아요','5,000원','충북 청주시 흥덕구 오송읍',14,'6','images/cb/cbimg29.jpg'),('아람지식특공대','50,000원','충북 청주시 흥덕구 송절동',6,'8','images/cb/cbimg30.jpg'),('금팔찌\'팔아요','250,000원','충북 제천시 청전동',8,'10','images/cb/cbimg31.jpg'),('겔럭시21 256 화이트(SK)','290,000원','충북 청주시 청원구 오창읍',6,'16','images/cb/cbimg32.jpg'),('업소용 냉장고 판매합니다.','50,000원','충북 청주시 흥덕구 송정동',4,'6','images/cb/cbimg33.jpg'),('노트북 팔아요','250,000원','충북 청주시 서원구 수곡1동',0,'4','images/cb/cbimg34.jpg'),('업소용제빙기','200,000원','충북 청주시 서원구 사창동',7,'10','images/cb/cbimg35.jpg'),('남자시계','150,000원','충북 청주시 흥덕구 봉명동',9,'10','images/cb/cbimg36.jpg'),('앵글선반','50,000원','충북 충주시 목행.용탄동',1,'3','images/cb/cbimg37.jpg'),('벽걸이에어컨','50,000원','충북 충주시 지현동',8,'12','images/cb/cbimg38.jpg'),('이사갑니다','10,000원','충북 청주시 상당구 금천동',7,'4','images/cb/cbimg39.jpg'),('무료드림','나눔?','충북 청주시 서원구 남이면',3,'5','images/cb/cbimg40.jpg'),('씽크대팔아요','20,000원','충북 음성군 금왕읍',23,'25','images/cb/cbimg41.jpg'),('챆꽂이','1,000원','충북 충주시 연수동',8,'20','images/cb/cbimg42.jpg'),('냉장고팝니다','12,345원','충북 충주시 지현동',8,'11','images/cb/cbimg44.jpg'),('금반지 금팔찌 팝니나','325,000원','충북 청주시 청원구 율량.사천동',12,'14','images/cb/cbimg45.jpg'),('먹태깡 팔아요!','5,000원','충북 충주시 연수동',2,'4','images/cb/cbimg46.jpg'),('캐리어예요','20,000원','충북 충주시 중앙탑면',2,'3','images/cb/cbimg47.jpg'),('김치냉장고','30,000원','충북 충주시 대소원면',10,'21','images/cb/cbimg48.jpg'),('코렐 그릇팝니다','60,000원','충북 제천시 하소동',5,'2','images/cb/cbimg49.jpg'),('냉장고 가져가실분','10,000원','충북 청주시 청원구 주중동',0,'3','images/cb/cbimg50.jpg'),('아이폰14프로맥스 512 기가 자급제 팝니다','145만원','충북 음성군 삼성면',1,'8','images/cb/cbimg51.jpg'),('하우스 제작품','250,000원','충북 단양군 매포읍',15,'11','images/cb/cbimg52.jpg'),('수납장 협탁 팔아요','25,000원','충북 청주시 청원구 우암동',20,'8','images/cb/cbimg53.jpg'),('카페 포크','25,000원','충북 청주시 청원구 율량.사천동',9,'10','images/cb/cbimg54.jpg'),('쿠쿠 3인용 밥솥','10,000원','충북 진천군 진천읍',1,'4','images/cb/cbimg55.jpg'),('무풍에어컨','650,000원','충북 청주시 청원구 오창읍',9,'6','images/cb/cbimg56.jpg'),('아이폰12 128 화이트 팝니다.','420,000원','충북 청주시 흥덕구 가경동',2,'6','images/cb/cbimg57.jpg'),('로즈골드 반지','20,000원','충북 청주시 서원구 분평동',0,'6','images/cb/cbimg58.jpg'),('슈퍼싱글 프레임 판매합니다','10,000원','충북 청주시 흥덕구 복대2동',1,'3','images/cb/cbimg59.jpg'),('써큘레이터  선풍기','10,000원','충북 청주시 흥덕구 강서동',3,'8','images/cb/cbimg60.jpg'),('보아르 모아 미니 제습기','10,000원','충북 충주시 호암.직동',6,'7','images/cb/cbimg61.jpg'),('삼성 2in1 에어컨','200,000원','충북 충주시 호암.직동',5,'4','images/cb/cbimg62.jpg'),('주문진 숙소','50,000원','충북 청주시 상당구 탑동',11,'4','images/cb/cbimg63.jpg'),('구매 대행 해주실붐 수고비 드림','5,000원','충북 청주시 흥덕구 신봉동',3,'2','images/cb/cbimg64.jpg'),('맘스보드 자석칠판','15,000원','충북 청주시 흥덕구 복대동',9,'4','images/cb/cbimg65.jpg'),('업소용 씽크대','50,000원','충북 청주시 서원구 사창동',2,'3','images/cb/cbimg66.jpg'),('GUCCI','90,000원','충북 증평군 증평읍',7,'8','images/cb/cbimg67.jpg'),('에어컨 온풍기다되는 스탠드형 에어컨판매합니다','1원','충북 청주시 청원구 오창읍',2,'5','images/cb/cbimg68.jpg'),('새제품 캠핑용품 싸게 일괄 정리해요','700,000원','충북 청주시 청원구 율량.사천동',6,'4','images/cb/cbimg69.jpg'),('삼성게이밍노트북','400,000원','충북 청주시 서원구 성화.개신.죽림동',3,'5','images/cb/cbimg70.jpg'),('갤럭시 노트9','100,000원','충북 청주시 흥덕구 복대2동',10,'10','images/cb/cbimg71.jpg'),('캐리어 에어컨 2in1(2018년식)','350,000원','충북 청주시 서원구 분평동',6,'9','images/cb/cbimg72.jpg'),('팔찌','610,000원','충북 청주시 상당구 금천동',15,'10','images/cb/cbimg73.jpg'),('whisen에어컨','100,000원','충북 청주시 서원구 사직동',1,'9','images/cb/cbimg74.jpg'),('위닉스제습기 판매합니다','150,000원','충북 청주시 서원구 사직2동',17,'8','images/cb/cbimg75.jpg'),('토퍼 매트리스','20,000원','충북 청주시 청원구 율량.사천동',4,'3','images/cb/cbimg76.jpg'),('가스레인지 판매','10,000원','충북 제천시 영서동',2,'3','images/cb/cbimg77.jpg'),('캐리어 에어컨 스탠드형','300,000원','충북 청주시 청원구 주중동',5,'2','images/cb/cbimg78.jpg'),('샤오미 전동킥보드','65,000원','충북 청주시 청원구 주성동',5,'6','images/cb/cbimg79.jpg'),('물티슈','22,000원','충북 진천군 진천읍',9,'6','images/cb/cbimg80.jpg'),('특등급 삼광쌀 10kg','23,000원','충북 청주시 흥덕구 복대1동',2,'3','images/cb/cbimg81.jpg'),('시스템행거(화장대포함) 새상품 판매합니다.','300,000원','충북 청주시 서원구 사직동',15,'6','images/cb/cbimg83.jpg'),('의자','20,000원','충북 충주시 중앙탑면',6,'11','images/cb/cbimg84.jpg'),('캐리어 아이스박스 50리터 새상품','30,000원','충북 청주시 상당구 용정동',16,'8','images/cb/cbimg85.jpg'),('lg 트롬 건조기 9kg','150,000원','충북 청주시 서원구 사직2동',7,'3','images/cb/cbimg86.jpg'),('카놀라유 참치 팝니다','20,000원','충북 청주시 상당구 금천동',3,'3','images/cb/cbimg87.jpg'),('자전거','10,000원','충북 청주시 청원구 오창읍',9,'15','images/cb/cbimg88.jpg'),('기타, 기타거치대 세트','20,000원','충북 청주시 서원구 성화.개신.죽림동',3,'3','images/cb/cbimg89.jpg'),('타이어,중고타이어 팝니다','20,000원','충북 청주시 청원구 오창읍',38,'21','images/cb/cbimg90.jpg'),('서랍형 책상 판매합니다','40,000원','충북 청주시 서원구 수곡동',17,'6','images/cb/cbimg91.jpg'),('이사로 인한 식탁 팝니다 (내일아침가져가실분)','35,000원','충북 청주시 흥덕구 가경동',10,'7','images/cb/cbimg92.jpg'),('밀레 청소기','20,000원','충북 청주시 흥덕구 가경동',4,'5','images/cb/cbimg93.jpg'),('타이니모빌','6,000원','충북 청주시 청원구 오창읍',0,'2','images/cb/cbimg94.jpg'),('나이키 정품','50,000원','충북 진천군 덕산읍',24,'7','images/cb/cbimg95.jpg'),('신발장, 신발수납장','20,000원','충북 청주시 서원구 사창동',71,'17','images/cb/cbimg96.jpg'),('편백나무 침대프레임','50,000원','충북 청주시 서원구 사창동',21,'10','images/cb/cbimg97.jpg');
/*!40000 ALTER TABLE `chungbuk` ENABLE KEYS */;
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
