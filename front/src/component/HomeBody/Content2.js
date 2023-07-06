import classes from './Content2.module.css'

function Content2 () {
    return(
        <div className={classes.content2}>
            <div className= {classes.content2_cover}>
                <div className={classes.content2_wrap}>
                    <img className={classes.mountain_img} src='images/mountain.webp' alt='mountain'/>
                </div>
                <div className={classes.content2_wrap}>
                    <h2 className={classes.medium}>
                        우리 동네 <br/> 중고 직거래 마켓
                    </h2>
                    <p className={classes.small}>
                        동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
                    </p>
                    <button className={classes.gray_button}>인기매물 보기</button>
                    <button className={classes.gray_button}>믿을 수 있는 중고거래</button>
                </div>
            </div>
        </div>
    )
}

export default Content2