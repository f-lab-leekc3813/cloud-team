import React from 'react';

import classes from "./Content1.module.css";
import dummy from "../../data/BestData/Content1.json";

function Content1({ selectedItemId, handleSelectChange }) {
    return (
        <section className={classes.containers}>
            <h1 className={classes.title}>{selectedItemId} 중고거래 인기매물</h1>
            <nav className={classes.nav}>
                <select className={classes.select} onChange={handleSelectChange}>
                    <option className={classes.option}>지역을 선택하세요</option>
                    {dummy.data.map((item) => {
                        return (
                            <option key={item.id} className={classes.option}>{item.place}</option>
                        )
                    })}
                </select>
            </nav>
        </section>
    )

};

export default Content1;