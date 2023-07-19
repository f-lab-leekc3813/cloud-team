import classes from './Content2.module.css';

function Content2 (props) {
    return (
        <section className={classes.content2_containers}>
            <div className={classes.content2_wrap1}>
                <div className={classes.content2_avartarWrap}>
                    <img className={classes.content2_avartar} src={props.img} alt='사진' />
                </div>
                <div className={classes.content2_nameWrap}>
                    <div className={classes.content2_name}>{props.user_name}</div>
                    <div className={classes.content2_region}>{props.region}</div>
                </div>
            </div>
            <div className={classes.content2_heatWraps}>
                <div className={classes.content2_heatWrap}>
                    <div className={classes.content2_heat}>
                        <div className={classes.content2_heat1}>
                            {props.temp}
                            <span>°C</span>
                        </div>
                    </div>
                </div>
                <div className={classes.content2_heatBottom}>
                        <span className={classes.content2_manner}>매너온도</span>
                    </div>
            </div>
        </section>
    )
}

export default Content2;