import HomeUI from "./Home.presenter";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NickState } from "../../store/LoginState";
import {useRecoilState} from "recoil";


export default function Home() {
    const [data, setData] = useState(null);
    const [score, setScore] = useState(null);
    const [machinelearning, setMachineLearning] = useState(null);
    const [nick, setNick] = useRecoilState(NickState);
    const [click, setClick] = useState(false);

    const fetchManyBooksData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/best/many_books');
            setData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('Failed to retrieve many_books data', error);
        }
    };

    const fetchScoreBooksData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/best/score_books');
            setScore(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('Failed to retrieve score_books data', error);
        }
    };
    
     const onClickRecommed = async () => {
           setClick(true)
           await axios.get(`http://localhost:5000/machine`);
           const response = await axios.get(`http://localhost:5000/machine/${nick}`);
           setMachineLearning(response.data);
       };

    useEffect(() => {
        fetchManyBooksData();
        fetchScoreBooksData();
    }, []);

    useEffect(() => {
        setClick(false)
    }, [nick])
    return (
        <HomeUI
            data={data}
            score={score}
            machinelearning={machinelearning}
            nick = {nick}
            onClickRecommed = {onClickRecommed}
            click = {click}
        />
    );
}