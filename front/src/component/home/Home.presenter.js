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
        <style>
          {`
            /* Custom CSS for carousel */
            .carousel-container {
              /* Center the carousel horizontally and vertically */
              display: flex;
              justify-content: center;
              align-items: center;
              /* Set the height of the container to occupy the full viewport height */
              height: 100vh;
              display: grid;
            }

            .carousel {
              /* Adjust the desired width for the carousel */
              width: 600px;
              /* Adjust the desired height for the carousel */
              height: 400px;
              /* Add any other styles you want for the carousel */
            }

            .carousel-inner {
              /* Adjust the desired width for the carousel items */
              width: 100%;
              /* Adjust the desired height for the carousel items */
              height: 100%;
            }

            .carousel-item img {
              /* Ensure images cover the entire carousel area */
              object-fit: cover;
              /* Adjust the desired width for the carousel item images */
              width: 100%;
              /* Adjust the desired height for the carousel item images */
              height: 100%;
            }
          `}
        </style>
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
                <Carousel>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/bestseller/bestseller1.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>운영진이 추천하는 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="images/bestseller/bestseller2.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 인기 많은 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="images/bestseller/bestseller3.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 찜이 많은 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
      </body>
    </html>
  );
}