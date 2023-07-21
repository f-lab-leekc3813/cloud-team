import classes from './Content3.module.css';

function Content3(props) {
    return (
        <section className={classes.content3_containers}>
            <h1 className={classes.content3_title}>
                <span className={classes.user}>{props.user_type}</span>
                <span className={classes.hometype}>{props.hometype}</span>
            </h1>
            <h1 className={classes.content3_title}>
                {props.state === '판매중' ?
                    <span className={classes.content3_title1}>{props.state}</span> :
                    <span className={classes.content3_title2}>{props.state}</span>}
                {props.estype}
            </h1>
            <pre className={classes.content3_titlebottom}>
                {props.d_day} 전 작성
            </pre>
        </section>
    )
}

export default Content3;