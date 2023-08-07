import React from 'react';
import classes from './homeDetail.module.css';

export default function HomeUIDetail(props) {
  return (
    <div id="contentArea" className={classes.body}>
      <div className={classes.container}>
        <div className={classes.containerTop}>
          <div className={classes.containerTopLeft}>
            <img className={classes.bookImg} src={props.detail?.image || "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"} />
          </div>
          <div className={classes.containerTopRight}>
            <span>{props.detail?.title}</span>
            <span>{props.detail?.categories}</span>
            <div className={classes.button}>
              <div className={classes.buttonQuantity}>
                주문수량
                {/* <input className={classes.buttonQuantityInput} type="text" value="1" /> */}
                <span>
                  <button className={classes.upDownButton}>+</button>
                  <button className={classes.upDownButton}>-</button>
                </span>
              </div>
              <button value={props.detail.title} onClick={props.onClickSubmit} className={classes.btnCart}>리뷰점수 등록</button>
            </div>
            <input type='text' onChange={props.onChangeScore} placeholder='리뷰점수를 적어주세요'
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  props.onClickSubmit();
                }
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}
