import classes from './Content1.module.css';

function Content1 () {
    return(
        <div className={classes.content1_containers}>
            <div className={classes.content1_wrap}>
                <img className={classes.content1_img} src="/images/bang.jpeg" alt='사진' />
            </div>
        </div>
    )
};

export default Content1;