import classes from './Content1.module.css';

function Content1 () {
    return (
        <section className={classes.content1_container}>
            <div className={classes.content1_main} >
                <h1 className= {classes.content1_title}>
                    동네 이웃들이
                    <br />
                    자주 가는 동네 가게
                </h1>
                <span className={classes.content1_subtitle}>
                    우리 동네 사람들이
                    <br />
                    이용하는 가게를 찾아보세요
                </span>
                <div className = {classes.content1_icon}>
                    <span className={classes.content1_icon1}>
                        <img className={classes.content1_banner} src='images/neighborhood/image1.png' alt='배너이미지' />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Content1;