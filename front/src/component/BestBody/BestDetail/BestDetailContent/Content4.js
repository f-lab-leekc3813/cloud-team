import classes from './Content4.module.css';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import TodayIcon from '@mui/icons-material/Today';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Content4(props) {
    return (
        <section className={classes.content4_containers}>
            <h2 className={classes.content4_title}>
                {props.price}
            </h2>
            <h2 className={classes.content4_title}>
                정보
            </h2>
            <p className={classes.content5_content}>
                {props.info}
            </p>
        </section>
    )
}

export default Content4;