import * as React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import classes from './Content4.module.css'

function Content4 () {
    return (
        <section className={classes.content4_section}>
            <h2 className={classes.content4_information}>정보</h2>
            <div className={classes.content4_box}>
                <div className={classes.content4_boxin}>
                    <AttachMoneyIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent1}>월급 80만원</div>
                </div>
                <div className ={classes.content4_boxin}>
                    <FmdGoodIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent2}>인천 서구 이음2로 29</div>
                </div>
                <div className ={classes.content4_boxin}>
                    <TodayIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent2}>월 화 수 목 금 토 일</div>
                </div>
                <div className ={classes.content4_boxin}>
                    <AccessTimeIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent2}>11:30~02:30</div>
                </div>
            </div>
        </section>
    )
}

export default Content4;