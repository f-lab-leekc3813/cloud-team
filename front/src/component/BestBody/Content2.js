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
        if (selectedItemId === "" || selectedItemId ==="지역을 선택하세요") {
            region = "best";
        } else {
            region = selectedItemId.slice(0, 2);
        }
        console.log(region)
        try {
            const response = await axios.get(`http://localhost:8080/region/${region}`);
            console.log(response)
            setData(response.data);
            console.log(response.data)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(data)

    return (
        <section className={classes.cards_wrap}>
            {data.map((item) => {

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
                                    <span>관심 {item.like}</span>
                                    ∙
                                    <span>채팅 {item.chat}</span>
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