
import classes from './Home.module.css';
import homeData from '../../data/HomeData.json';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const bestsellerData = homeData.bestsellerData;
const brandImages = homeData.brandImages;



export default function HomeUI(props) {
  return (
    <>
      {props.nick && <button onClick={props.onClickRecommed}>도서추천받기</button>}
      {props.nick && props.click ? 
        <div>
          
        <div className={classes.content1_recommend2}>
          <span className={classes.content1_toplist1}>
            {props.nick}님 맞춤 추천 도서 {'>'}
          </span>
        </div>
        <div className={classes.MachinecarouselContainer}>
          <Carousel>
            {props.machinelearning && Array.isArray(props.machinelearning) ?
             (
              props.machinelearning.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className={classes.MachinecarouselSlide}>
                    <div className={classes.MachineContent}>
                      <div className={classes.MachineBundle}>
                        {item.image ? (
                          <img
                            className={classes.MachinelistImg}
                            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"
                            alt="book photo"
                          />
                        ) : (
                          <div className={classes.listDiv}>
                            <img
                              className={classes.listImg}
                              src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"
                              alt="book photo"
                            />
                          </div>
                        )}
                        <div className={classes.MachineBundleText}>
                          <div className={classes.booktitle}>
                            <h6><a href={item.href}>{item.Title}</a></h6>
                          </div>
                          <h6>{item.authors}</h6>
                          <h6>{item.categories}</h6>
                          <h6>{item.reviewScore}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <p>No machine learning data available.</p>
            )}
          </Carousel>
        </div>
      </div>
        : ''}


      {Array.from({ length: 4 }, (_, index) => (
        <br key={index} />
      ))}
      <div className={classes.content1_recommend2}>
        <span className={classes.content1_toplist1}>
          최다 리뷰 도서  {'>'}
        </span>
      </div>
      {props.data ? (
        <div className={classes.topcontainers}>
          <div className={classes.carouselContainer}>
            <Carousel>
              {props.data.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className={classes.carouselSlide}>
                    <div className={classes.carouselContent}>
                      <div className={classes.dataBundle}>
                        {props.data.slice(index, index + 3).map((item, itemIndex) => (
                          <div key={itemIndex} className={classes.dataBundleItem}>
                            {item.image ? (
                              <img
                                className={classes.carouselImage}
                                src={item.image}
                                alt={`Image ${itemIndex + 1}`}
                              />
                            ) : (
                              <div className={classes.listDiv}>
                                <img
                                  className={classes.listImg}
                                  src={
                                    "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"
                                  }
                                  alt="책사진"
                                />
                              </div>
                            )}
                            <div className={classes.dataBundleText}>
                              <div className={classes.booktitle}>
                                <h6>{item.Title}</h6>
                              </div>
                              <h6>{item.authors}</h6>
                              <h6>{item.reviewScore.toFixed(1)}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      ) : ""}
      <div className={classes.content1_recommend2}>
        <span className={classes.content1_toplist1}>
          별점 기반 추천 도서  {'>'}
        </span>
      </div>
      <br />
      {props.score ? (
        <div className={classes.topcontainers}>
          <div className={classes.carouselContainer}>
            <Carousel>
              {props.score.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className={classes.carouselSlide}>
                    <div className={classes.carouselContent}>
                      <div className={classes.dataBundle}>
                        {props.score.slice(index, index + 3).map((item, itemIndex) => (
                          <div key={itemIndex} className={classes.dataBundleItem}>
                            {item.image ? (
                              <img
                                className={classes.carouselImage}
                                src={item.image}
                                alt={`Image ${itemIndex + 1}`}
                              />
                            ) : (
                              <div className={classes.listDiv}>
                                <img
                                  className={classes.listImg}
                                  src={
                                    "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"
                                  }
                                  alt="책사진"
                                />
                              </div>
                            )}
                            <div className={classes.dataBundleText}>
                              <div className={classes.booktitle}>
                                <h6>{item.Title}</h6>
                              </div>
                              <h6>{item.authors}</h6>
                              <h6>{item.reviewScore.toFixed(1)}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      ) : ""}
      {Array.from({ length: 5 }, (_, index) => (
        <br key={index} />
      ))}
      <section className={classes.content1_recommend1}>
        <div className={classes.content1_recommend2}>
          <span className={classes.content1_toplist1}>
            이번달 베스트 셀러 TOP {'>'}
          </span>
        </div>
        <br />
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
      {Array.from({ length: 20 }, (_, index) => (
        <br key={index} />
      ))}
      <section className={classes.content1_container120}>
        <div className={classes.content1_container220}>
          <h3 className={classes.content1_container520}>
            <div className={classes.content1_text120}>제휴 브랜드</div>
          </h3>
          <br />
          <br />
          <div className={classes.content1_container620}>
            <div className={classes.content1_brandRow}>
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
        </div>
      </section>
      {Array.from({ length: 4 }, (_, index) => (
        <br key={index} />
      ))}
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
              <span className={classes.content_text3}>평일 09:00 ~ 18:00 <br /> 주말/공휴일 휴무</span>
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
              <span className={classes.content_text6}>카카오뱅크 | 예금주: 장경빈 <br /> E-MAIL : iamsicoura@naver.com</span>
            </div>
          </div>
          <div className={classes.content1_blank}></div>
          <div className={classes.content1_flexItem}>
            <div className={classes.content_container11}>
              <span className={classes.content_text7}>1:1문의</span>
              <br />
              <span className={classes.content_text8}>궁금하신 사항을 문의해주세요.</span>
            </div>
            <div className={classes.content_container11}>
              <span className={classes.content_text9}>블로그 & SNS</span>
              <br />
              <span className={classes.content_text10}>
                원투텐 북플 &nbsp;&nbsp; &nbsp; &nbsp; 원투텐 서재<br /> 원투텐 트위터 &nbsp;  &nbsp; 원투텐 페이스북 <br />구름 인스타그램 <br />
              </span>
            </div>
          </div>
          <div className={classes.content1_blank2}>
            <br />
          </div>
          <div className={classes.content1_blank}></div>
          <div className={classes.content1_flexItem}>
            <div className={classes.content_container11}>
              <span className={classes.content_text11}>웹 & 모바일</span>
              <br />
              <span className={classes.content_text12}>Open API <br /> 모바일/앱</span>
            </div>
            <div className={classes.content_container11}>
              <span className={classes.content_text13}>출판사, 판매자 안내</span>
              <br />
              <span className={classes.content_text14}>제휴 & 마케팅 안내 <br /> 출판사/공급사 안내</span>
            </div>
          </div>
          <div className={classes.content1_blank2}>
            <br />
          </div>
        </div>
      </section>
      <section className={classes.content1_container12}>
        <div className={classes.content1_container20}>
          <span className={classes.content_text15}>회사소개 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이용약관 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보처리방침</span>
        </div>
        <div className={classes.content1_userwrap}>
          <img className={classes.content1_image10} src='images/bestseller/library.jpg' alt='photo' />
          <div className={classes.image_text_overlay}>
            <div className={classes.content1_text10}>
              <p>원투텐 대표 &nbsp;  : &nbsp; 이경찬 &nbsp; | &nbsp; 사업자 등록번호 &nbsp; : &nbsp; 123-45-67890</p>

              <p>통신판매업번호 &nbsp; : &nbsp; 제2023-동구제봉로92-1234</p>

              <p>전화&nbsp; : &nbsp; 070-1234-5678 &nbsp; | &nbsp; 개인정보관리자 &nbsp; : &nbsp; 도희건</p>

              <p>광주 동구 제 92(대성학원) 3층 10강의실</p>

              <p>E-MAIL &nbsp; : &nbsp; iamdoxoak@naver.com</p>
              <br />
              <br />
              <p>Hosting by (주) 원투텐 Copyright@ GB. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}