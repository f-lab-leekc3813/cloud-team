import classes from './Content3.module.css'

function Content3 () {
    return (
        <div className={classes.content3}>
            <div className={classes.content3_cover}>
                <div className={classes.content3_wrap}>
                    <h2 className={classes.medium}>이웃과 함께하는<br/>동네생활 </h2>
                    <p className={classes.small}>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
                </div>
                <div className={classes.content3_wrap}>
                    <img className={classes.content3_img} src="images/image_3.webp" alt="동네생활"/>
                </div>
            </div>
        </div>
    )
}

export default Content3