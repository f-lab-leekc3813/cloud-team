// import classes from './categoriesDetail.module.css';

// export default function CategoriesDetailUI(props) { 
//     return (<>
//     {/* <div className={classes.container}>
//       const hello = document.createElement
//         HTML 영역입니다(지송)
//         title,price,author,image,publisher,publishedDate,categories
//         description,reviewsSummary,reviewText
//         css 는 카멜케이스로 (ex: content1Text, content1Box)
//     </div> */}
//  </>)
// }

import React from 'react';
import classes from './categoriesDetail.module.css';

export default function CategoriesUIDetail(props) {
  return (
    <div id="contentArea" className={classes.container}>
      <section>
        <article>
          <div className="articleWrap">
            <div className="bookDetail">
              <div className="wrap_left">
                <div className="solid_book">
                  <img src="https://bookthumb-phinf.pstatic.net/cover/206/661/20666112.jpg?type=m1&udate=20210628" alt="사장님, 아무거나 먹지 마세요" data-pagespeed-url-hash="3524470385" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                </div>
              </div>
              <div className="wrap_right">
                <div className="bookTitileWrap">
                  <div className="categories">
                    <small>#공포 #모험</small><br/>
                  </div>
                  <h2 className="bookTitle">
                  책제목
                  </h2>
                  <a><img src="/images/main/sub/search/bookdetail_more.jpg" alt="" data-pagespeed-url-hash="3827597512" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
                <div className="bookInfo">
                  <div className="class1">
                    <span>저자 : </span><br/>
                    <span>출판사 : </span><br/>
                    <span>출판년도 : </span><br/>
                  </div>
                  <div className="class1">
                    <span>리뷰 :<br/>"좋은책입니다" </span>
                  </div>
                  <div className="btns">
                    <a href="/main/bookSearch/move/124008/579852924/9791191347296" className="btn_move" onclick="return false;"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
