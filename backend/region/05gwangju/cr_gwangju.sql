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
-- Table structure for table `gwangju`
--

DROP TABLE IF EXISTS `gwangju`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gwangju` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gwangju`
--

LOCK TABLES `gwangju` WRITE;
/*!40000 ALTER TABLE `gwangju` DISABLE KEYS */;
INSERT INTO `gwangju` VALUES ('엘지제습기','150,000원','광주 북구 본촌동',9,'11','images/gj/gjimg0.jpg'),('냉장고','70,000원','광주 북구 오치동',10,'12','images/gj/gjimg1.jpg'),('선풍기','5,000원','광주 광산구 첨단1동',24,'48','images/gj/gjimg2.jpg'),('미닛뮤트 실버','30,000원','광주 서구 쌍촌동',20,'9','images/gj/gjimg3.jpg'),('가져가세요ㅠㅠ','10,000원','광주 서구 금호동',7,'5','images/gj/gjimg4.jpg'),('미니 냉장고','50,000원','광주 서구 치평동',18,'11','images/gj/gjimg5.jpg'),('스터디카페 정리합니다','111원','광주 서구 유촌동',8,'13','images/gj/gjimg6.jpg'),('목걸이 팔아요','75,000원','광주 서구 화정3동',34,'25','images/gj/gjimg7.jpg'),('냉장고','180,000원','광주 서구 치평동',14,'28','images/gj/gjimg8.jpg'),('TV75인치','450,000원','광주 서구 치평동',34,'35','images/gj/gjimg9.jpg'),('추피의 생활이야기 세이펜가능','70,000원','광주 광산구 운남동',0,'9','images/gj/gjimg10.jpg'),('아이폰13프로맥스 128기가 실버','890,000원','광주 광산구 월곡2동',5,'10','images/gj/gjimg11.jpg'),('1~3인용 쿠쿠밥솥','20,000원','광주 북구 임동',10,'6','images/gj/gjimg12.jpg'),('아이폰 14프로 딥퍼플 128기가','115만원','광주 북구 임동',4,'9','images/gj/gjimg13.jpg'),('변산 리조트펜션(더웨스트) 7.22 토 숙박','110,000원','광주 광산구 장덕동',29,'10','images/gj/gjimg14.jpg'),('어린이 장구14-16 팔아요','40,000원','광주 광산구 산정동',3,'12','images/gj/gjimg15.jpg'),('야자매트  새물건 판매 합니다.   1M×10M','71,500원','광주 북구 운암동',57,'22','images/gj/gjimg16.jpg'),('딥디크 베티베리오','30,000원','광주 북구 용봉동',6,'2','images/gj/gjimg17.jpg'),('이동식주택팝니다','1000만원','광주 북구 중흥3동',80,'9','images/gj/gjimg18.jpg'),('어린이 자전거.3만','30,000원','광주 서구 동천동',5,'7','images/gj/gjimg19.jpg'),('LG 에어컨 2in1','650,000원','광주 북구 양산동',4,'7','images/gj/gjimg20.jpg'),('행거 선반 팝니다','35,000원','광주 북구 연제동',28,'11','images/gj/gjimg21.jpg'),('중흥골드스파 워터락 성수기 이용권 판매','43,000원','광주 서구 치평동',5,'8','images/gj/gjimg22.jpg'),('LG 세탁기. 건조기','110만원','광주 광산구 장덕동',26,'10','images/gj/gjimg23.jpg'),('폴드2팔아요','70,000원','광주 북구 운암1동',6,'8','images/gj/gjimg24.jpg'),('골프 모자  타이틀리스트','10,000원','광주 북구 양산동',9,'4','images/gj/gjimg25.jpg'),('현대오일뱅크상품권100만원 일괄93만원','930,000원','광주 서구 치평동',0,'7','images/gj/gjimg26.jpg'),('엘지 냉장고','100,000원','광주 북구 일곡동',3,'5','images/gj/gjimg27.jpg'),('라꾸라꾸침대','20,000원','광주 북구 오치동',0,'5','images/gj/gjimg28.jpg'),('표고버섯+검정콩)사진그대로)일괄판매요','10,000원','광주 남구 봉선1동',9,'1','images/gj/gjimg29.jpg'),('퀸센스 라면포트','나눔?','광주 서구 농성동',3,'5','images/gj/gjimg30.jpg'),('진열대 최고상태팜니다','40,000원','광주 광산구 장덕동',5,'7','images/gj/gjimg31.jpg'),('창문형 에어컨','60,000원','광주 광산구 도천동',4,'7','images/gj/gjimg32.jpg'),('이케아 유아 책상 의자','나눔?','광주 북구 우산동',6,'8','images/gj/gjimg33.jpg'),('알톤 자전거 팔아요','50,000원','광주 북구 중흥동',11,'11','images/gj/gjimg34.jpg'),('스터디카페 토즈 책상 시디즈 의자 테이블','60,000원','광주 북구 운암동',17,'11','images/gj/gjimg35.jpg'),('스님 작품인 거 같습니다서예1점판매합니다','102,000원','광주 남구 월산4동',1,'0','images/gj/gjimg36.jpg'),('버버리 티셔츠','50,000원','광주 광산구 우산동',16,'7','images/gj/gjimg37.jpg'),('셀린느 레인부츠','200,000원','광주 광산구 우산동',26,'5','images/gj/gjimg38.jpg'),('과자 판매합니당','1,000원','광주 서구 상무2동',10,'7','images/gj/gjimg39.jpg'),('무선 하이패스','20,000원','광주 북구 운암2동',8,'6','images/gj/gjimg40.jpg'),('무쇠솥','10,000원','광주 서구 치평동',2,'1','images/gj/gjimg41.jpg'),('bmw푸쉬카 팔아요','20,000원','광주 북구 신용동',3,'9','images/gj/gjimg42.jpg'),('삼성 2in1 에어컨','250,000원','광주 광산구 우산동',17,'10','images/gj/gjimg43.jpg'),('업소용 청소기','40,000원','광주 서구 유촌동',4,'5','images/gj/gjimg44.jpg'),('4구 새것입니다.','100,000원','광주 서구 풍암동',10,'7','images/gj/gjimg45.jpg'),('스피커','10,000원','광주 서구 상무2동',1,'3','images/gj/gjimg46.jpg'),('식품건조기 (신일)','나눔?','광주 남구 주월2동',3,'6','images/gj/gjimg47.jpg'),('신세계상품권40만 모바일','380,000원','광주 동구 산수1동',1,'8','images/gj/gjimg48.jpg'),('신발장','5,000원','광주 서구 상무2동',5,'6','images/gj/gjimg49.jpg'),('8키로 덤벨 세트 ~!','10,000원','광주 북구 용봉동',7,'5','images/gj/gjimg50.jpg'),('베트남 동','37,000원','광주 서구 금호동',0,'5','images/gj/gjimg51.jpg'),('미우미우카드지갑','57,000원','광주 서구 쌍촌동',76,'9','images/gj/gjimg52.jpg'),('로지텍 지프로 무선 마우스(설명확인)','20,000원','광주 서구 쌍촌동',4,'3','images/gj/gjimg53.jpg'),('하이메이드냉장고','200,000원','광주 광산구 산월동',3,'4','images/gj/gjimg55.jpg'),('겐조 맨투맨 급매','30,000원','광주 광산구 신창동',3,'8','images/gj/gjimg56.jpg'),('위닉스 제습기','230,000원','광주 광산구 신가동',22,'11','images/gj/gjimg57.jpg'),('언노운 샤크모노 판매','800,000원','광주 서구 쌍촌동',18,'7','images/gj/gjimg58.jpg'),('간호사 코스튬','30,000원','광주 북구 일곡동',16,'2','images/gj/gjimg59.jpg'),('나주중흥골드스파 워터락 티켓판매합니다','43,000원','광주 광산구 수완동',30,'36','images/gj/gjimg60.jpg'),('통기타','30,000원','광주 서구 치평동',11,'12','images/gj/gjimg61.jpg'),('전기자전거','100,000원','광주 동구 용산동',6,'5','images/gj/gjimg62.jpg'),('아이폰12프로 128기가 s급','550,000원','광주 서구 유덕동',9,'7','images/gj/gjimg63.jpg'),('갤럭시s20FE 5G 공기계','90,000원','광주 광산구 소촌동',6,'5','images/gj/gjimg64.jpg'),('유로휠 전동킥보드600R 10인치타이어','200,000원','광주 광산구 수완동',10,'6','images/gj/gjimg65.jpg'),('중흥골드스파','42,000원','광주 남구 봉선동',75,'70','images/gj/gjimg66.jpg'),('가스레인지 팔아요','10,000원','광주 남구 주월2동',4,'11','images/gj/gjimg67.jpg'),('아이폰 12 미니 128기가','300,000원','광주 서구 화정동',10,'15','images/gj/gjimg68.jpg'),('펜트리 시스템장 일체 양도(팝니다)','600,000원','광주 광산구 장덕동',10,'6','images/gj/gjimg69.jpg'),('AMD A320m 메인보드 판매합니다','30,000원','광주 서구 상무1동',9,'2','images/gj/gjimg70.jpg'),('에어팟 프로 팔아요','100,000원','광주 서구 화정3동',21,'20','images/gj/gjimg71.jpg'),('타이니러브 유모차모빌','5,000원','광주 광산구 월곡동',2,'6','images/gj/gjimg72.jpg'),('보아르미니제습기','20,000원','광주 광산구 우산동',3,'5','images/gj/gjimg73.jpg'),('말본 지포어 타이틀리스트 pxg의류판매합니다','22,222원','광주 남구 송하동',9,'20','images/gj/gjimg74.jpg'),('원터치 접이식 철재 선반','30,000원','광주 북구 각화동',9,'5','images/gj/gjimg75.jpg'),('프롬유샤워핸들시즌2','30,000원','광주 광산구 우산동',1,'5','images/gj/gjimg76.jpg'),('아이폰 11 128기가','200,000원','광주 광산구 흑석동',6,'6','images/gj/gjimg77.jpg'),('로렉스시계 오이스터 퍼페추얼 데이저스트','500만원','광주 서구 금호2동',11,'17','images/gj/gjimg78.jpg'),('주유권','44,000원','광주 서구 치평동',4,'1','images/gj/gjimg79.jpg'),('시계 오토매틱','160,000원','광주 서구 치평동',9,'7','images/gj/gjimg80.jpg'),('나주중흥골드스파 무료이용권 양도','42,000원','광주 광산구 장덕동',4,'4','images/gj/gjimg81.jpg'),('영광보리쌀','10,000원','광주 광산구 신창동',0,'2','images/gj/gjimg82.jpg'),('모듈 테이블 팔아요 ?','50,000원','광주 서구 쌍촌동',11,'2','images/gj/gjimg83.jpg'),('손흥민 에어컨-18평형 인버터 1등급<내용필독>','200,000원','광주 북구 문흥동',9,'12','images/gj/gjimg84.jpg'),('자일렉 청소기','10,000원','광주 북구 신안동',6,'4','images/gj/gjimg85.jpg'),('스피드랙','30,000원','광주 북구 신용동',7,'7','images/gj/gjimg86.jpg'),('경량 캠핑의자 & 경량 미니 테이블 세트','30,000원','광주 북구 용봉동',8,'4','images/gj/gjimg87.jpg'),('충전식 광택기','50,000원','광주 광산구 장덕동',2,'2','images/gj/gjimg88.jpg'),('에어컨 (삼성, 캐리어) 일괄','100,000원','광주 북구 운암동',3,'4','images/gj/gjimg89.jpg'),('농막 6~7평 화순입니다 천이백만','1,200원','광주 서구 상무1동',10,'1','images/gj/gjimg90.jpg'),('나이키 힙색 (새제품)','25,000원','광주 서구 화정2동',13,'6','images/gj/gjimg91.jpg'),('디올 슬리퍼 사용감은 좀 있어요','250,000원','광주 광산구 첨단1동',3,'6','images/gj/gjimg92.jpg'),('원목평상','50,000원','광주 광산구 신창동',5,'1','images/gj/gjimg93.jpg'),('노비타제습기dh-155','20,000원','광주 서구 풍암동',2,'10','images/gj/gjimg94.jpg'),('주유보관증','130,000원','광주 동구 용산동',4,'3','images/gj/gjimg95.jpg'),('골프백 판매합니다','50,000원','광주 광산구 장덕동',11,'8','images/gj/gjimg96.jpg');
/*!40000 ALTER TABLE `gwangju` ENABLE KEYS */;
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