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
-- Table structure for table `gyeongbuk`
--

DROP TABLE IF EXISTS `gyeongbuk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gyeongbuk` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gyeongbuk`
--

LOCK TABLES `gyeongbuk` WRITE;
/*!40000 ALTER TABLE `gyeongbuk` DISABLE KEYS */;
INSERT INTO `gyeongbuk` VALUES ('제습기','20,000원','경북 포항시 북구 용흥동',3,'18','images/gb/gbimg0.jpg'),('김치냉장고  필요하신분','70,000원','경북 구미시 산동읍',17,'31','images/gb/gbimg1.jpg'),('냉장고','100,000원','경북 구미시 남통동',4,'12','images/gb/gbimg2.jpg'),('스팸','15,000원','경북 김천시 교동',2,'15','images/gb/gbimg3.jpg'),('철재선반','10,000원','경북 포항시 북구 환호동',4,'10','images/gb/gbimg4.jpg'),('스팸 참치','15,000원','경북 김천시 봉산면',0,'12','images/gb/gbimg5.jpg'),('비싸게주고 삿지만,,, 둘곳이없어 싸게팝니다','50,000원','경북 포항시 남구 이동',35,'21','images/gb/gbimg6.jpg'),('ORBEA MTB자전거','500,000원','경북 포항시 북구 양학동',29,'49','images/gb/gbimg7.jpg'),('사무실정리','150만원','경북 김천시 평화동',2,'15','images/gb/gbimg8.jpg'),('일산 가와사키 예초기','50,000원','경북 김천시 조마면',3,'5','images/gb/gbimg9.jpg'),('철제선반 조립식 앵글 선반','60,000원','경북 칠곡군 왜관읍',8,'10','images/gb/gbimg10.jpg'),('드라이버','20,000원','경북 안동시 송하동',6,'15','images/gb/gbimg11.jpg'),('압력밥솥','20,000원','경북 영주시 가흥동',3,'6','images/gb/gbimg12.jpg'),('책장 팔아요~','20,000원','경북 김천시 율곡동',4,'4','images/gb/gbimg13.jpg'),('LG제습기 팝니다','50,000원','경북 구미시 사곡동',0,'11','images/gb/gbimg14.jpg'),('경운기중고팝니다','500,000원','경북 구미시 해평면',3,'5','images/gb/gbimg15.jpg'),('311리터 LG 냉장고','150,000원','경북 구미시 옥계동',2,'4','images/gb/gbimg16.jpg'),('파이프 신품','900원','경북 칠곡군 석적읍',29,'26','images/gb/gbimg17.jpg'),('전자레인지팔아유','15,000원','경북 칠곡군 석적읍',7,'5','images/gb/gbimg18.jpg'),('안써서 판매해요~','15,000원','경북 구미시 남통동',1,'8','images/gb/gbimg19.jpg'),('가져가세요','49,000원','경북 구미시 도량동',4,'0','images/gb/gbimg20.jpg'),('선반','15,000원','경북 구미시 고아읍',4,'4','images/gb/gbimg21.jpg'),('선풍기','5,000원','경북 포항시 남구 효자동',5,'7','images/gb/gbimg22.jpg'),('복합 비료','15,000원','경북 칠곡군 북삼읍',1,'7','images/gb/gbimg23.jpg'),('아기자동차 푸쉬카 붕붕이','5,000원','경북 예천군 호명면',2,'9','images/gb/gbimg24.jpg'),('에어컨','20,000원','경북 구미시 진평동',0,'7','images/gb/gbimg25.jpg'),('냉동밥용기 글라스락 2번씀','10,000원','경북 포항시 남구 오천읍',6,'3','images/gb/gbimg26.jpg'),('위닉스제습기 싸게 판매합니다','150,000원','경북 칠곡군 석적읍',4,'8','images/gb/gbimg27.jpg'),('전자레인지','10,000원','경북 경주시 외동읍',2,'4','images/gb/gbimg28.jpg'),('기내용 미니캐리어','5,000원','경북 영주시 가흥동',14,'12','images/gb/gbimg29.jpg'),('삼성제습기팝니다','100,000원','경북 구미시 산동읍',6,'9','images/gb/gbimg30.jpg'),('장작','40,000원','경북 상주시 복룡동',1,'6','images/gb/gbimg31.jpg'),('가구 가전 팔아요^^!!  이사로인한','100,000원','경북 구미시 인의동',33,'22','images/gb/gbimg32.jpg'),('로렉스','150만원','경북 경산시 하양읍',16,'4','images/gb/gbimg33.jpg'),('금팔찌팔아봅니다','235원','경북 구미시 옥계동',15,'17','images/gb/gbimg34.jpg'),('Sale','90,000원','경북 경산시 조영동',0,'10','images/gb/gbimg35.jpg'),('저온저장고','600,000원','경북 예천군 호명면',6,'4','images/gb/gbimg36.jpg'),('아이폰13프로맥스 128','920,000원','경북 경산시 북부동',2,'9','images/gb/gbimg37.jpg'),('노르디스크파리바게트 파라솔(새상품)','20,000원','경북 경산시 옥곡동',9,'5','images/gb/gbimg38.jpg'),('낚시대팝니다','35,000원','경북 포항시 남구 청림동',3,'5','images/gb/gbimg39.jpg'),('이케아선반','20,000원','경북 경주시 동천동',9,'5','images/gb/gbimg40.jpg'),('새운동화입니다 270','20,000원','경북 포항시 북구 죽도동',13,'15','images/gb/gbimg41.jpg'),('몇달 안 쓴 선반 팝니다','10,000원','경북 포항시 북구 죽도동',3,'3','images/gb/gbimg42.jpg'),('화장대 급히 팝니다','20,000원','경북 구미시 양포동',20,'17','images/gb/gbimg43.jpg'),('이동식농막','500만원','경북 경주시 현곡면',12,'7','images/gb/gbimg44.jpg'),('고지가위','5,000원','경북 칠곡군 석적읍',53,'26','images/gb/gbimg45.jpg'),('무선 청소기 팝니다','10,000원','경북 안동시 화성동',1,'5','images/gb/gbimg46.jpg'),('풍년압력밥솥','20,000원','경북 포항시 남구 지곡동',1,'5','images/gb/gbimg47.jpg'),('새농막팝니다','2200만원','경북 포항시 북구 용흥동',22,'4','images/gb/gbimg48.jpg'),('24k팔찌','330,000원','경북 구미시 형곡동',19,'17','images/gb/gbimg49.jpg'),('빔프로젝트','20,000원','경북 포항시 남구 연일읍',6,'4','images/gb/gbimg51.jpg'),('sk  magic  전자렌지','30,000원','경북 구미시 옥계동',6,'7','images/gb/gbimg52.jpg'),('쪽파 씨','3,000원','경북 영천시 금호읍',7,'8','images/gb/gbimg53.jpg'),('겔럭시s9','30,000원','경북 구미시 선산읍',4,'12','images/gb/gbimg54.jpg'),('틈새수납장','20,000원','경북 안동시 옥동',6,'1','images/gb/gbimg55.jpg'),('3단 냉동고','200,000원','경북 포항시 북구 양학동',1,'1','images/gb/gbimg56.jpg'),('야채 과일 가정용 건조기','10,000원','경북 경산시 서부2동',3,'5','images/gb/gbimg57.jpg'),('4단철제선반','10,000원','경북 구미시 도량동',10,'5','images/gb/gbimg58.jpg'),('톤빽 (800kg) 항공마대 판매합니다!!!','1,000원','경북 경산시 하양읍',19,'8','images/gb/gbimg59.jpg'),('프롬유 아기샤워핸들','15,000원','경북 안동시 운안동',3,'5','images/gb/gbimg60.jpg'),('노래방 기계 팝니다','30,000원','경북 경주시 동천동',10,'15','images/gb/gbimg62.jpg'),('철제 수납함','5,000원','경북 포항시 북구 장량동',5,'3','images/gb/gbimg63.jpg'),('쌀 20키로','38,000원','경북 구미시 옥계동',4,'3','images/gb/gbimg64.jpg'),('컴퓨터 가져가실 분','50,000원','경북 포항시 북구 장량동',4,'4','images/gb/gbimg65.jpg'),('충전식 미니 청소기','10,000원','경북 문경시 점촌동',17,'19','images/gb/gbimg66.jpg'),('스탠리 워터저그','15,000원','경북 안동시 운안동',3,'5','images/gb/gbimg67.jpg'),('리바트 꼼므 어린이 책상 의자 세트 1200 가격제안 불가','55,000원','경북 구미시 송정동',2,'3','images/gb/gbimg68.jpg'),('돌반지','320,000원','경북 경주시 용강동',4,'5','images/gb/gbimg69.jpg'),('제습기','50,000원','경북 구미시 도량동',5,'10','images/gb/gbimg70.jpg'),('충전 송풍기 - 낙엽청소외','5,000원','경북 경산시 서부1동',2,'2','images/gb/gbimg71.jpg'),('코렐그릇','70,000원','경북 구미시 원평동',0,'1','images/gb/gbimg72.jpg'),('☆합체로봇들☆돈벌어가세요☆일괄만원☆','10,000원','경북 칠곡군 북삼읍',5,'5','images/gb/gbimg73.jpg'),('컨테이너 농막','169만원','경북 포항시 북구 기계면',7,'6','images/gb/gbimg74.jpg'),('냉장고 팝니다','100,000원','경북 안동시 정상동',1,'9','images/gb/gbimg75.jpg'),('몽땅 다 천원씩','1,000원','경북 구미시 진평동',4,'10','images/gb/gbimg76.jpg'),('간이 테이블','5,000원','경북 경주시 선도동',4,'2','images/gb/gbimg77.jpg'),('복스셋트','20,000원','경북 경산시 옥산동',4,'2','images/gb/gbimg78.jpg'),('돌잡이 수학 한글 명화','20,000원','경북 구미시 사곡동',1,'7','images/gb/gbimg79.jpg'),('캐리어 팔아요. 여행취소되어서','30,000원','경북 포항시 북구 양덕동',7,'4','images/gb/gbimg80.jpg'),('(새상품) 세트 상품 예뻐요 ~','7,000원','경북 구미시 송정동',38,'22','images/gb/gbimg81.jpg'),('테이블 의자','5,000원','경북 포항시 남구 상도동',6,'10','images/gb/gbimg82.jpg'),('오디오','80,000원','경북 칠곡군 북삼읍',11,'6','images/gb/gbimg83.jpg'),('장박캠핑, 주말농장, 텃밭 임대 합니다','300,000원','경북 포항시 남구 일월동',24,'9','images/gb/gbimg84.jpg'),('기가바이트게이밍 노트북','450,000원','경북 칠곡군 석적읍',12,'5','images/gb/gbimg85.jpg'),('에어 콤프레셔 판매합니다.','150,000원','경북 포항시 북구 장성동',4,'4','images/gb/gbimg86.jpg'),('다이슨 에어랩 컴플리트 + 거치대','350,000원','경북 구미시 진평동',14,'3','images/gb/gbimg87.jpg'),('철재선반','40,000원','경북 포항시 북구 흥해읍',6,'5','images/gb/gbimg88.jpg'),('이사로 처분 합니다','30,000원','경북 구미시 옥계동',2,'1','images/gb/gbimg89.jpg'),('폼건','10,000원','경북 상주시 외서면',2,'6','images/gb/gbimg90.jpg'),('ĹG 노트북','50,000원','경북 경주시 안강읍',7,'3','images/gb/gbimg91.jpg'),('삼성 아기사랑세탁기','100,000원','경북 구미시 산동읍',2,'4','images/gb/gbimg92.jpg'),('8TB 외장하드.','75,000원','경북 경산시 압량읍',8,'6','images/gb/gbimg93.jpg'),('아이폰 13pro 128gb 그린 뒷면파손','500,000원','경북 경산시 북부동',2,'3','images/gb/gbimg94.jpg'),('물호수','20,000원','경북 영주시 가흥동',8,'3','images/gb/gbimg95.jpg'),('스피커셋트','10,000원','경북 경주시 노서동',1,'2','images/gb/gbimg96.jpg');
/*!40000 ALTER TABLE `gyeongbuk` ENABLE KEYS */;
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
