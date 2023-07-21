import classes from './Content4.module.css';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import TodayIcon from '@mui/icons-material/Today';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Content4(props) {
    return (
        <section className={classes.content4_containers}>
            <h2 className={classes.content4_title}>
                정보
            </h2>
            <div className={classes.content4_wrap}>
                {props.pyung && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>면적</span>
                        <div className={classes.content4_boxcontent1}>{props.pyung}</div>
                    </div>)}
                {props.bang && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>방/욕실 수</span>
                        <div className={classes.content4_boxcontent1}>{props.bang}</div>
                    </div>)}
                {props.floor && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>층</span>
                        <div className={classes.content4_boxcontent1}>{props.floor}</div>
                    </div>)}
                {props.loan && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>대출가능여부</span>
                        <div className={classes.content4_boxcontent1}>{props.loan}</div>
                    </div>)}
                {props.day && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>입주 가능일</span>
                        <div className={classes.content4_boxcontent1}>{props.day}</div>
                    </div>)}
                {props.animal && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>반려동물</span>
                        <div className={classes.content4_boxcontent1}>{props.animal}</div>
                    </div>)}
                {props.park && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>주차</span>
                        <div className={classes.content4_boxcontent1}>{props.park}</div>
                    </div>)}
                {props.eli && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>엘리베이터</span>
                        <div className={classes.content4_boxcontent1}>{props.eli}</div>
                    </div>)}
                {props.inside && (
                    <div className={classes.content4_box}>
                        <span className={classes.box_title}>내부 시설</span>
                        <div className={classes.content4_boxcontent1}>{props.inside}</div>
                    </div>)}
            </div>
        </section>
    )
}

export default Content4;