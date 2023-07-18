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
-- Table structure for table `sejong`
--

DROP TABLE IF EXISTS `sejong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sejong` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` int DEFAULT NULL,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sejong`
--

LOCK TABLES `sejong` WRITE;
/*!40000 ALTER TABLE `sejong` DISABLE KEYS */;
INSERT INTO `sejong` VALUES ('나이키 운동화','10,000원','세종시  다정동',9,48,'images/sj/sjimg0.jpg'),('이케아 트롤리 철제카트','10,000원','세종시  고운동',5,15,'images/sj/sjimg1.jpg'),('명품패딩 싸게 처분합니다','300,000원','세종시  도담동',5,19,'images/sj/sjimg2.jpg'),('위닉스 제습기','80,000원','세종시  종촌동',3,6,'images/sj/sjimg3.jpg'),('금팔찌','320,000원','세종시  연동면',2,6,'images/sj/sjimg4.jpg'),('바네스데코 콘솔 서랍장ㅡ가져다드려요','100,000원','세종시  아름동',10,2,'images/sj/sjimg5.jpg'),('루이비통 남성 모노그램 체인 팔찌 써지컬','95,000원','세종시  조치원읍',14,19,'images/sj/sjimg6.jpg'),('비데','20,000원','세종시  나성동',3,4,'images/sj/sjimg7.jpg'),('LG TV 50LB6780','10,000원','세종시  나성동',1,7,'images/sj/sjimg8.jpg'),('새것 ~~~만원','10,000원','세종시  고운동',3,7,'images/sj/sjimg9.jpg'),('각종 보드게임 팝니다','5,000원','세종시  도담동',8,20,'images/sj/sjimg10.jpg'),('식탁의자','5,000원','세종시  소담동',5,7,'images/sj/sjimg11.jpg'),('골프채 가방포함 팔아요','180,000원','세종시  고운동',5,8,'images/sj/sjimg12.jpg'),('벤츠 붕붕카 푸쉬카','15,000원','세종시  반곡동',7,5,'images/sj/sjimg13.jpg'),('사이드 원목테이블','12,000원','세종시  고운동',5,6,'images/sj/sjimg14.jpg'),('마이크로킥보드 맥시','50,000원','세종시  고운동',4,7,'images/sj/sjimg15.jpg'),('비비안웨스트우드 화이트 셔츠 남방 미듐','20,000원','세종시  고운동',10,5,'images/sj/sjimg16.jpg'),('샤넬 향수','30,000원','세종시  집현동',8,5,'images/sj/sjimg17.jpg'),('갤럭시 노트10플러스 공기계 판매','150,000원','세종시  보람동',6,5,'images/sj/sjimg18.jpg'),('냉장고 팔아요','70,000원','세종시  대평동',4,8,'images/sj/sjimg19.jpg'),('세이펜 SBS-1000 32기가','60,000원','세종시  나성동',6,5,'images/sj/sjimg20.jpg'),('이케아 철제 선반 판매','5,000원','세종시  해밀동',7,3,'images/sj/sjimg21.jpg'),('나이키 반팔티 새상품 10000','10,000원','세종시  소담동',5,5,'images/sj/sjimg22.jpg'),('메리다 900kr','150,000원','세종시  종촌동',3,4,'images/sj/sjimg23.jpg'),('타보 휴대용유모차','10,000원','세종시  종촌동',3,6,'images/sj/sjimg24.jpg'),('베이비젠 요요 휴대용 유모차','100,000원','세종시  한솔동',5,10,'images/sj/sjimg25.jpg'),('60인치 LED TV + 이동식거치대','500,000원','세종시  다정동',9,9,'images/sj/sjimg26.jpg'),('크록스 팝니다 250mm','12,000원','세종시  반곡동',1,5,'images/sj/sjimg27.jpg'),('스카티 카메론 퍼터34인치 뉴포트2 팝니다','250,000원','세종시  어진동',10,6,'images/sj/sjimg28.jpg'),('레스포 20인치 자전거','50,000원','세종시  새롬동',3,2,'images/sj/sjimg29.jpg'),('업소용 선반 팝니다','30,000원','세종시  보람동',1,5,'images/sj/sjimg30.jpg'),('내일 가져가시면 5만원','60,000원','세종시  어진동',2,3,'images/sj/sjimg31.jpg'),('김치냉장고','15,000원','세종시  나성동',3,3,'images/sj/sjimg32.jpg'),('캐리비안베이 이용권','36,000원','세종시  나성동',2,5,'images/sj/sjimg33.jpg'),('캐리어','2,000원','세종시  조치원읍',6,5,'images/sj/sjimg34.jpg'),('1단 철제선반','10,000원','세종시  집현동',13,3,'images/sj/sjimg35.jpg'),('계획표 갖고가실분','나눔?','세종시  아름동',2,3,'images/sj/sjimg36.jpg'),('주유카드','250,000원','세종시  조치원읍',3,10,'images/sj/sjimg37.jpg'),('[하기스 기저귀] 하기스 맥스드라이 밴드형 3단계','3,000원','세종시  고운동',1,3,'images/sj/sjimg38.jpg'),('윌슨블레이드 라켓팝니다','70,000원','세종시  대평동',4,2,'images/sj/sjimg39.jpg'),('sk 전자렌지','25,000원','세종시  조치원읍',1,5,'images/sj/sjimg40.jpg'),('쿠쿠밥솥(10인용)','60,000원','세종시  소담동',11,8,'images/sj/sjimg41.jpg'),('TV','200,000원','세종시  어진동',8,7,'images/sj/sjimg42.jpg'),('영아다중 에듀','30,000원','세종시  도담동',0,3,'images/sj/sjimg43.jpg'),('유니맥스 발가락 선풍기','10,000원','세종시  다정동',3,4,'images/sj/sjimg44.jpg'),('이케아 철제서랍장','10,000원','세종시  한솔동',3,2,'images/sj/sjimg45.jpg'),('Lg드럼세탁기','150,000원','세종시  도담동',19,6,'images/sj/sjimg46.jpg'),('발렌시아가 뮬 판매합니다','180,000원','세종시  금남면',24,5,'images/sj/sjimg47.jpg'),('암막 커튼 화이트','15,000원','세종시  나성동',5,4,'images/sj/sjimg48.jpg'),('벤츠 붕붕카 푸쉬카','10,000원','세종시  대평동',8,4,'images/sj/sjimg49.jpg'),('아이맥스 전동 킥보드','30,000원','세종시  도담동',2,3,'images/sj/sjimg50.jpg'),('미니 범퍼침대','15,000원','세종시  해밀동',4,4,'images/sj/sjimg51.jpg'),('가정용 진공포장기','5,000원','세종시  어진동',1,2,'images/sj/sjimg52.jpg'),('스마트카라','20,000원','세종시  아름동',2,2,'images/sj/sjimg53.jpg'),('카페 야외 테이블 의자세트','1원','세종시  고운동',13,3,'images/sj/sjimg54.jpg'),('기내용 캐리어','10,000원','세종시  도담동',5,3,'images/sj/sjimg55.jpg'),('데스커 책상 1200','70,000원','세종시  도담동',5,6,'images/sj/sjimg56.jpg'),('메리다 빅세븐 20D mtb (휠 27.5인치)','200,000원','세종시  반곡동',17,5,'images/sj/sjimg57.jpg'),('버팔로 코펠 3인용','10,000원','세종시  다정동',0,4,'images/sj/sjimg58.jpg'),('연두 부클 나시 가디건','3,000원','세종시  대평동',3,3,'images/sj/sjimg59.jpg'),('중고) 샤오미 선풍기 판매','15,000원','세종시  보람동',2,4,'images/sj/sjimg60.jpg'),('아이폰12프로','400,000원','세종시  집현동',6,7,'images/sj/sjimg61.jpg'),('위닉스 제습기 16L팝니다.','130,000원','세종시  아름동',4,7,'images/sj/sjimg62.jpg'),('스톤아일랜드 패딩 100-105','100,000원','세종시  종촌동',6,20,'images/sj/sjimg63.jpg'),('닥터마틴 서류가방','30,000원','세종시  도담동',3,1,'images/sj/sjimg64.jpg'),('싸이클 팝니다','50,000원','세종시  한솔동',10,4,'images/sj/sjimg65.jpg'),('이동식 행거','15,000원','세종시  어진동',18,6,'images/sj/sjimg66.jpg'),('도노도노 범퍼침대','45,000원','세종시  고운동',3,4,'images/sj/sjimg67.jpg'),('팸퍼스 베이비드라이 5단계 2팩','18,000원','세종시  고운동',0,4,'images/sj/sjimg68.jpg'),('던롭 24인치 캐리어','20,000원','세종시  새롬동',3,4,'images/sj/sjimg69.jpg'),('아령 20kg','10,000원','세종시  보람동',2,2,'images/sj/sjimg70.jpg'),('모니터 39인치 급처분','35,000원','세종시  보람동',4,3,'images/sj/sjimg71.jpg'),('애플 정품 Beats Studio3 Wireless ANC 비츠 스튜디오3 무선 헤드폰 판매','60,000원','세종시  고운동',7,9,'images/sj/sjimg72.jpg'),('일리 네스프레소 캡슐 팝니다','45,000원','세종시  아름동',1,4,'images/sj/sjimg73.jpg'),('셀린느 선글라스','39,900원','세종시  새롬동',10,1,'images/sj/sjimg74.jpg'),('LG세탁기21kg+건조기16kg','120만원','세종시  보람동',7,2,'images/sj/sjimg75.jpg'),('여성 플리츠상의 66','10,000원','세종시  보람동',3,4,'images/sj/sjimg76.jpg'),('휴비딕 아기체중계','15,000원','세종시  새롬동',0,3,'images/sj/sjimg77.jpg'),('위니아 냉장고 506L','100,000원','세종시  소담동',1,5,'images/sj/sjimg78.jpg'),('작업대 및 바트','100,000원','세종시  장군면',4,6,'images/sj/sjimg79.jpg'),('갤럭시워치5 44mm 블루투스 그라파이트','200,000원','세종시  도담동',13,3,'images/sj/sjimg80.jpg'),('아이브 유진이 원영이 포카 팔아요!','2000만 3000원','세종시  다정동',2,3,'images/sj/sjimg81.jpg'),('?그릇 처분?','2,000원','세종시  반곡동',7,10,'images/sj/sjimg82.jpg'),('소파, 스툴','50,000원','세종시  도담동',12,4,'images/sj/sjimg83.jpg'),('삼성에어컨','30,000원','세종시  반곡동',3,3,'images/sj/sjimg84.jpg'),('?먹태깡?','4,900원','세종시  보람동',1,5,'images/sj/sjimg85.jpg'),('다원몬테소리 태양계3단카드','20,000원','세종시  새롬동',14,4,'images/sj/sjimg86.jpg'),('흔한남매 전권 1권~13권','78,000원','세종시  반곡동',7,8,'images/sj/sjimg87.jpg'),('아이폰14시리즈 데모 판매합니다','600,900원','세종시  새롬동',7,9,'images/sj/sjimg88.jpg'),('마샬 엑톤2 +스텐드','300,000원','세종시  집현동',45,7,'images/sj/sjimg89.jpg'),('(새상품)나이키 버킷햇','20,000원','세종시  한솔동',13,3,'images/sj/sjimg90.jpg'),('구찌ㅡ마지막내링','450,000원','세종시  고운동',65,1,'images/sj/sjimg91.jpg'),('쇼파예요','200,000원','세종시  다정동',24,4,'images/sj/sjimg92.jpg'),('사이즈 남은 새 제품들 올려요','10,000원','세종시  보람동',18,11,'images/sj/sjimg93.jpg'),('트레이닝 바지 팝니다','10,000원','세종시  새롬동',4,6,'images/sj/sjimg94.jpg'),('s22울트라 커플폰( 그린 , 화이트) 판매합니다','700,000원','세종시  나성동',13,12,'images/sj/sjimg95.jpg'),('일룸 책상-7월 20일까지','90,000원','세종시  고운동',26,4,'images/sj/sjimg96.jpg'),('양념통','5,000원','세종시  아름동',2,4,'images/sj/sjimg97.jpg');
/*!40000 ALTER TABLE `sejong` ENABLE KEYS */;
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
