import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {RecoilState, useRecoilState} from "recoil";

import classes from './Content2.module.css';
import { RegionState } from '../../store/RegionState';

function Content2() {
    const [data, setData] = useState([]);

    const [region, setRegion] = useRecoilState(RegionState)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/region/best');
            setData(response.data);
            console.log(response.data)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className={classes.cards_wrap}>
            {data.map((data) => {
                return (

                    <article key={data.index} className={classes.card_top}>
                            <Link to={`/bestpage/${region}`} className={classes.card_link}>
                                <div className={classes.card_photo}>
                                    <img className={classes.card_img} src={data.image} alt='사진' />
                                </div>
                                <div className={classes.card_desc}>
                                    <h2 className={classes.card_title} >
                                        {data.item}
                                    </h2>
                                    <div className={classes.card_price}>
                                        {data.price}
                                    </div>
                                    <div className={classes.card_regionname}>
                                        {data.region}
                                    </div>
                                    <div className={classes.card_counts}>
                                        <span>관심 {data.like}</span>
                                        ∙
                                        <span>채팅 {data.chat}</span>
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