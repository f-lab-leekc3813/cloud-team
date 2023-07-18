import classes from './Content3.module.css'

function Content3 (props) {
    return (
        <time className={classes.time} dateTime='2023-07-07T07:49:19.004Z'>
            {props.d_day}
            전
        </time>
    )
}

export default Content3;