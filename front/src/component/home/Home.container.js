import HomeUI from "./Home.presenter";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState(null);
    const [score, setScore] = useState(null);

    const fetchManyBooksData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/best/many_books');
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Failed to retrieve many_books data', error);
        }
    };

    const fetchScoreBooksData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/best/score_books');
            setScore(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Failed to retrieve score_books data', error);
        }
    };

    useEffect(() => {
        fetchManyBooksData();
        fetchScoreBooksData();
    }, []);

    return (
        <HomeUI
            data={data}
            score={score}
        />
    );
}