import classes from './categories.module.css';
import { Carousel } from 'react-bootstrap';
import React from 'react';

export default function CategoriesUI(props) {
    
    return(
    <>
        <div className={classes.containers}>
            <div className={classes.container}>
                <Carousel>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/categori/slide01.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>운영진이 추천하는 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/categori/slide02.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>뚜룹뚜룹</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/categori/slide03.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 찜이 많은 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={classes.listContainers}>
                { props.loading ?
                    <div> 로딩중</div> 
                    :  
                    props.data ? 
                (props.data.map((data) => {
                    return(
                        <div onClick={props.onClickDetail} value = {data.Title} key={data.Title}  className={classes.listContainer}>
                            <div className={classes.listUl}>
                                <div className={classes.listLi}>
                                    <div className={classes.listA}>
                                        <div className={classes.listDiv}>
                                            <img className={classes.listImg} src={data.image || "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"}/>
                                        </div>
                                        <div className={classes.listInfo}>
                                            <div className={classes.listTitle}>
                                            {data.Title}
                                            </div>
                                            <div className={classes.listAupu}>
                                                <span className={classes.listAuthor} >
                                           
                                                </span>
                                                ・
                                                <span className={classes.listPublisher}>
                                                출판사
                                                </span>
                                            <div className={classes.listCategori}>
                                            {data.categories}
                                            </div>
                                            <div className={classes.listPay}>
                                    
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.listJjim}>
                                        <button type="button" className={classes.Jjim} >
                                        </button>  
                                    </div>
                                </div>
                            </div>
                        </div>
                )})) : (
                    <div>데이터가 없습니다</div>
                )
                    }
            </div>
        </div>
    </>
    )
}