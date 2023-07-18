import classes from './Content2.module.css'

function Content4 () {
    return(
        <div className={classes.content2}>
            <div className= {classes.content2_cover}>
                <div className={classes.content2_wrap}>
                    <img className={classes.mountain_img} src='images/image_2.webp' alt='neiborhood'/>
                </div>
                <div className={classes.content2_wrap}>
                    <h2 className={classes.medium}>
                        내 근처에서 찾는 <br/> 동네가게
                    </h2>
                    <p className={classes.small}>
                        우리 동네 가게를 찾고 있나요? <br/>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
                    </p>
                    <button className={classes.gray_button}>구름마켓 동네가게 찾기</button>
                </div>
            </div>
        </div>
    )
}

export default Content4