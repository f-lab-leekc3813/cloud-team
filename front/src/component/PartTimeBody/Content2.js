import dummy1 from '../../data/partTimeData/content1.json'

import classes from './Content2.module.css'

function Content2 () {
    return (
        <section className={classes.content2_containers}>
            <h2 className={classes.content2_title}>
                인기 당근알바
            </h2>
            <div className={classes.content2_containers1}>
                {dummy1.data.map((data) => {
                    return(
                        <div key={data.id} className={classes.content2_box}>
                           <article className={classes.content2_box1}>
                                <div className={classes.content2_boximage}>
                                    <span className={classes.content2_boxspan} >
                                        <img className={classes.content2_img1}src={data.image} alt='사진' />
                                    </span>
                                </div>
                                <div className={classes.content2_boxcontent}>
                                    <div className={classes.content2_boxtitle}>
                                        {data.title}
                                    </div>
                                    <div className={classes.content2_boxregion}>
                                        {data.region}
                                    </div>
                                    <div className={classes.content2_boxpay}>
                                        {data.pay}
                                    </div>
                                </div>
                           </article>
                        </div>
                    )
                })}
            </div>
            <div className={classes.content2_middlebanner}>
                <div className={classes.content2_middlebanner1}>
                    <div className={classes.content2_middlebanner2}>
                        <span className={classes.content2_middlebannerspan}>
                            <img className={classes.content2_middleimg} src='images/parttime/image9.png' alt='이력서' />
                        </span>
                    </div>
                    <div className={classes.content2_middlebannertxt}>
                         당근알바 이용방법이 궁금하다면
                         <br/>지금 바로 알아보세요!
                    </div>
                </div>
            </div>  
        </section>
    )
}
export default Content2;