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
-- Table structure for table `daejeon`
--

DROP TABLE IF EXISTS `daejeon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daejeon` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daejeon`
--

LOCK TABLES `daejeon` WRITE;
/*!40000 ALTER TABLE `daejeon` DISABLE KEYS */;
INSERT INTO `daejeon` VALUES ('루이비통 팔찌 남자','110,000원','대전 서구 둔산2동',13,'24','images/dj/djimg0.jpg'),('이사가는데 물품 정리 합니다','1,000원','대전 서구 둔산동',16,'62','images/dj/djimg1.jpg'),('철재선반','10,000원','대전 동구 산내동',9,'6','images/dj/djimg2.jpg'),('갤럭시워치4 40mm 팔아요 (99%새것)','80,000원','대전 서구 괴정동',11,'10','images/dj/djimg3.jpg'),('라코스테미니백','15,000원','대전 중구 태평2동',12,'7','images/dj/djimg4.jpg'),('제습기','72,000원','대전 유성구 관평동',9,'10','images/dj/djimg6.jpg'),('가게급처분/','1,000원','대전 중구 문화2동',20,'25','images/dj/djimg7.jpg'),('엔틱서랍장','30,000원','대전 동구 홍도동',12,'4','images/dj/djimg8.jpg'),('삼성냉장고','20,000원','대전 유성구 상대동',7,'5','images/dj/djimg9.jpg'),('60인치 LED TV + 이동식거치대','500,000원','대전 서구 둔산3동',9,'9','images/dj/djimg10.jpg'),('캐리어 세트','20,000원','대전 유성구 노은동',42,'41','images/dj/djimg11.jpg'),('서랍장','10,000원','대전 동구 홍도동',10,'4','images/dj/djimg13.jpg'),('LG70 인치 티비 판매합니다','200,000원','대전 서구 용문동',15,'5','images/dj/djimg14.jpg'),('꼼데 가디건','45,000원','대전 중구 용두동',10,'10','images/dj/djimg15.jpg'),('핸드폰','450,000원','대전 중구 대흥동',2,'7','images/dj/djimg16.jpg'),('수납장/선반/ 당근합니다','15,000원','대전 서구 관저동',27,'9','images/dj/djimg17.jpg'),('라코스테신발, 슈콤마보니 샌들','8,000원','대전 유성구 관평동',6,'2','images/dj/djimg18.jpg'),('아이폰12프로 256기가 팔아요~','510,000원','대전 서구 변동',6,'9','images/dj/djimg19.jpg'),('자전거 싸게 팔아요','50,000원','대전 유성구 온천2동',8,'3','images/dj/djimg20.jpg'),('아이폰 팜','80,000원','대전 대덕구 석봉동',5,'20','images/dj/djimg21.jpg'),('접이식 탁자(1), 의자(2) 팝니다','10,000원','대전 중구 목동',2,'6','images/dj/djimg22.jpg'),('크록스','20,000원','대전 유성구 원신흥동',17,'16','images/dj/djimg23.jpg'),('앵글선반 급처분','58,000원','대전 서구 갈마1동',53,'12','images/dj/djimg24.jpg'),('핸드크림','나눔?','대전 대덕구 중리동',1,'4','images/dj/djimg25.jpg'),('옷 서랍장','10,000원','대전 유성구 상대동',5,'3','images/dj/djimg26.jpg'),('아이폰 14프로 새상품','110만원','대전 서구 탄방동',17,'9','images/dj/djimg27.jpg'),('나이키 운동화 255/260','5,000원','대전 중구 용두동',3,'1','images/dj/djimg28.jpg'),('달러팝니다','1,234원','대전 중구 문화1동',0,'7','images/dj/djimg29.jpg'),('먹태깡 팔아요','4,000원','대전 서구 변동',0,'9','images/dj/djimg30.jpg'),('디디에두보 남자반지 35만원짜리 14k 로즈골드','50,000원','대전 서구 월평3동',38,'28','images/dj/djimg31.jpg'),('아이패드 에어5 급처합니다','1원','대전 동구 가오동',0,'14','images/dj/djimg32.jpg'),('KAC-25 계양 콤프레샤 25L 2.5마력','75,000원','대전 유성구 계산동',2,'6','images/dj/djimg33.jpg'),('크록스 팝니다 260 265  270 280','30,000원','대전 유성구 노은2동',31,'22','images/dj/djimg34.jpg'),('펜션양도','300,000원','대전 유성구 노은1동',30,'2','images/dj/djimg35.jpg'),('카페 의자 레드,화이트,블랙','5,000원','대전 서구 갈마동',7,'9','images/dj/djimg36.jpg'),('가게 급처분','100,000원','대전 중구 문화2동',3,'12','images/dj/djimg37.jpg'),('공업용미싱기 가져가세요~','70,000원','대전 서구 탄방동',4,'3','images/dj/djimg38.jpg'),('에트로빅사이즈여행가방','50,000원','대전 서구 둔산동',12,'10','images/dj/djimg39.jpg'),('회전책장','50,000원','대전 중구 태평2동',12,'5','images/dj/djimg40.jpg'),('버버리가방  진품','130,000원','대전 중구 유천2동',12,'1','images/dj/djimg41.jpg'),('파라솔테이블','5,000원','대전 서구 둔산2동',7,'4','images/dj/djimg42.jpg'),('크록스 250','5,000원','대전 중구 유천동',5,'7','images/dj/djimg43.jpg'),('선풍기','7,000원','대전 동구 성남동',3,'14','images/dj/djimg44.jpg'),('싱크대','400,000원','대전 서구 만년동',12,'7','images/dj/djimg45.jpg'),('원형테이블 +의자','10,000원','대전 중구 대흥동',17,'11','images/dj/djimg46.jpg'),('베트남 동 팔아요!','210,000원','대전 유성구 상대동',0,'5','images/dj/djimg47.jpg'),('이케아 4단 철제선반','10,000원','대전 유성구 죽동',1,'3','images/dj/djimg48.jpg'),('갤럭시 워치 4 44mm','70,000원','대전 서구 갈마1동',17,'18','images/dj/djimg49.jpg'),('냉장고','200,000원','대전 유성구 화암동',1,'7','images/dj/djimg50.jpg'),('버너테이블 판매중입니다','50,000원','대전 중구 중촌동',3,'4','images/dj/djimg51.jpg'),('데팔 원형후라이팬 원형지름 30센치  상태좋아요   깨끗해요. 코팅상태 매우좋아요','5,000원','대전 대덕구 오정동',13,'12','images/dj/djimg52.jpg'),('18k 팔찌 4.35돈','255,000원','대전 서구 둔산2동',39,'6','images/dj/djimg53.jpg'),('캠핑용 테이블','20,000원','대전 동구 용운동',17,'17','images/dj/djimg54.jpg'),('아이패드 미니5 셀룰러 64GB 급쳐합니당','250,000원','대전 유성구 온천1동',7,'3','images/dj/djimg55.jpg'),('벤츠 골프가방세트 (중고)','50,000원','대전 서구 둔산동',2,'3','images/dj/djimg56.jpg'),('선풍기 팔아요','7,000원','대전 서구 용문동',12,'9','images/dj/djimg57.jpg'),('전자렌지','10,000원','대전 대덕구 중리동',5,'1','images/dj/djimg58.jpg'),('미니 선풍기','5,000원','대전 서구 둔산동',14,'13','images/dj/djimg59.jpg'),('갤럭시 s21 256GB  바이올렛','250,000원','대전 서구 도마동',35,'31','images/dj/djimg60.jpg'),('코닥','25,000원','대전 서구 도마동',13,'2','images/dj/djimg61.jpg'),('김치냉장고','380,000원','대전 동구 대동',10,'8','images/dj/djimg62.jpg'),('헬렌카민스키','80,000원','대전 중구 태평동',17,'9','images/dj/djimg63.jpg'),('갤럭시 와치4 클래식','100,000원','대전 서구 도마동',8,'1','images/dj/djimg64.jpg'),('미사용 새제품 크록스 240 네이비','20,000원','대전 중구 중촌동',14,'4','images/dj/djimg65.jpg'),('점보도시락','13,000원','대전 서구 도안동',8,'3','images/dj/djimg66.jpg'),('캠핑 선반','8,000원','대전 중구 대흥동',3,'3','images/dj/djimg67.jpg'),('갤럭시 플립2 팝니다.','100,000원','대전 서구 관저1동',10,'14','images/dj/djimg68.jpg'),('올드 구찌 숄더 백','129,000원','대전 중구 대흥동',4,'1','images/dj/djimg69.jpg'),('루이비통 머플러','300,000원','대전 서구 둔산3동',19,'5','images/dj/djimg70.jpg'),('키보드','20,000원','대전 대덕구 중리동',10,'29','images/dj/djimg71.jpg'),('90L 냉장고','50,000원','대전 서구 도안동',12,'5','images/dj/djimg72.jpg'),('삼성건조기 9kg','200,000원','대전 중구 문화동',4,'4','images/dj/djimg73.jpg'),('애플워치프로','38,000원','대전 유성구 구즉동',9,'8','images/dj/djimg74.jpg'),('갤럭시플립3 급처분','140,000원','대전 서구 정림동',14,'5','images/dj/djimg75.jpg'),('인켈 40인치 TV','50,000원','대전 유성구 노은3동',6,'4','images/dj/djimg76.jpg'),('커피머신, 안핌그라인더, 믹스타 블랜더','300,000원','대전 서구 둔산2동',7,'5','images/dj/djimg77.jpg'),('나이키 에어리프트 써밋화이트 225','15,000원','대전 서구 둔산2동',9,'4','images/dj/djimg78.jpg'),('엘지60인찌TV','170,000원','대전 서구 복수동',7,'9','images/dj/djimg79.jpg'),('벽걸이에어컨 6평형 팔아요','100,000원','대전 서구 갈마동',7,'11','images/dj/djimg80.jpg'),('선풍기','20,000원','대전 대덕구 중리동',6,'5','images/dj/djimg81.jpg'),('이동식 주택 판매 합니다','700만원','대전 서구 관저동',23,'7','images/dj/djimg82.jpg'),('LG 이동형 에어컨','200,000원','대전 유성구 전민동',5,'1','images/dj/djimg83.jpg'),('보드게임 모두 10만원입니다.','100,000원','대전 서구 둔산동',8,'3','images/dj/djimg84.jpg'),('샤오미 공기청정기 팝니다','10,000원','대전 서구 괴정동',10,'4','images/dj/djimg85.jpg'),('돌산갓김치2kg, 고들빼기1kg','15,000원','대전 유성구 노은3동',9,'3','images/dj/djimg86.jpg'),('프뢰벨 말하기','10,000원','대전 서구 갈마동',2,'5','images/dj/djimg87.jpg'),('나이키 운동화','5,000원','대전 서구 관저2동',3,'2','images/dj/djimg88.jpg'),('책상용 의자 팝니다','15,000원','대전 유성구 원신흥동',13,'8','images/dj/djimg89.jpg'),('내셔널지오그래픽 모자','5,000원','대전 서구 월평2동',5,'5','images/dj/djimg90.jpg'),('한샘 서랍장','20,000원','대전 서구 갈마동',12,'6','images/dj/djimg92.jpg'),('한샘 샘키즈 장난감 정리함','30,000원','대전 중구 태평2동',21,'4','images/dj/djimg93.jpg'),('대전 법동 그린타운에서 집을 나갔습니다. 6살입니다 제발 보시면 연락주세요','50,000원','대전 대덕구 송촌동',11,'4','images/dj/djimg94.jpg'),('펜션 양도합니다','100,000원','대전 서구 둔산3동',2,'1','images/dj/djimg95.jpg'),('자이언트 자전거','150,000원','대전 서구 탄방동',18,'4','images/dj/djimg96.jpg'),('동성 부탄가스용 해바라기 버너','25,000원','대전 서구 관저동',14,'4','images/dj/djimg97.jpg');
/*!40000 ALTER TABLE `daejeon` ENABLE KEYS */;
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
