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
-- Table structure for table `jeonnam`
--

DROP TABLE IF EXISTS `jeonnam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jeonnam` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jeonnam`
--

LOCK TABLES `jeonnam` WRITE;
/*!40000 ALTER TABLE `jeonnam` DISABLE KEYS */;
INSERT INTO `jeonnam` VALUES ('위닉스 새제품 17L 제습기','280,000원','전남 순천시 왕조1동',20,'37','images/jn/jnimg0.jpg'),('청소기','10,000원','전남 여수시 덕충동',1,'15','images/jn/jnimg1.jpg'),('엔틱가구 팔아요','60,000원','전남 순천시 풍덕동',10,'8','images/jn/jnimg2.jpg'),('제빙기','10,000원','전남 광양시 광양읍',8,'19','images/jn/jnimg4.jpg'),('2인식탁','20,000원','전남 순천시 해룡면',8,'12','images/jn/jnimg5.jpg'),('라탄 파티션','5,000원','전남 순천시 왕조1동',6,'5','images/jn/jnimg6.jpg'),('55인치 티비','30,000원','전남 순천시 해룡면',3,'14','images/jn/jnimg8.jpg'),('카페집기정리합니다!!','1,000원','전남 나주시 빛가람동',9,'12','images/jn/jnimg9.jpg'),('장난감 일괄처분','10,000원','전남 여수시 웅천동',2,'5','images/jn/jnimg10.jpg'),('실내자전거','10,000원','전남 순천시 해룡면',0,'8','images/jn/jnimg11.jpg'),('lg32인치 tv팔아요','50,000원','전남 순천시 서면',3,'5','images/jn/jnimg12.jpg'),('아이폰 11 64G 팔아요','200,000원','전남 목포시 상동',11,'10','images/jn/jnimg13.jpg'),('창고용','300,000원','전남 광양시 광양읍',3,'2','images/jn/jnimg14.jpg'),('책장','10,000원','전남 목포시 이로동',4,'11','images/jn/jnimg15.jpg'),('화분겸 수반','20,000원','전남 광양시 광양읍',7,'5','images/jn/jnimg16.jpg'),('선반','50,000원','전남 목포시 삼학동',9,'2','images/jn/jnimg17.jpg'),('노래방기계','50,000원','전남 무안군 삼향읍',3,'5','images/jn/jnimg18.jpg'),('닭모이로','17,000원','전남 순천시 연향동',1,'5','images/jn/jnimg19.jpg'),('식탁용, 사무용 테이블 팝니다(의자포함)','50,000원','전남 무안군 삼향읍',14,'9','images/jn/jnimg20.jpg'),('유선청소기 팔아요','5,000원','전남 여수시 문수동',4,'11','images/jn/jnimg21.jpg'),('빈티지 수납장 판매합니다','40,000원','전남 광양시 광양읍',11,'5','images/jn/jnimg22.jpg'),('컴퓨터 사시는 분 필독하세요','1,000원','전남 여수시 율촌면',49,'5','images/jn/jnimg23.jpg'),('디올 카드지갑 새상품','70,000원','전남 순천시 삼산동',11,'29','images/jn/jnimg24.jpg'),('예초기','80,000원','전남 여수시 율촌면',6,'2','images/jn/jnimg25.jpg'),('이만원에 가져 가셔요~','20,000원','전남 목포시 부주동',4,'2','images/jn/jnimg26.jpg'),('싸이 흠뻑쇼 티켓(3층)  팔아요','70,000원','전남 여수시 학동',2,'3','images/jn/jnimg27.jpg'),('부산화덕','6,000원','전남 순천시 왕조1동',4,'8','images/jn/jnimg28.jpg'),('위닉스 제습기 (2013년 4월식)','60,000원','전남 해남군 해남읍',7,'4','images/jn/jnimg29.jpg'),('마들렌상점 서랍','70,000원','전남 여수시 삼일동',11,'2','images/jn/jnimg30.jpg'),('세탁기 건조기 세트 싸게 팔아요','120만원','전남 화순군 화순읍',6,'3','images/jn/jnimg31.jpg'),('싸게처분합니다','300,000원','전남 영암군 삼호읍',3,'15','images/jn/jnimg32.jpg'),('참나무 장작','300,000원','전남 목포시 옥암동',7,'8','images/jn/jnimg33.jpg'),('갤럭시 플립4 전색상 256GB','10,000원','전남 목포시 부주동',4,'11','images/jn/jnimg34.jpg'),('싸이흠뻑쇼 지정석R석 3층  2장팜','50,000원','전남 여수시 웅천동',6,'4','images/jn/jnimg35.jpg'),('작업선반대 팝니다','60,000원','전남 여수시 웅천동',5,'5','images/jn/jnimg36.jpg'),('김치냉장고','50,000원','전남 순천시 도사동',3,'6','images/jn/jnimg37.jpg'),('현미찹쌀 5kg','9,000원','전남 순천시 조곡동',13,'14','images/jn/jnimg38.jpg'),('낚시 원투대 새것팝니다. 글참조','30,000원','전남 광양시 중동',2,'5','images/jn/jnimg39.jpg'),('이케아 2단','10,000원','전남 순천시 생목동',9,'11','images/jn/jnimg40.jpg'),('고압세척기','230,000원','전남 순천시 해룡면',6,'10','images/jn/jnimg41.jpg'),('4인 식탁(의자포함)  팝니다.','50,000원','전남 나주시 빛가람동',7,'5','images/jn/jnimg42.jpg'),('접이식 원목 테이블, 원목 의자 세트','30,000원','전남 순천시 조례동',4,'2','images/jn/jnimg43.jpg'),('갤52 블랙 올립니다~!','178,000원','전남 목포시 하당동',5,'9','images/jn/jnimg44.jpg'),('블루투스 앰프','10,000원','전남 무안군 일로읍',6,'1','images/jn/jnimg45.jpg'),('아이폰13프로 골드 256g','800,000원','전남 광양시 광양읍',0,'6','images/jn/jnimg46.jpg'),('먼저 쳇 주시분께 드림.','60,000원','전남 무안군 삼향읍',1,'4','images/jn/jnimg47.jpg'),('싸이 여수 흠뻑쇼 티켓 2장 판매','300,000원','전남 여수시 대교동',4,'12','images/jn/jnimg48.jpg'),('제습기 판매합니다,','130,000원','전남 순천시 덕연동',11,'30','images/jn/jnimg49.jpg'),('삼성 선풍기','30,000원','전남 순천시 해룡면',3,'5','images/jn/jnimg50.jpg'),('소프시스책상','10,000원','전남 광양시 옥곡면',3,'3','images/jn/jnimg51.jpg'),('서랍장','10,000원','전남 영암군 삼호읍',4,'6','images/jn/jnimg52.jpg'),('책상 가져가세요','20,000원','전남 순천시 해룡면',2,'2','images/jn/jnimg53.jpg'),('고추참치 팔아요','15,000원','전남 광양시 중마동',22,'16','images/jn/jnimg54.jpg'),('유리 장식장','10,000원','전남 순천시 해룡면',13,'9','images/jn/jnimg55.jpg'),('이사관계루 판매합니다','100,000원','전남 여수시 신기동',12,'4','images/jn/jnimg56.jpg'),('자전거 팝니다','50,000원','전남 목포시 용해동',3,'2','images/jn/jnimg57.jpg'),('삼성 공기청정기','40,000원','전남 여수시 학동',4,'5','images/jn/jnimg58.jpg'),('전자레인지 판매합니다!','20,000원','전남 광양시 중마동',3,'3','images/jn/jnimg59.jpg'),('얀마17판매','1000만원','전남 광양시 광양읍',6,'8','images/jn/jnimg60.jpg'),('무쇠냄비','30,000원','전남 영암군 서호면',9,'22','images/jn/jnimg61.jpg'),('냉동고','50,000원','전남 여수시 미평동',1,'3','images/jn/jnimg62.jpg'),('냉장기','나눔?','전남 광양시 광양읍',0,'7','images/jn/jnimg63.jpg'),('사용하지 않은 현관형농막 판매합니다.','1900만원','전남 순천시 서면',16,'1','images/jn/jnimg64.jpg'),('싸이 흠뻑쇼 2장','200,000원','전남 여수시 해산동',0,'11','images/jn/jnimg65.jpg'),('위니아제습기 11리터','150,000원','전남 무안군 청계면',8,'3','images/jn/jnimg66.jpg'),('멀티수납장 판매합니다!','45,000원','전남 광양시 중마동',5,'3','images/jn/jnimg67.jpg'),('출입문 판매합니다','22,000원','전남 순천시 오천동',7,'4','images/jn/jnimg68.jpg'),('쿠쿠10인용 밥솥','60,000원','전남 여수시 시전동',10,'8','images/jn/jnimg69.jpg'),('식당집기정리합니다','999,999원','전남 목포시 연산동',6,'15','images/jn/jnimg70.jpg'),('아이브 포카','500원','전남 순천시 해룡면',0,'7','images/jn/jnimg71.jpg'),('흠뻑쇼 티켓 스탠딩석','100,000원','전남 여수시 국동',1,'9','images/jn/jnimg72.jpg'),('쇼파 오만원에 가져가실분','50,000원','전남 순천시 조례동',4,'5','images/jn/jnimg73.jpg'),('먹태깡','5,000원','전남 순천시 왕지동',1,'5','images/jn/jnimg74.jpg'),('18k 팔찌','795,000원','전남 여수시 신기동',9,'7','images/jn/jnimg75.jpg'),('스파이더 래쉬가드 라지  상항윽','38,000원','전남 순천시 왕조1동',4,'2','images/jn/jnimg76.jpg'),('싱크대','50,000원','전남 강진군 강진읍',1,'7','images/jn/jnimg77.jpg'),('S23 판매합니다~','250,000원','전남 순천시 왕지동',12,'39','images/jn/jnimg78.jpg'),('책상겸탁자판매 1200*700*720','20,000원','전남 여수시 웅천동',2,'2','images/jn/jnimg79.jpg'),('테라접이시카트','10,000원','전남 순천시 연향동',22,'17','images/jn/jnimg80.jpg'),('이불 싱글 셋트','15,000원','전남 순천시 연향동',2,'2','images/jn/jnimg81.jpg'),('장식장과  전자련지 수납장','나눔?','전남 목포시 삼향동',2,'4','images/jn/jnimg82.jpg'),('서랍장','10,000원','전남 목포시 상동',5,'3','images/jn/jnimg83.jpg'),('가스레인지','30,000원','전남 광양시 중마동',2,'5','images/jn/jnimg84.jpg'),('5단 서랍장','20,000원','전남 여수시 문수동',2,'4','images/jn/jnimg85.jpg'),('미니건조기 4kg 팔아요','180,000원','전남 무안군 삼향읍',10,'4','images/jn/jnimg86.jpg'),('나이키 신발','999,999원','전남 영암군 삼호읍',7,'15','images/jn/jnimg87.jpg'),('Tv팝니다','50,000원','전남 여수시 학동',0,'5','images/jn/jnimg88.jpg'),('스피닝릴 4000번 6000번','40,000원','전남 광양시 중마동',2,'2','images/jn/jnimg89.jpg'),('투바투 , 아이브 포카 팔아요','10억원','전남 광양시 광양읍',2,'6','images/jn/jnimg90.jpg'),('가야토마토농장','2,000원','전남 여수시 학동',2,'3','images/jn/jnimg91.jpg'),('해피콜 믹서기','50,000원','전남 화순군 화순읍',2,'1','images/jn/jnimg92.jpg'),('선반다이','25,000원','전남 화순군 화순읍',7,'2','images/jn/jnimg93.jpg'),('스투시 월드투어 반팔','60,000원','전남 순천시 해룡면',8,'9','images/jn/jnimg94.jpg'),('에듀테이블 판매합니다','20,000원','전남 목포시 옥암동',2,'5','images/jn/jnimg95.jpg');
/*!40000 ALTER TABLE `jeonnam` ENABLE KEYS */;
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
