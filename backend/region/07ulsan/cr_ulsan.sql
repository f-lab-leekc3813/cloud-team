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
-- Table structure for table `ulsan`
--

DROP TABLE IF EXISTS `ulsan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ulsan` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` int DEFAULT NULL,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ulsan`
--

LOCK TABLES `ulsan` WRITE;
/*!40000 ALTER TABLE `ulsan` DISABLE KEYS */;
INSERT INTO `ulsan` VALUES ('명품 다 정리합니다','999만 9999원','울산 울주군 범서읍',43,51,'images/us/usimg0.jpg'),('울산서머페스티벌 티켓 양도','12원','울산 북구 염포동',1,17,'images/us/usimg1.jpg'),('명품 다 정리합니다','999만 9999원','울산 울주군 범서읍',11,35,'images/us/usimg2.jpg'),('가게 정리합니다','1,000원','울산 울주군 범서읍',4,1,'images/us/usimg3.jpg'),('냉장고 팝니다!','70,000원','울산 북구 화봉동',6,9,'images/us/usimg4.jpg'),('삼성 제습기 거의 사용 안함','100,000원','울산 남구 삼산동',8,6,'images/us/usimg5.jpg'),('경주펜션 양도합니다','130,000원','울산 북구 매곡동',20,10,'images/us/usimg6.jpg'),('위닉스 14L 제습기','130,000원','울산 동구 서부동',16,11,'images/us/usimg7.jpg'),('모토벨로 전기자전거 팝니다. 빨리오시는분 우선 판매','170,000원','울산 남구 달동',12,6,'images/us/usimg8.jpg'),('선풍기 판매','5,000원','울산 중구 반구동',6,6,'images/us/usimg9.jpg'),('타보 휴대용 유모차','1,000원','울산 북구 화봉동',3,4,'images/us/usimg10.jpg'),('명품 다 정리합니다','999만 9999원','울산 울주군 온산읍',11,22,'images/us/usimg11.jpg'),('LG led tv 55인치','100,000원','울산 남구 신정동',5,8,'images/us/usimg12.jpg'),('이케아 3단 트롤리','15,000원','울산 남구 신정3동',4,4,'images/us/usimg13.jpg'),('주민증 주웠어요','1원','울산 울주군 범서읍',0,6,'images/us/usimg14.jpg'),('이동식 에어컨','90,000원','울산 울주군 온양읍',2,3,'images/us/usimg15.jpg'),('그레이트북스 놀라운자연 전집 판매합니다.','120,000원','울산 중구 유곡동',9,7,'images/us/usimg16.jpg'),('캣타워','20,000원','울산 중구 서동',13,11,'images/us/usimg17.jpg'),('삼성 무풍 에어컨 팝니다','500,000원','울산 북구 염포동',1,5,'images/us/usimg18.jpg'),('위닉스 제습기(10L)팝니다','70,000원','울산 중구 유곡동',4,11,'images/us/usimg19.jpg'),('여러시계 정품만 판매합니다','1000만원','울산 울주군 범서읍',7,7,'images/us/usimg20.jpg'),('평상','200,000원','울산 남구 삼산동',29,6,'images/us/usimg21.jpg'),('이엠텍 GTX 1060 3g 잠시 판매보류','50,000원','울산 중구 복산2동',12,8,'images/us/usimg22.jpg'),('그레이트북스 놀라운자연','170,000원','울산 북구 화봉동',7,8,'images/us/usimg23.jpg'),('TV55인치급처합니다','100,000원','울산 동구 방어동',6,6,'images/us/usimg24.jpg'),('삼성버즈 2팔아요','30,000원','울산 중구 태화동',9,15,'images/us/usimg25.jpg'),('냉장고','30,000원','울산 남구 수암동',3,12,'images/us/usimg26.jpg'),('나무 선반','5,000원','울산 남구 신정3동',3,5,'images/us/usimg27.jpg'),('미니백','320,000원','울산 중구 병영2동',12,9,'images/us/usimg28.jpg'),('컨테이너','100만원','울산 중구 복산동',31,22,'images/us/usimg29.jpg'),('세탁기','20,000원','울산 동구 방어동',2,5,'images/us/usimg30.jpg'),('☕️카페 재고 정리 중☕️린넨','1,500원','울산 남구 삼산동',10,8,'images/us/usimg31.jpg'),('이동식 에어컨 냉방기 원룸에어컨','100,000원','울산 중구 성안동',4,4,'images/us/usimg32.jpg'),('구찌 백팩','130,000원','울산 남구 옥동',9,7,'images/us/usimg33.jpg'),('lg 에어컨 팔아요','400,000원','울산 동구 전하2동',2,7,'images/us/usimg34.jpg'),('목재(합판, 각목, 루바)','120,000원','울산 남구 무거동',3,10,'images/us/usimg35.jpg'),('미사용 삼성디지털인버터 9kg 드럼세탁기 판매해요','150,000원','울산 북구 연암동',2,4,'images/us/usimg36.jpg'),('경주 라한호텔 숙박권(조식포함)','330,000원','울산 동구 화정동',5,7,'images/us/usimg37.jpg'),('실리트냄비세트','30,000원','울산 울주군 범서읍',2,2,'images/us/usimg38.jpg'),('책.','3,000원','울산 울주군 범서읍',2,6,'images/us/usimg39.jpg'),('아이폰 Xr 부품용','50,000원','울산 동구 방어동',2,8,'images/us/usimg40.jpg'),('딸이스던거','3,000원','울산 북구 화봉동',1,2,'images/us/usimg41.jpg'),('삼성 아기사랑 세탁기','100,000원','울산 남구 수암동',10,5,'images/us/usimg42.jpg'),('고프로','50,000원','울산 남구 두왕동',8,9,'images/us/usimg43.jpg'),('장식장','50,000원','울산 남구 삼산동',6,5,'images/us/usimg44.jpg'),('겔럭시워치','100,000원','울산 북구 농소2동',14,11,'images/us/usimg45.jpg'),('캠핑용품','50,000원','울산 남구 삼산동',3,2,'images/us/usimg46.jpg'),('모닝 타이어','100,000원','울산 중구 다운동',0,13,'images/us/usimg47.jpg'),('헬렌카민스키 비앙카','75,000원','울산 남구 옥동',2,5,'images/us/usimg48.jpg'),('한샘 키즈 수납장','20,000원','울산 남구 야음동',4,4,'images/us/usimg49.jpg'),('자전거 팝니다','15,000원','울산 남구 대현동',2,2,'images/us/usimg50.jpg'),('보니 아기침대','5,000원','울산 남구 수암동',1,4,'images/us/usimg51.jpg'),('선반 수납장 팝니다','50,000원','울산 남구 달동',38,6,'images/us/usimg52.jpg'),('여름셋업','8,000원','울산 남구 달동',12,3,'images/us/usimg53.jpg'),('세탁기팔아요','150,000원','울산 중구 태화동',4,7,'images/us/usimg54.jpg'),('베트남 동','120,000원','울산 북구 산하동',1,5,'images/us/usimg55.jpg'),('소베맘 기저귀갈이대','40,000원','울산 남구 달동',6,5,'images/us/usimg56.jpg'),('리바트책장','10,000원','울산 북구 송정동',15,6,'images/us/usimg57.jpg'),('우유판매','20,000원','울산 중구 반구2동',10,10,'images/us/usimg58.jpg'),('가죽팔찌','20,000원','울산 북구 염포동',2,2,'images/us/usimg59.jpg'),('새수건판매','15,000원','울산 남구 삼산동',4,9,'images/us/usimg60.jpg'),('다이슨 무선 청소기','40,000원','울산 울주군 청량읍',4,4,'images/us/usimg61.jpg'),('문화상품권 팝니다','15,000원','울산 남구 삼산동',1,7,'images/us/usimg62.jpg'),('양산 배내골 인근 글램핑 숙박권 양도 합니다.','150,000원','울산 남구 야음동',33,5,'images/us/usimg63.jpg'),('이케아 벤자민고무나무(조화)','30,000원','울산 남구 야음장생포동',3,2,'images/us/usimg64.jpg'),('삼성 아기사랑 세탁기','100,000원','울산 남구 삼산동',10,5,'images/us/usimg65.jpg'),('벽걸이 에어컨 판매','50,000원','울산 중구 다운동',1,4,'images/us/usimg66.jpg'),('에그녹 6y','35,000원','울산 남구 무거동',4,6,'images/us/usimg67.jpg'),('파세코 창문형에어컨 pwa 2100w','250,000원','울산 울주군 언양읍',11,8,'images/us/usimg68.jpg'),('공구셋트','30,000원','울산 남구 삼산동',1,3,'images/us/usimg69.jpg'),('미니재봉틀','10,000원','울산 북구 명촌동',9,6,'images/us/usimg70.jpg'),('MCM백팩 L 사이즈','60,000원','울산 남구 달동',9,6,'images/us/usimg71.jpg'),('햇반 컵밥','12,000원','울산 중구 반구동',4,3,'images/us/usimg72.jpg'),('위닉스 건조기 2세대 팔아요','164,316원','울산 남구 신정2동',10,2,'images/us/usimg73.jpg'),('아이폰14프로맥스딥퍼플256기가 팝니다','100만원','울산 울주군 온산읍',4,2,'images/us/usimg74.jpg'),('몬스테라 알보 (완료)','50,000원','울산 남구 삼산동',19,8,'images/us/usimg75.jpg'),('리바트 5단 서랍장 아기서랍장 옷정리','50,000원','울산 중구 다운동',16,5,'images/us/usimg76.jpg'),('명품시계','350원','울산 남구 무거동',5,15,'images/us/usimg77.jpg'),('1구인덕션','10,000원','울산 북구 농소2동',3,6,'images/us/usimg78.jpg'),('귀여운 써큘선풍기 올려요~','5,000원','울산 울주군 언양읍',3,8,'images/us/usimg79.jpg'),('명품 다 정리합니다','999만 9999원','울산 울주군 온산읍',7,17,'images/us/usimg80.jpg'),('p11 레노버 테블릿 4/64','90,000원','울산 중구 복산2동',20,11,'images/us/usimg81.jpg'),('청소기','5,000원','울산 북구 송정동',3,3,'images/us/usimg82.jpg'),('세탁기 팝니다.','30,000원','울산 남구 달동',0,2,'images/us/usimg83.jpg'),('여행가방 기내용 18인치 캐리어','10,000원','울산 남구 신정2동',12,4,'images/us/usimg84.jpg'),('화분 팝니다','10,000원','울산 남구 달동',3,10,'images/us/usimg85.jpg'),('버너판매','50,000원','울산 울주군 범서읍',2,1,'images/us/usimg86.jpg'),('위닉스 제습기 13L','90,000원','울산 울주군 언양읍',2,4,'images/us/usimg87.jpg'),('제습기 팔아요!!','35,000원','울산 남구 무거동',8,5,'images/us/usimg88.jpg'),('바베큐그릴','10,000원','울산 동구 남목1동',12,14,'images/us/usimg89.jpg'),('삼성 청소기','5,000원','울산 동구 서부동',1,2,'images/us/usimg90.jpg'),('화물용 케리어','20,000원','울산 남구 신정동',18,7,'images/us/usimg91.jpg'),('수국팔아요','1원','울산 북구 화봉동',2,5,'images/us/usimg92.jpg'),('먹태깡','2,000원','울산 중구 다운동',3,5,'images/us/usimg93.jpg'),('이케아 슬렉트 침대','10,000원','울산 중구 유곡동',5,3,'images/us/usimg94.jpg'),('Tv팝니다','30,000원','울산 중구 장현동',5,8,'images/us/usimg95.jpg'),('아이폰 11프로 64','300,000원','울산 남구 삼산동',0,7,'images/us/usimg96.jpg'),('원터치텐트.원터치모기장.전자몸무게저울','20,000원','울산 중구 학성동',2,5,'images/us/usimg97.jpg'),('에그녹 라이언 4y 새상품','59,000원','울산 울주군 범서읍',3,3,'images/us/usimg98.jpg'),('등산배낭 외','40,000원','울산 중구 태화동',3,3,'images/us/usimg99.jpg');
/*!40000 ALTER TABLE `ulsan` ENABLE KEYS */;
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
