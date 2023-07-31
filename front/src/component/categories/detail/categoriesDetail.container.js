import {useRecoilState} from "recoil";
import { LikeState} from '../../../store/LikeState';

import CategoriesDetailUI from "./categoriesDetail.presenter"

export default function CategoriesDetail() { 
    const [like, setLike] = useRecoilState(LikeState);

    const onClickSubmit = (e) => {
        // 중복 제거
        e.preventDefault();
        const exists = like.some((item) => item.title === data.title);
        if (!exists) {
        setLike((prevLike) => [...prevLike, data]);
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
    />
    </>)
}