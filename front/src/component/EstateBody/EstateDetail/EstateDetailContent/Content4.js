import classes from './Content4.module.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Content4 () {
    return(
        <section className = {classes.content4_containers}>
            <h2 className = {classes.content4_title}>
                정보
            </h2>
            <div className ={classes.content4_wrap}>
                <div className = {classes.content4_box}>
                    <AttachMoneyIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent1}>일급 5만원</div>
                </div>
                <div className = {classes.content4_box}>
                    <FmdGoodIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent2}>대구 수성구 희망로36길 107</div>
                </div>
                <div className = {classes.content4_box}>
                    <TodayIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent2}>목</div>
                </div>
                <div className = {classes.content4_box}>
                    <AccessTimeIcon className={classes.content4_icon} />
                    <div className={classes.content4_boxcontent2}>14:00~16:30</div>
                </div>
            </div>
        </section>
    )
}

export default Content4;