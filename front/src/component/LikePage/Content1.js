import classes from './Content1.module.css';

function Content1 () {
    <section className={classes.Content1_section}>
        <div className={classes.Content1_textbox1}>
            <div className={classes.Content1_textbox2}>
                <h1 className={classes.Content1_texth1}>
                    내가 관심있는
                    <br/>
                    찜 목록
                </h1>
                <p className={classes.Content1_testp}>
                    관심있는 제품들과 부동산들의
                    <br/>
                    목록을 한 번에 확인해보세요.
                </p>
            </div>
            <div className={classes.Content1_container}>
                <span className={classes.Content1_span}>
                    <img className={classes.content1_img}src='/images/Like/cart.png' alt='카트' />
                </span>
            </div>
        </div>
    </section>
}

export default Content1

