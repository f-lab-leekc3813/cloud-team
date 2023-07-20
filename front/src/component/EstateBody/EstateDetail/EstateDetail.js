import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import classes from './EstateDetail.module.css';
import Content1 from './EstateDetailContent/Content1';
import Content2 from './EstateDetailContent/Content2';
import Content3 from './EstateDetailContent/Content3';
import Content4 from './EstateDetailContent/Content4';
import Content5 from './EstateDetailContent/Content5';
import Content6 from './EstateDetailContent/Content6';

function EstateDetail() {
    const [data, setData] = useState([]);
    const location = useLocation();

    const index = location.pathname.replace('/estate/', '');

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/croll/estate_data');
            const responseData = response.data;

            setData(responseData);
            console.log(response.data)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filteredData = data.filter(item => item.index === Number(index));
    const itemData = filteredData.length > 0 ? filteredData[0] : null;
    return (
        <div className={classes.containers}>
            <main className={classes.main}>
                <Content1 img = {itemData?.main_img}/>
                <Content2 
                    img = {itemData?.img} 
                    user_name = {itemData?.user_name}
                    region = {itemData?.region}
                    temp = {itemData?.temp} 
                    />
                <div className={classes.grayline}></div>
                <Content3 user_type = {itemData?.user_type} hometype = {itemData?.hometype}  d_day = {itemData?.d_day}/>
                <Content4
                    pyung = {itemData?.pyung}
                    bang = {itemData?.bang}
                    floor = {itemData?.floor}
                    loan = {itemData?.loan}
                    day = {itemData?.day}
                    animal = {itemData?.animal}
                    park = {itemData?.park}
                    eli = {itemData?.eli}
                 />
                <Content5 info = {itemData?.info} />
                <Content6 />
            </main>
        </div>
    )
}

export default EstateDetail;