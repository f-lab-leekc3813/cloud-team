import classes from './Content3.module.css';

function Content3 (props) {
    return(
        <section className = {classes.content3_containers}>
            <h1 className = {classes.content3_title}>
                <span className={classes.user}>{props.user_type}</span>
                 <span className={classes.hometype}>{props.hometype}</span>
            </h1>
            <pre className = {classes.content3_titlebottom}>
                {props.d_day} 전 작성
            </pre>
        </section>
    )
}

export default Content3;