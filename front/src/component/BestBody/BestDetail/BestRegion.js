import { useState, useEffect } from 'react';
import axios from 'axios';
import {RecoilState, useRecoilState} from "recoil";

import classes from './BestRegion.module.css';
import { RegionState } from '../../../store/RegionState';

function BestRegion() {
    const [data, setData] = useState([]);

    const [region, setRegion] = useRecoilState(RegionState)


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/region/${region}`);
            setData(response.data);
            console.log('세부')
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
                        
                            <a className={classes.card_link}>
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
                            </a>    
                    </article>

                )
            })}
        </section>
    )
}
export default BestRegion;