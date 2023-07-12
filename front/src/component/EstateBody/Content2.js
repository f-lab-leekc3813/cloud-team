import dummy1 from '../../data/EstateData/Content1.json'
import dummy2 from '../../data/EstateData/Content2.json'

import classes from './Content2.module.css'

function Content2 () {
    return (
        <section className={classes.content2_containers}>
            <h2 className={classes.content2_title}>
                인기 부동산 직거래 게시글
            </h2>
            <div className={classes.content2_container}>
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
                                    <div className={classes.content2_boxname}>
                                        {data.name}
                                    </div>
                                    <div className={classes.content2_boxregion}>
                                        {data.region}
                                    </div>
                                    <div className={classes.content2_boxinfo1}>
                                        {data.info1}
                                    </div>
                                </div>
                           </article>
                        </div>
                    )
                })}
            </div>
            <div className={classes.content2_secondcontainer}>
                <div className={classes.content2_insidecontainer2}></div>
                    <span className={classes.content2_insidecontainer3} >
                        <img className={classes.content2_img2} src="/images/estate/secondhouse.png" alt='사진' />
                    </span>
                <div className={classes.content2_insidecontainer4}>
                    <h1 className={classes.content2_insidetext}>
                        복비 없이 투명한 부동산 직거래 당근마켓 내 근처 탭에서 바로 찾아보세요!
                    </h1>
                </div>
                <div className={classes.content2_insidecontainer1}></div>
                <div className={classes.content2_button}>
                    <button id="realty_app_download" type="button" class="karrot-button _1aul9fg0 korcsc3 korcsc4 _1aul9fg1 _1aul9fg7 _3lccmd4">
                        앱 다운로드 하기
                    </button>
                </div>
            </div>
            <div className={classes.content2_container}>
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
                                    <div className={classes.content2_boxname}>
                                        {data.name}
                                    </div>
                                    <div className={classes.content2_boxregion}>
                                        {data.region}
                                    </div>
                                    <div className={classes.content2_boxinfo1}>
                                        {data.info1}
                                    </div>
                                </div>
                           </article>
                        </div>
                    )
                })}
            </div>
            <footer className={classes.content2_footer1}>
                <div className={classes.content2_downcontainer1}>
                </div>

            </footer>
        </section>
    )
}
export default Content2;