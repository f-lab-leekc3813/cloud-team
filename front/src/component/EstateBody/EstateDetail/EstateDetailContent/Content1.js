import classes from './Content1.module.css';

function Content1 (props) {
    return(
        <div className={classes.content1_containers}>
            <div className={classes.content1_wrap}>
                <img className={classes.content1_img} src={props.img} alt='사진' />
            </div>
        </div>
    )
};

export default Content1;