import React from 'react';
import classes from './categoriesDetail.module.css';

export default function CategoriesUIDetail(props) {
  return (
    <div id="contentArea" className={classes.body}>
      <div className={classes.container}>
        <div className={classes.containerTop}>
          <div className={classes.containerTopLeft}>
            <img className={classes.bookImg} src='https://image.yes24.com/momo/TopCate0001/kepub/L_31966.jpg' alt='책표지' />
          </div>
          <div className={classes.containerTopRight}>
            <span>바보빅터 Title</span>
            <span>저자 : 호아킴 데 포사다 authors</span>
            <span>카테고리 categories</span>
          </div>
        </div>
        <div className={classes.containerBottom}>
          <div className={classes.containerBottomContent}>
            <span className={classes.id}>leekc</span>
            <span>책이 정말 좋아요</span>
          </div>
        </div>
      </div>
    </div>
  );
}
