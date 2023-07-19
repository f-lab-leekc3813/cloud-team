import {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import classes from './PartTimeDetail.module.css'
import Content1 from './PartTimeDetailContent/Content1'
import Content2 from './PartTimeDetailContent/Content2'
import Content3 from './PartTimeDetailContent/Content3'
import Content4 from './PartTimeDetailContent/Content4'
import Content5 from './PartTimeDetailContent/Content5'
import Content6 from './PartTimeDetailContent/Content6'

function PartTimeDetail () {
    const [data, setData] = useState([]);
    const location = useLocation();

    const index =location.pathname.replace('/parttime/', '');

    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/croll/part_data');
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
                <Content1 name = {itemData?.name} region = {itemData?.region} temp = {itemData?.temp} />
                <div className={classes.gray_line}></div>
                <Content2 title_type = {itemData?.title_type} mainTitle = {itemData?.mainTitle} m_name = {itemData?.m_name} />
                <Content3 d_day = {itemData?.d_day} />
                <Content4 pay ={itemData?.pay} address = {itemData?.address} day = {itemData?.day} time = {itemData?.time} />
                <Content5 info = {itemData?.info} />
                <Content6 address = {itemData?.address} />
            </main>
        </div>
    )
}

export default PartTimeDetail