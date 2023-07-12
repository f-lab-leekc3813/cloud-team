import classes from './Content1.module.css'

function Content1 () {
    return (
        <section className={classes.content1_containers}>
            <div className={classes.content1_container1}>
                <div className={classes.content1_titleContainer}>
                    <h1 className={classes.content1_title1}>
                        우리 동네에서 찾는
                        <br/>당근알바
                    </h1>
                    <p className={classes.Content1_title2}>
                        걸어서 10분 거리의
                        <br/>동네 알바들 여기 다 있어요.
                    </p>
                </div>
                <div className={classes.content1_titleContainer2}>
                    <span className={classes.content1_titleimageSpan}>
                        <img className={classes.content1_titleimage} src='images/parttime/image.png' alt='aa'/>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Content1;
