import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import classes from './BestDetail.module.css'
import Content1 from './BestDetailContent/Content1'
import Content2 from './BestDetailContent/Content2'
import Content3 from './BestDetailContent/Content3'
import Content4 from './BestDetailContent/Content4'

function BestDetail() {
    const [data, setData] = useState([]);
    const location = useLocation();

    const index = location.pathname.replace('/bestpage/','');

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/region/best/${index}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filteredData = data.filter(item => item.index === Number(index));
    const itemData = filteredData.length > 0 ? filteredData[0] : null;

    return (
        <div className={classes.containers}>
            <main className={classes.main}>
                <Content1 img={itemData?.img} />
                <Content2
                    img={itemData?.user_img}
                    user_name={itemData?.user_name}
                    region={itemData?.user_region}
                    temp={itemData?.temp}
                />
                <div className={classes.grayline}></div>
                <Content3
                    title={itemData?.title}
                    d_day={itemData?.d_day}
                />
                <Content4
                    price={itemData?.price}
                    info={itemData?.info}
                />
            </main>
        </div>
    )
}

export default BestDetail