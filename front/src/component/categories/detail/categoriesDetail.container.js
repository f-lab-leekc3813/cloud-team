import {useRecoilState} from "recoil";
import { useState, useEffect } from "react";
import axios from "axios";

import { LikeState} from '../../../store/LikeState';
import { NickState } from "../../../store/LoginState";
import { CategoriDetail } from "../../../store/Categories";
import CategoriesDetailUI from "./categoriesDetail.presenter"


export default function CategoriesDetail() { 
    
    const [like, setLike] = useRecoilState(LikeState);
    const [nick, setNick] = useRecoilState(NickState);
    const [score, setScore] = useState('');
    const [detail, setDetail] = useRecoilState(CategoriDetail);

    const onChangeScore = (e) => {
        // 숫자 형식이면 입력이 되고 아니면 안된다
        const inputScore = e.target.value;
        
        if (!isNaN(inputScore)) {
            setScore(inputScore);
        } else {
            setScore('');
        }
    };

    // 랜더링되면 데이터를 받아온다.
    useEffect (() => {
        const currentPath = window.location.pathname;
        const extractedValue = currentPath.split('/detail/')[1].split('/')[0];
        const formattedValue = extractedValue.replace(/%20/g, ' ');
        console.log(detail)
    },[])

    const onClickSubmit = (e) => {
        console.log(nick);

        if(!nick) {
            alert('로그인해라 멍청아!')
            return;
        }
    
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
        const exists = like.some((item) => item.title === detail.title);
        if (!exists) {
            const newData = { ...detail, score };
            setLike((prevLike) => [...prevLike, newData]);
        }
    
        console.log(like);
    
        // Make a POST request to send the review
        axios.post("http://localhost:8080/like/likeReview", {
            userId: nick,
            bookId: detail.title,
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



    return(<>
    <CategoriesDetailUI 
        detail = {detail}
        onClickSubmit = {onClickSubmit} 
        onChangeScore = {onChangeScore}
    />
    </>)
}