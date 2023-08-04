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
                        <div onClick={props.onClickDetail} categories = {data.categories} title = {data.Title} image = {data.image} key={data.Title}  className={classes.listContainer}>
                            <div className={classes.listUl}>
                                <div className={classes.listLi}>
                                    <div className={classes.listA}>
                                        <div className={classes.listDiv}>
                                            <img className={classes.listImg} src={data.image} alt="책이미지"/>
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