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
            console.log(searchText)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <section className={classes.cards_wrap}>
            {Array.isArray(data) && data.map((item) => {

                return (
                    <article key={item.index} className={classes.card_top}>
                        <Link to={`/search/${searchText}`} className={classes.card_link}>
                            <div className={classes.card_photo}>
                                <img className={classes.card_img} src={item.image} alt='사진' />
                            </div>
                            <div className={classes.card_desc}>
                                <h2 className={classes.card_title} >
                                    {item.item}
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
                )
            })}
        </section>
    )
};

export default Search;
