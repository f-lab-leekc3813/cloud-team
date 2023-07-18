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
-- Table structure for table `best`
--

DROP TABLE IF EXISTS `best`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `best` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `best`
--

LOCK TABLES `best` WRITE;
/*!40000 ALTER TABLE `best` DISABLE KEYS */;
INSERT INTO `best` VALUES ('위닉스 제습기 (DXAH100-IWK)','70,000원','충남 천안시 서북구 불당동',35,'70','images/best/bestimg0.jpg'),('샤넬 디올 가방들 정리합니다','100원','부산 해운대구 우제2동',113,'63','images/best/bestimg1.jpg'),('위닉스 제습기 (1등급 효율) 급처','50,000원','서울 관악구 서원동',18,'37','images/best/bestimg2.jpg'),('장마철 제습기 싸게 들여놓으세요','50,000원','대구 수성구 범어3동',15,'33','images/best/bestimg3.jpg'),('명품 다 정리합니다','999만 9999원','울산 울주군 범서읍',43,'51','images/best/bestimg4.jpg'),('LG WHISEN 제습기','50,000원','서울 강남구 개포4동',10,'35','images/best/bestimg5.jpg'),('제습기','50,000원','서울 강서구 화곡제1동',10,'29','images/best/bestimg6.jpg'),('냉동고 4년사용','50,000원','대구 수성구 고산2동',18,'18','images/best/bestimg7.jpg'),('제습기 팝니다','90,000원','경기도 수원시 영통구 영통동',96,'129','images/best/bestimg8.jpg'),('제습기 팝니다','30,000원','충남 천안시 서북구 성거읍',7,'27','images/best/bestimg9.jpg'),('제습기','10,000원','경기도 안산시 단원구 와동',9,'30','images/best/bestimg10.jpg'),('제습기 LG','50,000원','서울 서초구 방배2동',5,'27','images/best/bestimg11.jpg'),('제습기','20,000원','경북 포항시 북구 용흥동',3,'18','images/best/bestimg12.jpg'),('제습기','50,000원','전북 전주시 완산구 삼천3동',6,'22','images/best/bestimg13.jpg'),('제습기 판매','70,000원','경남 진주시 천전동',6,'21','images/best/bestimg14.jpg'),('나이키 운동화','10,000원','세종시  다정동',9,'48','images/best/bestimg15.jpg'),('위닉스 DHD169 제습기 팝니다 16리터','70,000원','경기도 수원시 영통구 광교2동',5,'21','images/best/bestimg16.jpg'),('선반','5,000원','강원도 강릉시 노암동',11,'15','images/best/bestimg17.jpg'),('갤럭시에스23울트라 새폰','289,000원','경기도 수원시 권선구 권선1동',21,'72','images/best/bestimg18.jpg'),('울산서머페스티벌 티켓 양도','12원','울산 북구 염포동',1,'17','images/best/bestimg19.jpg'),('김치냉장고  필요하신분','70,000원','경북 구미시 산동읍',17,'31','images/best/bestimg20.jpg'),('LG제습기','50,000원','제주 제주시 한림읍',6,'44','images/best/bestimg21.jpg'),('베트남동 판매해요','73,000원','경기도 용인시 수지구 죽전동',2,'17','images/best/bestimg22.jpg'),('샤넬 디올 가방들 정리합니다','100원','서울 강남구 신사동',92,'49','images/best/bestimg23.jpg'),('명품 다 정리합니다','999만 9999원','울산 울주군 범서읍',11,'35','images/best/bestimg24.jpg'),('마이크로 킥보드 맥시','50,000원','경기도 성남시 분당구 정자동',5,'20','images/best/bestimg25.jpg'),('제습기','55,000원','제주 서귀포시 동홍동',5,'18','images/best/bestimg26.jpg'),('이케아 트롤리 철제카트','10,000원','세종시  고운동',5,'15','images/best/bestimg27.jpg'),('크록스 새제품팝니다','28,000원','부산 기장군 정관읍',14,'39','images/best/bestimg28.jpg'),('갤럭시워치5','110,000원','경기도 평택시 비전동',8,'17','images/best/bestimg29.jpg'),('위닉스 제습기','120,000원','경기도 부천시 중동',14,'29','images/best/bestimg30.jpg'),('SEDEC 식탁세트판매','300,000원','경기도 성남시 분당구 정자동',56,'26','images/best/bestimg31.jpg'),('가게 정리합니다','1,000원','울산 울주군 범서읍',4,'1','images/best/bestimg32.jpg'),('이민 및 이사 정리 (책상, 침대, 식탁, 소파, 식기세척기, 공기청정기, 매거진랙, 티비다이, 의자 등)','100,000원','서울 동대문구 휘경제1동',30,'24','images/best/bestimg33.jpg'),('디올 나노백','110만원','경남 김해시 장유3동',20,'20','images/best/bestimg34.jpg'),('쿠쿠 제습기','50,000원','충남 천안시 서북구 쌍용2동',3,'18','images/best/bestimg35.jpg'),('코렐12피스 새상품','10,000원','경기도 화성시 남양읍',8,'7','images/best/bestimg36.jpg'),('삼성65인치 티비','100,000원','경기도 용인시 수지구 풍덕천2동',13,'11','images/best/bestimg37.jpg'),('다이슨 선풍기','60,000원','경남 창원시 성산구 신촌동',8,'14','images/best/bestimg38.jpg'),('보쉬 전동드릴','50,000원','서울 양천구 목1동',16,'12','images/best/bestimg39.jpg'),('다이슨. 드라이기','150,000원','서울 동대문구 장안동',13,'13','images/best/bestimg40.jpg'),('아몬드 키즈 풀빌라 양산 통도사점 숙박','200,000원','경남 양산시 하북면',50,'47','images/best/bestimg41.jpg'),('캣타워','10,000원','대구 남구 대명동',13,'14','images/best/bestimg42.jpg'),('전동 자전거 판매','50,000원','경기도 화성시 장지동',11,'4','images/best/bestimg43.jpg'),('엘지제습기','150,000원','광주 북구 본촌동',9,'11','images/best/bestimg44.jpg'),('냉장고','70,000원','광주 북구 오치동',10,'12','images/best/bestimg45.jpg'),('아임삭 드릴','70,000원','충남 아산시 배방읍',16,'8','images/best/bestimg46.jpg'),('홍천잣 팔아요!~~','1,000원','강원도 원주시 단계동',8,'17','images/best/bestimg47.jpg'),('차량용 냉장고','5,000원','경기도 남양주시 진접읍',7,'14','images/best/bestimg48.jpg'),('에어팟 5만원','50,000원','경기도 화성시 봉담읍',26,'41','images/best/bestimg49.jpg'),('가마솥 팝니다','30,000원','경기도 광주시 장지동',9,'8','images/best/bestimg50.jpg'),('위닉스 제습기','5,000원','경기도 김포시 양촌읍',5,'7','images/best/bestimg51.jpg'),('아이폰 14 256기가 블루 급처 배터리 100%','500,000원','경기도 화성시 새솔동',12,'25','images/best/bestimg52.jpg'),('급해요 ㅜㅜㅜ','1원','서울 노원구 상계10동',2,'3','images/best/bestimg53.jpg'),('제습기 팝니다','30,000원','서울 은평구 구산동',9,'11','images/best/bestimg54.jpg'),('매장정리합니다.','1,000원','인천 연수구 송도동 월드마크 1,2 단지',14,'4','images/best/bestimg55.jpg'),('위닉스 제습기 판매','80,000원','충북 충주시 용산동',6,'16','images/best/bestimg56.jpg'),('위닉스제습기16L','30,000원','경남 창원시 의창구 도계동',3,'9','images/best/bestimg57.jpg'),('위니아제습기8L','80,000원','제주 서귀포시 상효동',3,'14','images/best/bestimg58.jpg'),('선풍기','5,000원','광주 광산구 첨단1동',24,'48','images/best/bestimg59.jpg'),('루이비통 팔찌 남자','110,000원','대전 서구 둔산2동',13,'24','images/best/bestimg60.jpg'),('써큐레이터','10,000원','서울 도봉구 쌍문제1동',44,'30','images/best/bestimg61.jpg'),('이사가면서 가전정리합니다(세탁기,장농 밥솥장 건조기)','30,000원','부산 수영구 망미제2동',16,'23','images/best/bestimg62.jpg'),('선풍기','10,000원','제주 제주시 오라삼동',25,'47','images/best/bestimg63.jpg'),('저진짜 돈이 급합니다 ㅠㅠ(세트형 구매)','440,000원','대구 북구 국우동',4,'8','images/best/bestimg64.jpg'),('명품패딩 싸게 처분합니다','300,000원','세종시  도담동',5,'19','images/best/bestimg65.jpg'),('에어팟 프로','나눔?','경남 양산시 남부동',23,'115','images/best/bestimg66.jpg'),('미스비시예초기','50,000원','제주 제주시 애월읍',5,'6','images/best/bestimg67.jpg'),('무료로드려요','나눔?','경기도 수원시 영통구 매탄동',1,'33','images/best/bestimg68.jpg'),('코스트코 창고','300,000원','경기도 광주시 오포읍',43,'9','images/best/bestimg69.jpg'),('컴퓨터 모니터 엘지전자 27인치','90,000원','서울 송파구 문정동',31,'24','images/best/bestimg70.jpg'),('이사가는데 물품 정리 합니다','1,000원','대전 서구 둔산동',16,'62','images/best/bestimg71.jpg'),('알피쿨45','50,000원','경남 창원시 성산구 가음정동',9,'8','images/best/bestimg72.jpg'),('스토케 트립트랩 하이체어','160,000원','서울 동대문구 용두동',5,'14','images/best/bestimg73.jpg'),('75인치 저가형 tv','150,000원','경남 창원시 마산합포구 월영동',17,'2','images/best/bestimg75.jpg'),('보아르 제습기','50,000원','부산 부산진구 범천동',8,'12','images/best/bestimg76.jpg'),('마샬 스피커','100,000원','서울 은평구 응암동',15,'11','images/best/bestimg77.jpg'),('냉장고','100,000원','경북 구미시 남통동',4,'12','images/best/bestimg78.jpg'),('카페정리합니다','12,345원','서울 관악구 보라매동',17,'15','images/best/bestimg79.jpg'),('b267sm LG 냉장고','100,000원','서울 강남구 대치4동',13,'22','images/best/bestimg80.jpg'),('코웨이 제습기 급처9만^^','90,000원','인천 남동구 논현2동',10,'11','images/best/bestimg81.jpg'),('에어팟맥스 해외제품 판매합니다','150,000원','서울 용산구 신계동',38,'54','images/best/bestimg82.jpg'),('셀린느 가방','200,000원','서울 송파구 가락동',15,'8','images/best/bestimg83.jpg'),('월광보합 2900','40,000원','인천 부평구 청천동',10,'11','images/best/bestimg84.jpg'),('아이폰 se3 화이트','250,000원','서울 관악구 봉천동',12,'15','images/best/bestimg85.jpg'),('신세계 상품권 10만원권','80,000원','경기도 시흥시 거모동',12,'37','images/best/bestimg86.jpg'),('추피의 생활이야기. 70권','90,000원','경남 김해시 장유3동',9,'18','images/best/bestimg87.jpg'),('냉장고 팝니다!','70,000원','울산 북구 화봉동',6,'9','images/best/bestimg88.jpg'),('위닉스 제습기.','30,000원','경기도 시흥시 능곡동',3,'10','images/best/bestimg89.jpg'),('선반','10,000원','경남 거제시 옥포동',6,'7','images/best/bestimg90.jpg'),('장우산 재고 처분합니다','4,000원','경기도 파주시 동패동',96,'28','images/best/bestimg91.jpg'),('LG공기청정기','70,000원','경남 김해시 주촌면',12,'13','images/best/bestimg92.jpg'),('신세계 상품권 30만원 판매 합니다','270,000원','인천 부평구 청천1동',2,'16','images/best/bestimg93.jpg'),('베트남 동 판매합니다','197,000원','부산 남구 대연제3동',9,'13','images/best/bestimg94.jpg'),('가져가주세요ㅠㅠ','5,000원','부산 서구 암남동',12,'7','images/best/bestimg95.jpg');
/*!40000 ALTER TABLE `best` ENABLE KEYS */;
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
