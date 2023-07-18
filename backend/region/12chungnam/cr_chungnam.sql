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
-- Table structure for table `chungnam`
--

DROP TABLE IF EXISTS `chungnam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chungnam` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chungnam`
--

LOCK TABLES `chungnam` WRITE;
/*!40000 ALTER TABLE `chungnam` DISABLE KEYS */;
INSERT INTO `chungnam` VALUES ('위닉스 제습기 (DXAH100-IWK)','70,000원','충남 천안시 서북구 불당동',35,'70','images/cn/cnimg0.jpg'),('제습기 팝니다','30,000원','충남 천안시 서북구 성거읍',8,'27','images/cn/cnimg1.jpg'),('쿠쿠 제습기','50,000원','충남 천안시 서북구 쌍용2동',4,'18','images/cn/cnimg2.jpg'),('아임삭 드릴','70,000원','충남 아산시 배방읍',16,'8','images/cn/cnimg3.jpg'),('가정용 냉동고 판매','150,000원','충남 서산시 동문2동',9,'11','images/cn/cnimg4.jpg'),('삼성 S23U 256GB 새폰','310,000원','충남 아산시 온양2동',10,'28','images/cn/cnimg6.jpg'),('자전거 사실분','70,000원','충남 당진시 대덕동',14,'17','images/cn/cnimg7.jpg'),('직접농사지은고춧가루','25,000원','충남 서산시 석림동',2,'0','images/cn/cnimg8.jpg'),('제습기 판매합니다.','150,000원','충남 태안군 태안읍',13,'16','images/cn/cnimg9.jpg'),('에어컨','60,000원','충남 천안시 동남구 신부동',2,'7','images/cn/cnimg10.jpg'),('삼성 무풍에어컨','350,000원','충남 서산시 읍내동',6,'4','images/cn/cnimg11.jpg'),('붙임머리 골라가세요','50,000원','충남 천안시 서북구 두정동',8,'15','images/cn/cnimg12.jpg'),('z플립3','150,000원','충남 아산시 배방읍',13,'7','images/cn/cnimg13.jpg'),('무선 청소기','10,000원','충남 아산시 배방읍',2,'7','images/cn/cnimg15.jpg'),('컨테이너 3x5 판매합니다','700,000원','충남 공주시 계룡면',2,'7','images/cn/cnimg16.jpg'),('카놀라유 500ml*4 6,000원에 판매합니다.','6,000원','충남 아산시 배방읍',3,'7','images/cn/cnimg17.jpg'),('클라쎄 냉장고 판매','90,000원','충남 아산시 음봉면',3,'9','images/cn/cnimg18.jpg'),('고야드 클러치 mm 급처합니다','110,000원','충남 천안시 서북구 부성1동',5,'10','images/cn/cnimg19.jpg'),('초보미싱','20,000원','충남 예산군 덕산면',0,'3','images/cn/cnimg20.jpg'),('선반','10,000원','충남 천안시 서북구 불당동',11,'12','images/cn/cnimg21.jpg'),('원목 선반','10,000원','충남 천안시 서북구 쌍용동',6,'2','images/cn/cnimg22.jpg'),('급처!! 21년 구매 삼성2in1 무풍에어컨','500,000원','충남 아산시 배방읍',9,'7','images/cn/cnimg23.jpg'),('버즈2프로','95,000원','충남 아산시 배방읍',8,'11','images/cn/cnimg24.jpg'),('삼성 아기사랑세탁기','35,000원','충남 천안시 서북구 불당동',5,'5','images/cn/cnimg25.jpg'),('루이비통 탬버린백 팔아요(정품이구요,하자있어요(몇군데 리폼했어요)','290,000원','충남 아산시 탕정면',17,'5','images/cn/cnimg26.jpg'),('삼성 65인치 스탠드 TV','100,000원','충남 아산시 배방읍',7,'2','images/cn/cnimg27.jpg'),('테팔 무선청소기','10,000원','충남 아산시 권곡동',5,'8','images/cn/cnimg28.jpg'),('게이밍 본체 판매합니다','300,000원','충남 당진시 채운동',17,'14','images/cn/cnimg29.jpg'),('각종 샤워호스','1,000원','충남 논산시 내동',5,'7','images/cn/cnimg30.jpg'),('콤프레샤','65,000원','충남 천안시 서북구 성정동',16,'9','images/cn/cnimg31.jpg'),('이동식 에어컨','80,000원','충남 아산시 배방읍',6,'4','images/cn/cnimg32.jpg'),('이케아선반','10,000원','충남 당진시 원당동',10,'7','images/cn/cnimg33.jpg'),('헌터 레인부츠','50,000원','충남 예산군 삽교읍',5,'6','images/cn/cnimg34.jpg'),('화분','5,000원','충남 천안시 동남구 목천읍',2,'2','images/cn/cnimg36.jpg'),('갤럭시 A23','60,000원','충남 예산군 삽교읍',13,'25','images/cn/cnimg38.jpg'),('위니아 제습기','100,000원','충남 천안시 서북구 성성동',6,'11','images/cn/cnimg39.jpg'),('세라젬 로봇청소기','50,000원','충남 홍성군 홍북읍',5,'5','images/cn/cnimg40.jpg'),('노트 10 5G 판매합니다 ??','180,000원','충남 천안시 동남구 청당동',11,'8','images/cn/cnimg41.jpg'),('캐리어 냉난방기 7평형 3대','400,000원','충남 아산시 배방읍',2,'12','images/cn/cnimg42.jpg'),('선풍기','15,000원','충남 천안시 서북구 두정동',9,'15','images/cn/cnimg43.jpg'),('업소용 웍 궁중팬','12,000원','충남 천안시 동남구 청수동',6,'3','images/cn/cnimg44.jpg'),('(새상품)써치컬 14k   로즈골드팔찌','40,000원','충남 천안시 서북구 쌍용2동',6,'11','images/cn/cnimg45.jpg'),('제습기팝니다','130,000원','충남 천안시 서북구 성정동',3,'7','images/cn/cnimg46.jpg'),('자전거 실내용','10원','충남 천안시 서북구 백석동',3,'5','images/cn/cnimg47.jpg'),('농막','750만원','충남 서산시 예천동',13,'6','images/cn/cnimg48.jpg'),('쿠잉 냉장고 판매합니다','80,000원','충남 태안군 태안읍',3,'2','images/cn/cnimg49.jpg'),('마이크로 킥보드 맥시','50,000원','충남 아산시 둔포면',3,'5','images/cn/cnimg50.jpg'),('선반','10,000원','충남 논산시 내동',6,'3','images/cn/cnimg51.jpg'),('용곡동에서 주웠어요','100원','충남 천안시 동남구 용곡동',1,'0','images/cn/cnimg52.jpg'),('팔찌','300,000원','충남 서산시 동문동',9,'9','images/cn/cnimg53.jpg'),('캐리어 클라윈드 냉장고 판매합니다.','100,000원','충남 천안시 서북구 백석동',2,'6','images/cn/cnimg54.jpg'),('삼성 2 in 1에어컨 판매합니다.','260,000원','충남 천안시 동남구 다가동',11,'7','images/cn/cnimg55.jpg'),('치닝디핑 인클라인(각도조절)벤치 팝니다.','20,000원','충남 천안시 서북구 차암동',3,'3','images/cn/cnimg56.jpg'),('행거 가져가세요 깨끗해요!','10,000원','충남 천안시 서북구 백석동',1,'4','images/cn/cnimg57.jpg'),('4인 원형 테이블 만원에 팝니다','10,000원','충남 천안시 동남구 봉명동',5,'7','images/cn/cnimg58.jpg'),('코드릴','10,000원','충남 아산시 탕정면',7,'5','images/cn/cnimg59.jpg'),('마끼다 유선그라인더','35,000원','충남 천안시 서북구 불당동',7,'4','images/cn/cnimg60.jpg'),('인모가발 그냥가발 정리합니다 무조건 5,000원','5,000원','충남 아산시 탕정면',13,'8','images/cn/cnimg61.jpg'),('145L 냉장고 팝니다','10,000원','충남 천안시 동남구 목천읍',1,'2','images/cn/cnimg62.jpg'),('s22울트라 리퍼폰','749,000원','충남 천안시 서북구 두정동',4,'6','images/cn/cnimg63.jpg'),('헌터 오리지널 톨 레인부츠 (무광)  사이즈 240 새상품','110,000원','충남 천안시 서북구 두정동',11,'9','images/cn/cnimg64.jpg'),('노기스','1,234원','충남 아산시 음봉면',8,'13','images/cn/cnimg65.jpg'),('다이슨선풍기','160,000원','충남 천안시 서북구 백석동',23,'5','images/cn/cnimg66.jpg'),('제발 가져가세용. 옷이 너무 많아요 ㅋㅋㅋ','10,000원','충남 천안시 서북구 성정동',17,'4','images/cn/cnimg67.jpg'),('LG 냉장고 278L (2018년 구매)','200,000원','충남 아산시 배방읍',7,'7','images/cn/cnimg68.jpg'),('에어컨 팔아요.','200,000원','충남 아산시 음봉면',2,'8','images/cn/cnimg69.jpg'),('세탁기건조기세트','550,000원','충남 천안시 동남구 신방동',5,'3','images/cn/cnimg70.jpg'),('냉장고','100,000원','충남 공주시 옥룡동',3,'2','images/cn/cnimg71.jpg'),('포그내 맥스 올인원 판매합니다','110,000원','충남 아산시 탕정면',6,'5','images/cn/cnimg72.jpg'),('암막커튼','20,000원','충남 아산시 배방읍',6,'3','images/cn/cnimg73.jpg'),('디월트 DCF815 12V2A 본체+배터리 팝니다','100,000원','충남 논산시 대교동',5,'9','images/cn/cnimg74.jpg'),('여러물건 사가세요','30,000원','충남 보령시 청라면',3,'8','images/cn/cnimg75.jpg'),('5단 서랍장','5,000원','충남 아산시 배방읍',7,'3','images/cn/cnimg76.jpg'),('완전 새신발   265','40,000원','충남 천안시 서북구 쌍용1동',2,'5','images/cn/cnimg77.jpg'),('헌터레인부츠','15,000원','충남 당진시 수청동',5,'5','images/cn/cnimg78.jpg'),('노트북 갤럭시북고 13만','130,000원','충남 천안시 서북구 두정동',14,'8','images/cn/cnimg79.jpg'),('잘만 컴퓨터 본체 케이스','10,000원','충남 아산시 탕정면',3,'5','images/cn/cnimg80.jpg'),('티비 팔아요','30,000원','충남 천안시 서북구 성성동',8,'9','images/cn/cnimg81.jpg'),('삼성 냉장고(306리터)','200,000원','충남 부여군 부여읍',3,'6','images/cn/cnimg82.jpg'),('플립3 256 크림 저렴히팝니다','170,000원','충남 천안시 동남구 청룡동',10,'4','images/cn/cnimg83.jpg'),('선풍기판매','25,000원','충남 서산시 예천동',0,'3','images/cn/cnimg84.jpg'),('이사처분) lg 냉장고 189리터','180,000원','충남 아산시 배방읍',7,'5','images/cn/cnimg85.jpg'),('원형탁자 가져가세요','1,000원','충남 아산시 배방읍',1,'3','images/cn/cnimg86.jpg'),('추피책판매합니다.','30,000원','충남 서산시 성연면',2,'5','images/cn/cnimg87.jpg'),('에어팟 맥스 스그 2시간착용','450,000원','충남 천안시 서북구 직산읍',2,'4','images/cn/cnimg88.jpg'),('보쉬 전동드릴 판매합니다.','50,000원','충남 아산시 온양6동',4,'5','images/cn/cnimg89.jpg'),('에어컨판매해요','300,000원','충남 당진시 당진3동',0,'4','images/cn/cnimg90.jpg'),('아이폰 12프로','250,000원','충남 보령시 웅천읍',2,'4','images/cn/cnimg91.jpg'),('애어팟 3팔아요','59,000원','충남 천안시 서북구 성정1동',3,'4','images/cn/cnimg92.jpg'),('넷플릭스 같이 보실 분','2,500원','충남 천안시 서북구 불당동',3,'4','images/cn/cnimg93.jpg'),('아이폰11 128기가','360,000원','충남 천안시 서북구 차암동',4,'6','images/cn/cnimg94.jpg'),('전자레인지 판매','15,000원','충남 천안시 서북구 차암동',4,'5','images/cn/cnimg95.jpg');
/*!40000 ALTER TABLE `chungnam` ENABLE KEYS */;
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