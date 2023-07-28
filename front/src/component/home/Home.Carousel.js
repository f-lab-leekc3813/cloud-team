import classes from './Home.Carousel.module.css'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content1.module.css'; 
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={classes.slide_image} src='/images/main/backgroundimg1.jpg' alt='배경화면' />
        <Carousel.Caption>
          <h3>푸른 하늘 구름서점</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={classes.slide_image} src='/images/main/backgroundimg2.jpg' alt='배경화면' />
        <Carousel.Caption>
          <h3>금주 베스트셀러</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={classes.slide_image} src='/images/main/backgroundimg3.jpg' alt='배경화면' />
        <Carousel.Caption>
          <h3>추천 도서</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;