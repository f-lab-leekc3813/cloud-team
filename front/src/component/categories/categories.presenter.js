import classes from './categories.module.css';
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';

export default function CategoriesUI(props) {
    const [data, setData] = useState(null)
    const [loading, setLoding] = useState(true)

    const location = useLocation();

    const navigate = useNavigate();

    const onClickDetail = (e) => {
        navigate('./detail')
    }
        
    useEffect(() => {
        
        const currentPath = window.location.pathname;
        const extractedValue = currentPath.replace(/^\/categories\//, '').replace(/%20/g, ' ');
        console.log(extractedValue)
        
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/category/${extractedValue}`);
                console.log(response.data);
                setData(response.data)
                setLoding(false)
            } catch (error) {
                console.log('데이터를 받아오지 못했습니다', error)
                setLoding(true)
            }
        }
        fetchData();
    }, [window.location.pathname]);
    
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
                { loading ?
                    <div> 로딩중</div> 
                    :  
                    data ? 
                (data.map((data) => {
                    return(
                        <div onClick={onClickDetail} value = {data.Title} key={data.Title}  className={classes.listContainer}>
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