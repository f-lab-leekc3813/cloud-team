import React from 'react';
import classes from './categoriesDetail.module.css';
import { Rate } from 'antd';

export default function CategoriesUIDetail(props) {
  return (
    <div id="contentArea" className={classes.body}>
      <div className={classes.container}>
        <div className={classes.containerTop}>
          <div className={classes.containerTopLeft}>
            <img className={classes.bookImg} src={props.detail?.image || "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"} alt='BookImage' />
          </div>
          <div className={classes.containerTopRight}>
            <span>Title: {props.detail?.title}</span>            
            <span>Categories: {props.detail?.categories}</span>
            <input className={classes.reviewInput} type='text' onChange={props.onChangeScore} placeholder='리뷰점수를 적어주세요'
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  props.onClickSubmit();
                }
              }} />
            <button value={props.detail.title} onClick={props.onClickSubmit} className={classes.btnCart}>리뷰점수 등록</button>
          </div>
        </div>
        <div className={classes.containerBottom}>
              <div className={classes.reviewInfo}>이 책에 대한 리뷰</div>
              <div className={classes.review}>
                <div className={classes.reviewTop}>
                  {props.detail.profileName ? <span>작성자 : {props.detail.profileName}</span> : ""}
                  <Rate disabled defaultValue={props.detail.reviewScore} />
                </div>
                <div className={classes.reviewBottom}>
                  <span>{props.detail.reviewText ? props.detail.reviewText : ''}</span>
                  <span>리뷰요약 :{props.detail.reviewSummary}</span>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
