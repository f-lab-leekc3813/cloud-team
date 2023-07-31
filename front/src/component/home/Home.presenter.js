import classes from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


export default function HomeUI() {
  return (
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <title>여기에는 문서의 제목을 입력해주세요</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </head>
      <body>
        <div className="container1">
          <div className={classes.topmenu}>
            <div className={classes.btngroup}>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  분야보기
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">이경찬</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  베스트셀러
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">김지송</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  새로나온 책
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">박예림</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  이벤트
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">도희건</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  추천도서
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/categories'>
                      카테고리(예림)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">장경빈</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className={classes.containers}>
            <div className={classes.container}>
                <Carousel style={{ animation: 'slide 3s infinite' }}>
                    <Carousel.Item>
                        <Link to='/categories'>
                        <img className={classes.slideImage} src="/images/bestseller/bestseller1.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>운영진이 추천하는 책</h3>
                        </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to='/categories'>
                        <img className={classes.slideImage} src="images/bestseller/bestseller2.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 인기 많은 책</h3>
                        </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to='/categories'>
                        <img className={classes.slideImage} src="images/bestseller/bestseller3.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 찜이 많은 책</h3>
                        </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
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
                    <span className={classes.content_text9}>방문수령 매장안내</span>
                    <br/>
                    <span className={classes.content_text10}>방문수령 주문 전 꼭 확인해주세요.</span>
                </div>
                </div>
                <div className={classes.content1_blank2}>
                    <span className={classes.content1_container16} button id="realty_app_download" type="button">
                        <img className={classes.content1_image1} src='images/bestseller/maindirectionimg.png' alt='사진' />
                    </span>
                    <span className={classes.content1_container16} button id="realty_app_download" type="button">
                        <img className={classes.content1_image2} src='images/bestseller/maindirectionimg.png' alt='사진' />
                    </span>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container11}>
                    <span className={classes.content_text11}>배송안내</span>
                    <br/>
                    <span className={classes.content_text12}>구름마켓 배송시스템 안내</span>
                </div>
                <div className={classes.content_container11}>
                    <span className={classes.content_text13}>대량구매 문의</span>
                    <br/>
                    <span className={classes.content_text14}>문의 폼 입력하러가기</span>
                </div>
                </div>
                <div className={classes.content1_blank2}>
                    <span className={classes.content1_container16} button id="realty_app_download" type="button">
                        <img className={classes.content1_image1} src='images/bestseller/maindirectionimg.png' alt='사진' />
                    </span>
                    <span className={classes.content1_container16} button id="realty_app_download" type="button">
                        <img className={classes.content1_image2} src='images/bestseller/maindirectionimg.png' alt='사진' />
                    </span>
                </div>
            </div>
            </section>        
      </body>
    </html>
  );
}