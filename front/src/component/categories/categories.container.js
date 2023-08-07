import CategoriesUI from "./categories.presenter";
import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';
import {useRecoilState} from "recoil";

import { CategoriDetail } from "../../store/Categories";


export default function Categories() {
    // 자바스크립트 공간

    const [data, setData] = useState(null)
    const [loading, setLoding] = useState(true)

    const location = useLocation();

    const [detail, setDetail] = useRecoilState(CategoriDetail);

    const navigate = useNavigate();

    const onClickDetail = (event) => {
        const title = event.currentTarget.getAttribute("title")
        const image = event.currentTarget.getAttribute("image")
        const profileName = event.currentTarget.getAttribute("profileName")
        const publisheDate = event.currentTarget.getAttribute("publisheDate")
        const reviewScore = event.currentTarget.getAttribute("reviewScore")
        const reviewSummary = event.currentTarget.getAttribute("reviewSummary")
        const reviewText = event.currentTarget.getAttribute("reviewText")
        const categories = event.currentTarget.getAttribute("categories")

        console.log('여기를 클릭')

        const detailData = {
            title,
            image,
            categories,
            profileName,
            publisheDate,
            reviewScore,
            reviewSummary,
            reviewText

        }

        setDetail(detailData)
        console.log(detail)
        navigate(`./detail/${title}`)
    }
        
    useEffect(() => {
        
        const currentPath = window.location.pathname;
        const extractedValue = currentPath.replace(/^\/categories\//, '').replace(/%20/g, ' ');
        console.log(extractedValue)
        
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/category/${extractedValue}`);
                window.scrollTo({ top: 0, behavior: 'smooth' })
                console.log(response.data);
                setData(response.data)
                setLoding(false)
            } catch (error) {
                console.log('데이터를 받아오지 못했습니다', error)
                setLoding(true)
            }
        }
        fetchData();
    }, [window.location.pathname]);

    return (
        <CategoriesUI
            data = {data}
            loading = {loading}
            onClickDetail = {onClickDetail}
         />
    )
 }