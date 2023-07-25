import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Search.module.css';



function Search() {
    const [data, setData] = useState([]);

    const location = useLocation();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (location.state && location.state.searchText) {
            setSearchText(location.state.searchText);
            fetchData();
        }
    }, [location.state])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/search/${searchText}`);
            setData(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <section className={classes.cards_wrap}>
            {Array.isArray(data) && data.length > 0 ? (
                data.map((item) => (
                    <article key={item.index} className={classes.card_top}>
                        <Link to={`/search/${searchText}`} className={classes.card_link}>
                            <div className={classes.card_photo}>
                                <img className={classes.card_img} src={item.img} alt='사진' />
                            </div>
                            <div className={classes.card_desc}>
                                <h2 className={classes.card_title} >
                                    {item.title}
                                </h2>
                                <div className={classes.card_price}>
                                    {item.price}
                                </div>
                                <div className={classes.card_regionname}>
                                    {item.region}
                                </div>
                                <div className={classes.card_counts}>
                                    <span>관심 {item.like} </span>
                                    ∙
                                    <span> 채팅 {item.chat}</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))
            ) : (
                <>
                    <img className={classes.error_img} src='https://us.123rf.com/450wm/alxyzt/alxyzt1707/alxyzt170700055/82229280-kawaii-%EB%A7%8C%ED%99%94-%ED%9D%B0%EC%83%89-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98-%EA%B7%80%EC%97%AC%EC%9A%B4-%EA%B5%AC%EB%A6%84-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4%EC%85%98.jpg' alt='구름' />
                    <span className={classes.error_message}>잘못된 검색어 입니다.</span>
                </>
            )}
        </section>
    );
}

export default Search;
