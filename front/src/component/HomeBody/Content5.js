import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import classes from './Content5.module.css';



function Content5() {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/region/best');
            const responseData = response.data;

            const slicedData1 = responseData.slice(0, 4);
            const slicedData2 = responseData.slice(4, 8);

            setData1(slicedData1);
            setData2(slicedData2);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className={classes.content5_container}>
            <h1 className={classes.content5_title}>중고거래 인기매물</h1>
            <div className={classes.content5_wraper}>
                <div className={classes.content5_wrap}>
                    <div className={classes.content5_itemRow}>
                        {data1.map((item) => {
                            return (
                                <div key={item.index} className={classes.item}>
                                    <img className={classes.item_img} src={`${item.image}`} alt='content5' />
                                    <h2 className={classes.item_name}>{item.item}</h2>
                                    <h2 className={classes.item_cost}>{item.price}</h2>
                                    <h1 className={classes.item_place}>{item.region}</h1>
                                    <div className={classes.item_chating}>
                                        <span className={classes.item_like}>
                                            <span>관심 {item.like} </span>
                                            ∙
                                            <span> 채팅 {item.chat}</span>
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={classes.content5_itemRow}>
                        {data2.map((item) => {
                            return (
                                <div key={item.index} className={classes.item}>
                                    <img className={classes.item_img} src={`${item.image}`} alt='content5' />
                                    <h2 className={classes.item_name}>{item.item}</h2>
                                    <h2 className={classes.item_cost}>{item.price}</h2>
                                    <h1 className={classes.item_place}>{item.region}</h1>
                                    <div className={classes.item_chating}>
                                        <span className={classes.item_like}>
                                            <span>관심 {item.like} </span>
                                            ∙
                                            <span> 채팅 {item.chat}</span>
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={classes.moreItem_wrap}>
                        <Link to={'/bestpage'} className={classes.moreItem_btn}>
                            인기매물 더보기
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content5;