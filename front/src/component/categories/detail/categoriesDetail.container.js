
import {useRecoilState} from "recoil";
import { useState } from "react";
import axios from "axios";

import { LikeState} from '../../../store/LikeState';
import { NickState } from "../../../store/LoginState";
import CategoriesDetailUI from "./categoriesDetail.presenter"


export default function CategoriesDetail() { 
    
    const [like, setLike] = useRecoilState(LikeState);
    const [nick, setNick] = useRecoilState(NickState);
    const [score, setScore] = useState('');

    const onChangeScore = (e) => {
        // 숫자 형식이면 입력이 되고 아니면 안된다
        const inputScore = e.target.value;
        console.log('ww')
        
        if (!isNaN(inputScore)) {
            setScore(inputScore);
        } else {
            setScore('');
        }
        console.log(score);
    };

    const onClickSubmit = (e) => {
        console.log(nick);
    
        // Check if score is provided
        if (!score) {
            alert('Please enter a review score.');
            return;
        }
        
        if (Number(score)>5 | Number(score) <0) {
            alert("1점부터 5점까지의 점수를 입력해 주세요")
            return;
        }
        e.preventDefault();
    
        // Check if the review with the same title already exists in the 'like' array
        const exists = like.some((item) => item.title === data.title);
        if (!exists) {
            const newData = { ...data, score };
            setLike((prevLike) => [...prevLike, newData]);
        }
    
        console.log(like);
    
        // Make a POST request to send the review
        axios.post("http://localhost:8080/like/likeReview", {
            userId: nick,
            bookId: data.title,
            rating: score
        })
        .then((res) => {
            switch (res.status) {
                case 200:
                    alert("Review has been sent successfully");
                    break;
                case 500:
                    alert("Failed to send review");
                    break;
                default:
                    alert("Unexpected response from the server");
            }
        })
        .catch((error) => {
            console.error("Error sending review:", error);
            alert("An error occurred while sending the review");
        });
    };

    // 임시 data 카테고리 페이지에서 클릭하면 세부에서 데이터 받아와서 recoil 전송

    const data = {
        title : 'Behind the Moon',
        authors : '',
        categories : '[Adventure stories]',
        image : 'http://books.google.com/books/content?id=_AEhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        review : 'so good!!!!!!!',
        profileName : 'K. Viker'
    }



    return(<>
    <CategoriesDetailUI 
        data={data}
        onClickSubmit = {onClickSubmit} 
        onChangeScore = {onChangeScore}
    />
    </>)
}