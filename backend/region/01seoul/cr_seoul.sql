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
-- Table structure for table `seoul`
--

DROP TABLE IF EXISTS `seoul`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seoul` (
  `item` text,
  `price` text,
  `region` text,
  `like` int DEFAULT NULL,
  `chat` text,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seoul`
--

LOCK TABLES `seoul` WRITE;
/*!40000 ALTER TABLE `seoul` DISABLE KEYS */;
INSERT INTO `seoul` VALUES ('위닉스 제습기 (1등급 효율) 급처','50,000원','서울 관악구 서원동',17,'37','images/se/seimg0.jpg'),('LG WHISEN 제습기','50,000원','서울 강남구 개포4동',9,'35','images/se/seimg1.jpg'),('제습기','50,000원','서울 강서구 화곡제1동',9,'29','images/se/seimg2.jpg'),('제습기 LG','50,000원','서울 서초구 방배2동',5,'27','images/se/seimg3.jpg'),('샤넬 디올 가방들 정리합니다','100원','서울 강남구 신사동',90,'48','images/se/seimg4.jpg'),('이민 및 이사 정리 (책상, 침대, 식탁, 소파, 식기세척기, 공기청정기, 매거진랙, 티비다이, 의자 등)','100,000원','서울 동대문구 휘경제1동',30,'23','images/se/seimg5.jpg'),('보쉬 전동드릴','50,000원','서울 양천구 목1동',16,'12','images/se/seimg6.jpg'),('다이슨. 드라이기','150,000원','서울 동대문구 장안동',13,'13','images/se/seimg7.jpg'),('급해요 ㅜㅜㅜ','1원','서울 노원구 상계10동',2,'3','images/se/seimg8.jpg'),('제습기 팝니다','30,000원','서울 은평구 구산동',9,'11','images/se/seimg9.jpg'),('써큐레이터','10,000원','서울 도봉구 쌍문제1동',44,'30','images/se/seimg10.jpg'),('컴퓨터 모니터 엘지전자 27인치','90,000원','서울 송파구 문정동',31,'24','images/se/seimg11.jpg'),('스토케 트립트랩 하이체어','160,000원','서울 동대문구 용두동',5,'14','images/se/seimg12.jpg'),('마샬 스피커','100,000원','서울 은평구 응암동',15,'11','images/se/seimg13.jpg'),('카페정리합니다','12,345원','서울 관악구 보라매동',17,'15','images/se/seimg14.jpg'),('b267sm LG 냉장고','100,000원','서울 강남구 대치4동',13,'22','images/se/seimg15.jpg'),('에어팟맥스 해외제품 판매합니다','150,000원','서울 용산구 신계동',38,'54','images/se/seimg16.jpg'),('셀린느 가방','200,000원','서울 송파구 가락동',15,'8','images/se/seimg17.jpg'),('아이폰 se3 화이트','250,000원','서울 관악구 봉천동',12,'15','images/se/seimg18.jpg'),('발뮤다, 다이슨 선풍기 판매합니다','100,000원','서울 강남구 삼성동',11,'13','images/se/seimg20.jpg'),('프라다 사피아노 핸드백','100,000원','서울 강남구 논현2동',25,'7','images/se/seimg21.jpg'),('조화 나무','10,000원','서울 종로구 종로5가',14,'11','images/se/seimg22.jpg'),('전기자전거','99,000원','서울 종로구 인사동',36,'61','images/se/seimg23.jpg'),('스토케 트립트랩','100,000원','서울 강남구 대치동',6,'13','images/se/seimg24.jpg'),('아임삭 전동드릴 판매합니다','50,000원','서울 구로구 구로제4동',15,'10','images/se/seimg25.jpg'),('삼성 드럼세탁기 팝니다.2017년 구입','70,000원','서울 강북구 번3동',7,'8','images/se/seimg26.jpg'),('과자 2만원에 일괄로 가져가세요','20,000원','서울 금천구 가산동',38,'8','images/se/seimg27.jpg'),('전부 이만원','20,000원','서울 강북구 번동',8,'3','images/se/seimg28.jpg'),('삼성 스탠드 에어컨','40,000원','서울 양천구 목동',4,'12','images/se/seimg29.jpg'),('루이비통 프라다 빈티지백','60,000원','서울 영등포구 문래동6가',24,'11','images/se/seimg32.jpg'),('LG 제습기 DQ200PPBC','300,000원','서울 서초구 반포4동',12,'10','images/se/seimg33.jpg'),('헌터 레인부츠','50,000원','서울 구로구 항동',16,'20','images/se/seimg34.jpg'),('삼성 커브드 모니터','50,000원','서울 서초구 서초동',3,'8','images/se/seimg35.jpg'),('딱한번 사용했어요','500,000원','서울 동대문구 장안제1동',8,'4','images/se/seimg36.jpg'),('참새우젓 2kg','13,000원','서울 강동구 암사동',45,'35','images/se/seimg37.jpg'),('코렐 식기세트(8인)','30,000원','서울 동작구 신대방동',10,'5','images/se/seimg38.jpg'),('100달러 50달러 팝니다','140,000원','서울 관악구 미성동',22,'56','images/se/seimg39.jpg'),('타이틀리스트 52,57,60도 웨지','30,000원','서울 노원구 월계동',28,'18','images/se/seimg40.jpg'),('토리버치 페리 트리플 컴파트먼트 스몰 토트 백 회갈색','55,000원','서울 서대문구 현저동',24,'8','images/se/seimg41.jpg'),('구찌 선글라스 팝니다','10,000원','서울 동대문구 답십리동',19,'23','images/se/seimg42.jpg'),('위닉스 제습기','85,000원','서울 강서구 등촌동',4,'6','images/se/seimg43.jpg'),('<급처>에어팟 프로2 완전쌔거','234,000원','서울 구로구 구로제4동',28,'44','images/se/seimg44.jpg'),('다이슨 정품 청소기','70,000원','서울 강남구 삼성동',18,'5','images/se/seimg45.jpg'),('삼성 건조기 9kg','70,000원','서울 동대문구 답십리제1동',7,'5','images/se/seimg46.jpg'),('냉장고 팝니다','50,000원','서울 동작구 상도제2동',4,'8','images/se/seimg47.jpg'),('다이슨 재당근해요','100,000원','서울 구로구 오류동',7,'5','images/se/seimg48.jpg'),('골프채 풀세트(남성용)','200,000원','서울 동작구 신대방동',10,'1','images/se/seimg49.jpg'),('LG 제습기','60,000원','서울 광진구 자양동',6,'8','images/se/seimg50.jpg'),('여수 라테라스 숙박권  판매합니다~','100,000원','서울 동대문구 휘경제2동',7,'12','images/se/seimg51.jpg'),('롯데상품권 판매합니다','180,000원','서울 성동구 도선동',1,'8','images/se/seimg52.jpg'),('의자 테이블 각각 1000원에 판매합니다','1,000원','서울 마포구 연남동',25,'26','images/se/seimg53.jpg'),('보쉬 전동 드릴','19,000원','서울 성동구 성수2가제1동',9,'6','images/se/seimg54.jpg'),('카페정리 합니다','123원','서울 광진구 자양제1동',3,'9','images/se/seimg55.jpg'),('타이틀리스트 퍼터 SCOTTY COMERON SELECT SQUAREBACK 34인치','100,000원','서울 양천구 목5동',8,'6','images/se/seimg56.jpg'),('JW 메리어트 호텔  플레이버즈 뷔페상품권','240,000원','서울 강남구 도곡1동',6,'11','images/se/seimg57.jpg'),('삼성 65인치 커브드tv + 스탠드','350,000원','서울 성동구 성수1가제1동',21,'10','images/se/seimg58.jpg'),('5단 수납장 판매 합니다.','5,000원','서울 도봉구 창제2동',33,'26','images/se/seimg59.jpg'),('프라다 정품 빅백','90,000원','서울 강남구 신사동',24,'5','images/se/seimg60.jpg'),('도레미곰45권','100,000원','서울 강남구 역삼2동',5,'11','images/se/seimg61.jpg'),('마뗑킴 티셔츠 (미착용)','10,000원','서울 강남구 대치동',10,'8','images/se/seimg62.jpg'),('무신사 적립금','나눔?','서울 관악구 신림동',6,'33','images/se/seimg63.jpg'),('14k 팔찌','120,000원','서울 강서구 등촌동',7,'3','images/se/seimg64.jpg'),('선풍기','7,000원','서울 도봉구 방학동',0,'6','images/se/seimg65.jpg'),('구찌 마몽트 벨트','95,000원','서울 강남구 대치4동',44,'17','images/se/seimg66.jpg'),('HAY Ray 라운지체어','200,000원','서울 용산구 한남동',42,'3','images/se/seimg67.jpg'),('msi gtx1060 그래픽카드 팝니다','50,000원','서울 관악구 삼성동',17,'20','images/se/seimg68.jpg'),('일체형에어컨, 이동식에어컨','30,000원','서울 강서구 화곡제6동',9,'4','images/se/seimg69.jpg'),('Bicycle','20,000원','서울 강동구 성내제2동',6,'13','images/se/seimg70.jpg'),('위니아_이동형 에어컨 제습기','100,000원','서울 송파구 문정1동',6,'5','images/se/seimg71.jpg'),('위닉스 제습기','80,000원','서울 관악구 행운동',11,'12','images/se/seimg72.jpg'),('갤럭시 S23, 갤럭시워치 5 팝니다!','800,000원','서울 서대문구 연희동',9,'8','images/se/seimg73.jpg'),('뉴발란스 운동화','5,000원','서울 송파구 석촌동',6,'3','images/se/seimg74.jpg'),('에어컨 팔아요(깨끗)','200,000원','서울 은평구 진관동',6,'8','images/se/seimg75.jpg'),('삼성 액티브워시 세탁기','60,000원','서울 강동구 고덕제1동',6,'9','images/se/seimg76.jpg'),('컴퓨터모니터','10,000원','서울 송파구 송파동',6,'7','images/se/seimg77.jpg'),('5단 서랍장','10,000원','서울 성북구 길음제1동',11,'6','images/se/seimg78.jpg'),('2도어 냉장고','300,000원','서울 강동구 천호동',10,'11','images/se/seimg79.jpg'),('쿠쿠압력밥솥 10인분','8,000원','서울 구로구 천왕동',6,'7','images/se/seimg80.jpg'),('보온도시락','5,000원','서울 관악구 행운동',4,'8','images/se/seimg81.jpg'),('낚시 주꾸미 갑오징어 문어 에기 판매','10,000원','서울 은평구 신사제1동',21,'18','images/se/seimg82.jpg'),('LG 43인치 스탠드형 tv 급처분합니다.','100,000원','서울 구로구 개봉제1동',8,'5','images/se/seimg83.jpg'),('삼성 tv 50인치','150,000원','서울 강남구 도곡동',10,'1','images/se/seimg84.jpg'),('에르메스 향수 / 떼르데르메스 인텐스 베티버 오드퍼퓸','30,000원','서울 송파구 가락1동',16,'15','images/se/seimg85.jpg'),('디월트','150,000원','서울 강북구 미아동',1,'7','images/se/seimg86.jpg'),('디올 바비 라지 백','500,000원','서울 중랑구 중화제2동',25,'7','images/se/seimg87.jpg'),('맨시티 vs at마드리드 경기 프리미엄,2등석 양도드려요!','10,000원','서울 용산구 원효로제1동',6,'20','images/se/seimg88.jpg'),('제습기(캐리어)','90,000원','서울 노원구 상계1동',28,'37','images/se/seimg89.jpg'),('위니아 제습기 8L','90,000원','서울 구로구 개봉동',7,'8','images/se/seimg90.jpg'),('30인치 캐리어','50,000원','서울 서초구 반포1동',3,'6','images/se/seimg91.jpg'),('아이닉 i20 무선청소기 팔아요','30,000원','서울 강남구 역삼동',9,'8','images/se/seimg92.jpg'),('선풍기','5,000원','서울 강남구 세곡동',7,'10','images/se/seimg93.jpg'),('핑 5번 우드 판매','100,000원','서울 강남구 압구정동',37,'36','images/se/seimg94.jpg'),('위닉스 제습기 뽀송','150,000원','서울 강서구 화곡제8동',2,'6','images/se/seimg96.jpg'),('LG제습기(10리터)','90,000원','서울 관악구 청림동',29,'15','images/se/seimg97.jpg'),('winix 제습기 팝니다 10리터','150,000원','서울 노원구 공릉1동',6,'7','images/se/seimg98.jpg');
/*!40000 ALTER TABLE `seoul` ENABLE KEYS */;
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
