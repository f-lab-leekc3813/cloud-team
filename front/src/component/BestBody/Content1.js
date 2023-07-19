import {useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import { useNavigate } from 'react-router-dom';

import classes from "./Content1.module.css";
import dummy from "../../data/BestData/Content1.json";
import {RegionState} from "../../store/RegionState";

function Content1 () {

    const [region, setRegion] = useRecoilState(RegionState);

    const [tmp, setTmp] = useState("");

    const navigate = useNavigate();

    function regionHandler (event) {
        const selectRegion = event.target.value
        const resultRegion = selectRegion.slice(0,2)
        setTmp(resultRegion)
        
    }
    useEffect(() => {
        setRegion(tmp)
        navigate('./bestpage/:region')
    },[regionHandler])


    return(
        <section className={classes.containers}>
            <h1 className={classes.title}>중고거래 인기매물</h1>
            <nav className={classes.nav}>
                <select className={classes.select} onChange={regionHandler}>
                    <option className={classes.option}>지역을 선택하세요</option>
                    {dummy.data.map((item) => {
                        return(
                            <option  key={item.id} className={classes.option}>{item.place}</option>
                        )
                    })}
                </select>
            </nav>
        </section>
    )
};

export default Content1;