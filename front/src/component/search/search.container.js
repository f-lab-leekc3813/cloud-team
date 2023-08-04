import SearchUI from "./search.presenter";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from "recoil";

import { SearchDetail, SearchText } from "../../store/Search";



export default function Search() {
    // 자바스크립트 공간

    const [data, setData] = useState([])
    const [loading, setLoding] = useState(true)

    const location = useLocation();

    const [detail, setDetail] = useRecoilState(SearchDetail);

    const [searchTextValue, setsearchTextValue] = useRecoilState(SearchText);

    const navigate = useNavigate();

    const onClickDetail = (event) => {
        const title = event.currentTarget.getAttribute("title")
        const image = event.currentTarget.getAttribute("image")
        const categories = event.currentTarget.getAttribute("categories")
        console.log('여기를 클릭')

        const detailData = {
            title: title,
            image: image,
            categories: categories
        }

        setDetail(detailData)
        console.log(detail)
        navigate(`./detail/${title}`)
    }

    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:5000/search/${searchTextValue}`);
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setData(response.data)
            setLoding(false)
        } catch (error) {
            console.log('데이터를 받아오지 못했습니다', error)
            setLoding(true)
        }
    }

    useEffect(() => {

        if (location.state && location.state.SearchText) {
            setsearchTextValue(location.state.SearchText);
            fetchData();
        } else {
            setsearchTextValue('');
        }

    }, [location.state]);



    return (
        <SearchUI
            data={data}
            loading={loading}
            onClickDetail={onClickDetail}
        />
    )
}