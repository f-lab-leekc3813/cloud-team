
import {useRecoilState} from "recoil";
import { LikeState} from '../../../store/LikeState';

import CategoriesDetailUI from "./categoriesDetail.presenter"
import { useState } from "react";

export default function CategoriesDetail() { 
    
    const [like, setLike] = useRecoilState(LikeState);
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
        // 중복 제거
        if(!score){
            alert('리뷰 점수를 입력하세요.')
            return
        }

        e.preventDefault();
        const exists = like.some((item) => item.title === data.title);
        if (!exists) {
        const newData = {...data, score};
        setLike((prevLike) => [...prevLike, newData]);
        }
        console.log(like)
    }

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