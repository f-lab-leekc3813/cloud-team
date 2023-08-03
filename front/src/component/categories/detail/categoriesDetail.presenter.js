import React from 'react';
import classes from './categoriesDetail.module.css';

export default function CategoriesUIDetail(props) {
  return (
    <div id="contentArea" className={classes.body}>
      <div className={classes.container}>
        <div className={classes.containerTop}>
          <div className={classes.containerTopLeft}>
            <img className={classes.bookImg} src={props.data.image} alt='책표지' />
          </div>
          <div className={classes.containerTopRight}>
            <span>{props.data.title}</span>
            <span>{props.data.authors ?  `저자: ${props.data.authors}` : ''}</span>
            <span>{props.data.categories}</span>
            <div className={classes.button}>						
						<div className={classes.buttonQuantity}>
							주문수량
							{/* <input className={classes.buttonQuantityInput} type="text" value="1" /> */}
							<span>
								<button className={classes.upDownButton}>+</button>
								<button className={classes.upDownButton}>-</button>
							</span>
						</div>
							<button value={props.data.title} onClick={props.onClickSubmit} className = {classes.btnCart}>리뷰점수 등록</button>
					</div>
          <input type='text' onChange={props.onChangeScore} placeholder='리뷰점수를 적어주세요' />
          </div>
        </div>
      </div>
    </div>
  );
}
