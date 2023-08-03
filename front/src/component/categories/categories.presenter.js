import classes from './categories.module.css';
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const dummyData =[ {
    title : 'Behind the Moon',
    authors : '',
    categories : '[Adventure stories]',
    image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    review : 'so good!!!!!!!',
    profileName : 'K. Viker'
}, {
    title : 'Behind the Moon',
    authors : '',
    categories : '[Adventure stories]',
    image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    review : 'so good!!!!!!!',
    profileName : 'K. Viker'
}, {
    title : 'Behind the Moon',
    authors : '',
    categories : '[Adventure stories]',
    image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    review : 'so good!!!!!!!',
    profileName : 'K. Viker'
}, {
    title : 'Behind the Moon',
    authors : '',
    categories : '[Adventure stories]',
    image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    review : 'so good!!!!!!!',
    profileName : 'K. Viker'
}, {
    title : 'Behind the Moon',
    authors : '',
    categories : '[Adventure stories]',
    image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    review : 'so good!!!!!!!',
    profileName : 'K. Viker'
}, {
    title : 'Behind the Moon',
    authors : '',
    categories : '[Adventure stories]',
    image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    review : 'so good!!!!!!!',
    profileName : 'K. Viker'
}]

export default function CategoriesUI(props) {
    const [fetchedData, setFetchedData] = useState(dummyData);
    
    // useEffect(() => {
    //     fetchData();
    //   }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(data);

    //         setFetchedData(response.data);

    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         }
    //     };



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
                {fetchedData.map((data) => {
                    return(
                        <div className={classes.listContainer}>
                            <div className={classes.listUl}>
                                <div className={classes.listLi}>
                                    <a className={classes.listA}>
                                        <div className={classes.listDiv}>
                                            <img className={classes.listImg} src={data.image} alt="책이미지"/>
                                        </div>
                                        <div className={classes.listInfo}>
                                            <div className={classes.listTitle}>
                                            {data.title}
                                            </div>
                                            <div className={classes.listAupu}>
                                                <span className={classes.listAuthor} >
                                                {data.authors}
                                                </span>
                                                ・
                                                <span className={classes.listPublisher}>
                                                출판사
                                                </span>
                                            <div className={classes.listCategori}>
                                            {data.categories}
                                            </div>
                                            <div className={classes.listPay}>
                                            8000원
                                            </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className={classes.listJjim}>
                                        <button type="button" className={classes.Jjim} >
                                            <img className={classes.btnimg} src="images/categori/jjim.png" alt="찜"/>
                                            찜
                                        </button>  
                                    </div>
                                </div>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    </>
    )
}