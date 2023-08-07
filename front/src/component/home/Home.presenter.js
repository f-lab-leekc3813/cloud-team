
import classes from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import homeData from '../../data/HomeData.json';


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const bestsellerData = homeData.bestsellerData;
const brandImages = homeData.brandImages;
const imagesData = homeData.imagesData;


const imagesData = [
  {
      image: '/images/bestseller/bewhyimage4.png',
      alt: 'Image 1',
      title: 'The House of Sixty Fathers',
      reviewscore: '4.9',
      reviewtext: 'I read this book as a...'
  },
  {
      image: '/images/bestseller/bewhyimage4.png',
      alt: 'Image 1',
      title: 'The House of Sixty Fathers',
      reviewscore: '4.9',
      reviewtext: 'I read this book as a...'
  },
  {
      image: '/images/bestseller/bewhyimage4.png',
      alt: 'Image 1',
      title: 'The House of Sixty Fathers',
      reviewscore: '4.9',
      reviewtext: 'I read this book as a...'
  },
];


const bestsellerData = [
  {
      "image1" : "images/bestseller/bestseller1.jpg",
      "rank" : "1",
      "title" : "세이노의 가르침",
      "rankImage" : "images/bestseller/rankup.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller2.jpg",
      "rank" : "2",
      "title" : "문과 남자의 과학 공부",
      "rankImage" : "images/bestseller/rankdown.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller3.jpg",
      "rank" : "3",
      "title" : "최애의 아이 11",
      "rankImage" : "images/bestseller/rankup.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller4.jpg",
      "rank" : "4",
      "title" : "아주 희미한",
      "rankImage" : "images/bestseller/rankdown.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller5.jpg",
      "rank" : "5",
      "title" : "도둑맞은 집중력",
      "rankImage" : "images/bestseller/rankdown.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller6.jpg",
      "rank" : "6",
      "title" : "스튜디오 지브리 입체건축...",
      "rankImage" : "images/bestseller/rankup.jpg",
      "rankNumber" : "4"
  },{
      "image1" : "images/bestseller/bestseller7.jpg",
      "rank" : "7",
      "title" : "스파이 패밀리 11",
      "rankImage" : "images/bestseller/rankup.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller8.jpg",
      "rank" : "8",
      "title" : "최적의 공부 뇌",
      "rankImage" : "images/bestseller/rankup.jpg",
      "rankNumber" : "1"
  },{
      "image1" : "images/bestseller/bestseller9.jpg",
      "rank" : "9",
      "title" : "브랜드 설계자",
      "rankImage" : "images/bestseller/rankup.jpg",
      "rankNumber" : "17"
  }
]

export default function HomeUI() {
  return (
    <>
        <div className={classes.content1_recommend2}>
          <span className={classes.content1_toplist1}>
            믿고 보는 구름 에디터 추천작  {'>'}
          </span>
        </div>
        <div className={classes.containers}>
          <div className={classes.container}>
          <Carousel style={{ animation: 'slide 3s infinite' }}>
              {imagesData.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className={classes.slideContainer}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className={classes.slideContent}>
                        <div className={classes.imageContainer}>
                          <img
                            className={classes.slideImage}
                            src={data.image}
                            alt={data.alt}
                          />
                        </div>
                        <div className={classes.textContainer}>
                          <p className={classes.title}>{data.title}</p>

                          <p className={classes.reviewscore}>
                            Review Score: {data.reviewscore}
                          </p>
                          <p className={classes.reviewtext}>{data.reviewtext}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={classes.content1_recommend2}>
            <span className={classes.content1_toplist1}>
              실시간 인기 콘텐츠  {'>'}
            </span>
        </div>
        <br/>
        <div className={classes.containers}>
          <div className={classes.container}>
            <Carousel style={{ animation: 'slide 3s infinite' }}>
              {imagesData.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className={classes.slideContainer}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className={classes.slideContent}>
                        <div className={classes.imageContainer}>
                          <img
                            className={classes.slideImage}
                            src={data.image}
                            alt={data.alt}
                          />
                        </div>
                        <div className={classes.textContainer}>
                          <p className={classes.title}>{data.title}</p>
                          <p className={classes.reviewscore}>
                            Review Score: {data.reviewscore}
                          </p>
                          <p className={classes.reviewtext}>{data.reviewtext}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={classes.content1_recommend1}>
          <div className={classes.content1_recommend2}>
            <span className={classes.content1_toplist1}>
              이번달 베스트 셀러 TOP {'>'}
            </span>
          </div>
          <br/>
          <div className={classes.gridContainer}>
            {bestsellerData.map((bestsellerData, index) => (
              <div className={classes.gridItem} key={index}>
                <div className={classes.gridContent}>
                  <div className={classes.content6_grid}>
                    <img className={classes.content1_listimage1} src={bestsellerData.image1} alt="wallpaper" />
                  </div>
                  <div className={classes.content1_textContainer}>
                    <div className={classes.content1_list2}>
                      <span className={classes.content1_toptext1}>{bestsellerData.rank}</span>
                    </div>
                    <div className={classes.content1_list3}>
                      <span className={classes.content1_toptext2}>{bestsellerData.title}</span>
                    </div>
                    <div className={classes.content1_rankimageContainer}>
                      <img className={classes.content1_rankimage1} src={bestsellerData.rankImage} alt="wallpaper" />
                    </div>
                    <div className={classes.content1_list4}>
                      <span className={classes.content1_ranknumber1}>{bestsellerData.rankNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={classes.content1_container120}>
          <div className={classes.content1_container220}>
            <h3 className={classes.content1_container520}>
              <div className={classes.content1_text120}>제휴 브랜드</div>
            </h3>
            <div className={classes.content1_container620}>
              {brandImages.map((image, index) => (
                <span className={classes.content1_brand1} key={index}>
                  <img
                    className={classes[`content1_image${index + 1}20`]}
                    src={image.path} // Use image.path here
                    alt={`Brand ${index + 1}`}
                  />
                </span>
              ))}
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={classes.content1_container1}>
            <div className={classes.content1_flexContainer}>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container3}>
                    <span className={classes.content_text1}>고객센터</span>
                </div>
                <div className={classes.content_container4}>
                    <span className={classes.content_text2}>010-2538-6595</span>
                </div>
                <div className={classes.content_container5}>
                    <span className={classes.content_text3}>평일 09:00 ~ 18:00 <br/> 주말/공휴일 휴무</span>
                </div>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container7}>
                    <span className={classes.content_text4}>입금계좌</span>
                </div>
                <div className={classes.content_container8}>
                    <span className={classes.content_text5}>3333-09-5847103</span>
                </div>
                <div className={classes.content_container9}>
                    <span className={classes.content_text6}>카카오뱅크 | 예금주: 장경빈 <br/> E-MAIL : iamsicoura@naver.com</span>
                </div>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container11}>
                    <span className={classes.content_text7}>1:1문의</span>
                    <br/>
                    <span className={classes.content_text8}>궁금하신 사항을 문의해주세요.</span>
                </div>
                <div className={classes.content_container11}>
                    <span className={classes.content_text9}>블로그 & SNS</span>
                    <br/>
                    <span className={classes.content_text10}>
                      구름 북플 &nbsp;  &nbsp; &nbsp; &nbsp; 구름 서재<br/> 구름 트위터 &nbsp;  &nbsp; 구름 페이스북 <br/>구름 인스타그램 <br/>
                    </span>
                </div>
                </div>
                <div className={classes.content1_blank2}>
                    <br/>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container11}>
                    <span className={classes.content_text11}>웹 & 모바일</span>
                    <br/>
                    <span className={classes.content_text12}>Open API <br/> 모바일/앱</span>
                </div>
                <div className={classes.content_container11}>
                    <span className={classes.content_text13}>출판사, 판매자 안내</span>
                    <br/>
                    <span className={classes.content_text14}>제휴 & 마케팅 안내 <br/> 출판사/공급사 안내</span>
                </div>
                </div>
                <div className={classes.content1_blank2}>
                    <br/>
                </div>
            </div>
            </section>   
            <br/>
            <br/>
            <section className={classes.content1_container12}>
                <div className={classes.content1_container20}>
                    <span className={classes.content_text15}>회사소개 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이용약관 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보처리방침</span>
                </div>
                <div className={classes.content1_userwrap}>
                  <img className={classes.content1_image10} src='images/bestseller/library.jpg' alt='photo' />
                  <div className={classes.image_text_overlay}>
                    <div className={classes.content1_text10}>
                      <p>구름 대표 &nbsp;  : &nbsp; 이경찬 &nbsp; | &nbsp; 사업자 등록번호 &nbsp; : &nbsp; 123-45-67890</p>

                      <p>통신판매업번호 &nbsp; : &nbsp; 제2023-동구제봉로92-1234</p>

                      <p>전화&nbsp; : &nbsp; 070-1234-5678 &nbsp; | &nbsp; 개인정보관리자 &nbsp; : &nbsp; 도희권</p>

                      <p>광주 동구 제 92(대성학원) 3층 10강의실</p>

                      <p>E-MAIL &nbsp; : &nbsp; iamdoxoak@naver.com</p>
                      <br/>
                      <br/>
                      <p>Hosting by (주) 구름 Copyright@ GB. All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </section>  
          </>
  );
}