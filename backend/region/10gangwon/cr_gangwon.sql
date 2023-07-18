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
-- Table structure for table `gangwon`
--

DROP TABLE IF EXISTS `gangwon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gangwon` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gangwon`
--

LOCK TABLES `gangwon` WRITE;
/*!40000 ALTER TABLE `gangwon` DISABLE KEYS */;
INSERT INTO `gangwon` VALUES ('선반','5,000원','강원도 강릉시 노암동',11,'15','images/gw/gwimg0.jpg'),('홍천잣 팔아요!~~','1,000원','강원도 원주시 단계동',7,'17','images/gw/gwimg1.jpg'),('콤프레샤 판매합니다 상태 좋고 깨끗합니다.','9억 9999만 9999원','강원도 강릉시 교동',4,'14','images/gw/gwimg2.jpg'),('철제 수납장, 선반','10,000원','강원도 원주시 지정면',10,'10','images/gw/gwimg3.jpg'),('흰색 선반','10,000원','강원도 속초시 교동',40,'23','images/gw/gwimg4.jpg'),('캠핑 접습니다 장비 대량 판매','10억원','강원도 춘천시 우두동',25,'31','images/gw/gwimg6.jpg'),('쿠크다스 큰거','1,000원','강원도 속초시 교동',1,'5','images/gw/gwimg7.jpg'),('중고냉장고','150,000원','강원도 강릉시 홍제동',2,'8','images/gw/gwimg8.jpg'),('죄송합니다  노각나눰하려고한 오이가  천여평이우박피해로 지연됍니다','나눔?','강원도 원주시 호저면',8,'5','images/gw/gwimg9.jpg'),('앵글선반 선반','100,000원','강원도 원주시 명륜동',9,'9','images/gw/gwimg10.jpg'),('전기릴선','20,000원','강원도 원주시 단계동',3,'4','images/gw/gwimg11.jpg'),('자전거 팔아요','20,000원','강원도 삼척시 당저동',8,'17','images/gw/gwimg12.jpg'),('화분 정리대','13,000원','강원도 강릉시 교1동',2,'3','images/gw/gwimg13.jpg'),('바이스 팝니다','15,000원','강원도 강릉시 유천동',5,'5','images/gw/gwimg14.jpg'),('작은 냉장고','100,000원','강원도 원주시 단계동',4,'5','images/gw/gwimg15.jpg'),('먹태깡','3,000원','강원도 춘천시 효자2동',7,'21','images/gw/gwimg16.jpg'),('스팸','11,000원','강원도 원주시 지정면',1,'7','images/gw/gwimg17.jpg'),('샤오미 스마트 스탠딩 선풍기 2','25,000원','강원도 속초시 조양동',1,'6','images/gw/gwimg18.jpg'),('sk메직 가스렌지 판매합니다','50,000원','강원도 속초시 교동',3,'6','images/gw/gwimg19.jpg'),('쿠잉냉장고 REF 09CNR','35,000원','강원도 동해시 천곡동',3,'5','images/gw/gwimg20.jpg'),('김치냉장고','50,000원','강원도 원주시 단구동',4,'3','images/gw/gwimg21.jpg'),('급하게','70,000원','강원도 춘천시 동내면',2,'1','images/gw/gwimg22.jpg'),('(이사정리)의자,멜킨스피닝자전거,선풍기,문거치수납','1원','강원도 원주시 단구동',4,'7','images/gw/gwimg24.jpg'),('냉장고 판매합니다','110,000원','강원도 원주시 단구동',2,'7','images/gw/gwimg25.jpg'),('디지털 금고','20,000원','강원도 속초시 조양동',3,'4','images/gw/gwimg26.jpg'),('이동식 식탁','10,000원','강원도 동해시 천곡동',11,'4','images/gw/gwimg27.jpg'),('화이트쇼파','50,000원','강원도 속초시 교동',11,'12','images/gw/gwimg28.jpg'),('냉장고 팝니다.','80,000원','강원도 원주시 학성동',1,'4','images/gw/gwimg29.jpg'),('마끼다18볼트','100,000원','강원도 동해시 천곡동',0,'3','images/gw/gwimg30.jpg'),('(옷정리)여성골프웨어,골프모자,디스커버리패딩','1원','강원도 원주시 단구동',5,'6','images/gw/gwimg31.jpg'),('선풍기 팔아요','10,000원','강원도 강릉시 강남동',2,'3','images/gw/gwimg32.jpg'),('먹태깡','15,000원','강원도 동해시 쇄운동',1,'6','images/gw/gwimg34.jpg'),('콘테이너 농막 매점 ( 어닝 포함) 3×4','600,000원','강원도 춘천시 후평동',14,'11','images/gw/gwimg35.jpg'),('펫드라이룸','100,000원','강원도 원주시 단구동',8,'1','images/gw/gwimg36.jpg'),('전기포트 1만원에 팝니다','10,000원','강원도 원주시 반곡동',2,'1','images/gw/gwimg37.jpg'),('쿠쿠압력밥솥3~4인용팝니다','30,000원','강원도 횡성군 우천면',1,'4','images/gw/gwimg38.jpg'),('4in1 레이저 레벨기 측정기 수평계 수평기 수직계 45도계 줄자','9,000원','강원도 춘천시 운교동',5,'5','images/gw/gwimg39.jpg'),('페레가모 남자 신발 265','20,000원','강원도 원주시 지정면',4,'4','images/gw/gwimg40.jpg'),('세탁기','30,000원','강원도 원주시 태장동',6,'6','images/gw/gwimg41.jpg'),('아이폰XS 64GB','150,000원','강원도 춘천시 효자동',3,'3','images/gw/gwimg42.jpg'),('캣폴,캣타워','30,000원','강원도 원주시 단계동',5,'3','images/gw/gwimg43.jpg'),('전기장판','30,000원','강원도 강릉시 노암동',2,'1','images/gw/gwimg44.jpg'),('냉장고 판매합니디~~~!!','110,000원','강원도 원주시 반곡동',6,'8','images/gw/gwimg45.jpg'),('화이트하임 큰 사이즈','1,000원','강원도 속초시 교동',0,'2','images/gw/gwimg46.jpg'),('겔럭시 폴드3 급처합니다','360,000원','강원도 원주시 단구동',7,'10','images/gw/gwimg47.jpg'),('크록스 240사이즈','25,000원','강원도 원주시 반곡동',7,'1','images/gw/gwimg48.jpg'),('중고 냉장고 판매','40,000원','강원도 원주시 단구동',0,'5','images/gw/gwimg50.jpg'),('925 팔찌','25,000원','강원도 춘천시 동내면',13,'10','images/gw/gwimg51.jpg'),('이동식화장실','100,000원','강원도 속초시 조양동',1,'3','images/gw/gwimg52.jpg'),('바닥에 떨궈서 액정 박살났지만 기능상엔 문제없는 애플워치 se 40mm 헐값에 팔려합니다 문의주세요','1원','강원도 춘천시 후평3동',4,'6','images/gw/gwimg53.jpg'),('쿠쿠 smart IH 6인용 밥솥','60,000원','강원도 원주시 태장동',11,'6','images/gw/gwimg54.jpg'),('쿠쿠 전기밥솥','6,000원','강원도 춘천시 석사동',3,'2','images/gw/gwimg56.jpg'),('k2 워킹화 새것 250mm','20,000원','강원도 원주시 명륜2동',2,'3','images/gw/gwimg57.jpg'),('다이슨 에어랩 드라이기','150,000원','강원도 원주시 봉산동',18,'6','images/gw/gwimg58.jpg'),('폴더매트','20,000원','강원도 원주시 지정면',3,'3','images/gw/gwimg59.jpg'),('투망','5,000원','강원도 춘천시 퇴계동',6,'6','images/gw/gwimg60.jpg'),('에어팟 프로 1세대','75,000원','강원도 원주시 소초면',13,'14','images/gw/gwimg61.jpg'),('잔자레인지 판매해요','10,000원','강원도 춘천시 효자2동',3,'5','images/gw/gwimg62.jpg'),('중고컨테이너','100원','강원도 홍천군 서면',0,'14','images/gw/gwimg63.jpg'),('갤럭시 핏2','30,000원','강원도 강릉시 교2동',3,'5','images/gw/gwimg64.jpg'),('카놀라유','3,000원','강원도 춘천시 우두동',1,'2','images/gw/gwimg65.jpg'),('게토레이 한박스팝니다','10,000원','강원도 춘천시 석사동',24,'16','images/gw/gwimg66.jpg'),('캠핑에어컨','150,000원','강원도 강릉시 회산동',11,'1','images/gw/gwimg67.jpg'),('에어팟 프로 1세대','100,000원','강원도 원주시 무실동',3,'7','images/gw/gwimg68.jpg'),('철제미니선반','5,000원','강원도 춘천시 강남동',7,'3','images/gw/gwimg69.jpg'),('카페재료','10,000원','강원도 원주시 반곡관설동',12,'5','images/gw/gwimg70.jpg'),('행거선반','35,000원','강원도 속초시 도문동',5,'3','images/gw/gwimg71.jpg'),('한샘 샘키즈 장난감 수납장 판매합니다!','30,000원','강원도 원주시 반곡동',11,'7','images/gw/gwimg72.jpg'),('테팔 믹서기팔아요.','15,000원','강원도 원주시 단구동',0,'2','images/gw/gwimg73.jpg'),('물걸레청소기','10,000원','강원도 동해시 이도동',1,'2','images/gw/gwimg74.jpg'),('캐리어   스크레치는 조금 있어요 (보관중 생겼네요)','10,000원','강원도 강릉시 강남동',6,'4','images/gw/gwimg75.jpg'),('충전예초기','100,000원','강원도 강릉시 유산동',9,'5','images/gw/gwimg76.jpg'),('코멧 5단 라탄 서랍장','15,000원','강원도 원주시 우산동',8,'3','images/gw/gwimg77.jpg'),('레벨기','50,000원','강원도 고성군 토성면',1,'3','images/gw/gwimg78.jpg'),('#화분','20,000원','강원도 원주시 행구동',4,'6','images/gw/gwimg79.jpg'),('화분다이','5,000원','강원도 춘천시 퇴계동',2,'4','images/gw/gwimg80.jpg'),('고무나무 3인용 식탁의자','50,000원','강원도 춘천시 퇴계동',2,'1','images/gw/gwimg81.jpg'),('화분다이','10,000원','강원도 원주시 단구동',6,'13','images/gw/gwimg82.jpg'),('대우 전자렌지 팝니다.','20,000원','강원도 춘천시 근화동',3,'6','images/gw/gwimg83.jpg'),('제습기 11리터','75,000원','강원도 양양군 양양읍',3,'2','images/gw/gwimg84.jpg'),('조리대판매합니다','30,000원','강원도 강릉시 교1동',2,'6','images/gw/gwimg85.jpg'),('타이니모빌(흑백,컬러인형)','10,000원','강원도 원주시 지정면',0,'4','images/gw/gwimg86.jpg'),('롤렉스 옛날시계 예물시계입니다  오래된건예요 수리좀해야합니다','1원','강원도 강릉시 교2동',4,'9','images/gw/gwimg87.jpg'),('루이 손가방','20,000원','강원도 강릉시 성내동',7,'6','images/gw/gwimg88.jpg'),('판넬미터당  만원','10,000원','강원도 영월군 영월읍',3,'5','images/gw/gwimg89.jpg'),('보스 사운드 미니2 블루투스 스피커','40,000원','강원도 원주시 태장동',7,'6','images/gw/gwimg90.jpg'),('메리다 스컬트라 100 싸게 팝니다','100,000원','강원도 원주시 태장1동',6,'2','images/gw/gwimg91.jpg'),('1년채 재대로 사용못한 가구 판매합니다','100만원','강원도 강릉시 포남1동',10,'3','images/gw/gwimg93.jpg'),('삼성 그랑ai 타워 세탁기 건조기','100만원','강원도 춘천시 삼천동',4,'1','images/gw/gwimg94.jpg'),('야외테이블','100,000원','강원도 원주시 반곡관설동',12,'6','images/gw/gwimg95.jpg');
/*!40000 ALTER TABLE `gangwon` ENABLE KEYS */;
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
