import classes from './Content1.module.css'

function Content1 () {
    return(
        <>
            <div className={classes.content1}>
                <div className = {classes.content1_cover}>
                    <div className={classes.content1_wrap}>
                        <h2 className={classes.big}>
                            당신 근처의
                            <br/>
                            애플 마켓
                        </h2>
                        <p className={classes.small}>
                            중고 거래부터 동네 정보까지, 이웃과 함께해요.
                            <br/>
                            가깝고 따뜻한 당신의 근처를 만들어요.
                        </p>
                    </div>
                    <div className={classes.content1_wrap}>
                        <img 
                            className={classes.image_1} 
                            src = "images/image_1.webp"
                            alt = "당근마켓"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content1