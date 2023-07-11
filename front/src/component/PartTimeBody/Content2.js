import dummy1 from '../../data/partTimeData/content1.json'

import classes from './Content2.module.css'

function Content2 () {
    return (
        <section className={classes.content2_containers}>
            <h2 className={classes.content2_title}>
                인기 당근알바
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
                                    <div className={classes.content2_boxtitle}>
                                        
                                    </div>
                                </div>
                           </article>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}
export default Content2;