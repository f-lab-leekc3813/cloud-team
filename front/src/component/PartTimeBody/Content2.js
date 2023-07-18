import dummy1 from '../../data/partTimeData/content1.json'
import dummy2 from '../../data/partTimeData/content2.json'
import classes from './Content2.module.css'

function Content2 () {
    return (
        <section className={classes.content2_containers}>
            <h2 className={classes.content2_title}>
                인기 구름알바
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
                            <img className={classes.content2_middleimg} src='/images/parttime/image9.png' alt='이력서' />
                        </span>
                    </div>
                    <div className={classes.content2_middlebannertxt}>
                         구름알바 이용방법이 궁금하다면
                         <br/>지금 바로 알아보세요!
                    </div>
                    <button className={classes.content2_middlebutton}>이용방법 알아보기</button>
                </div>
            </div>
            <div className={classes.content2_containers2}>
                {dummy2.data.map((data) => {
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
            <div className={classes.content2_appbanner}>
                <div className={classes.content2_appbanner1}>
                    <div className={classes.content2_appbanner2}>
                        <span classNAme={classes.content2_appspan}>
                            <img className={classes.content2_appimg} src='/images/parttime/image10.png' alt='마커' />
                        </span>
                    </div>
                    <div className={classes.content2_apptxt}>
                        우리동네 알바가 궁금하다면
                        <br/>구름마켓에서 바로 찾아보세요!
                    </div>
                    <button className={classes.content2_appbutton}>앱 다운로드 하기</button>
                </div>
            </div>
        </section>
    )
}
export default Content2;