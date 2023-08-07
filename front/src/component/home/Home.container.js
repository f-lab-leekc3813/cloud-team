import HomeUI from "./Home.presenter"
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function Home() {
    // 여기는 자바스크립트 영역입니다.

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/best/many_books');
            
                setData(response.data)
                console.log(response.data)

            } catch (error){
                console.log('데이터를 받아오지 못했습니다', error)
            }
            
        }
        fetchData();
    },[]) 
    return (
        <HomeUI
            data={data}
         />
         )
}