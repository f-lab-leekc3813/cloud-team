import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Content2.module.css';

function Content2({ selectedItemId }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [selectedItemId]);

    let region;
    const fetchData = async () => {
        if (selectedItemId === "") {
            region = "best";
        } else if (selectedItemId.length === 4) {
            region = selectedItemId[0] + selectedItemId[2];
        } else {
            region = selectedItemId.slice(0, 2);
        }
        try {
            const response = await axios.get(`http://localhost:8080/region/${region}`);
            setData(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className={classes.cards_wrap}>
            {Array.isArray(data) && data.map((item) => {

                return (
                    <article key={item.index} className={classes.card_top}>
                        <Link to={`/bestpage/${region}`} className={classes.card_link}>
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
}
export default Content2;