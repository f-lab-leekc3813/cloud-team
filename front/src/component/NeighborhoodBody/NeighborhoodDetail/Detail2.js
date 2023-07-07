import classes from './Detail2.module.css';
import dummy from '../../../data/neighborhoodData/detail2.json';

function Detail2 () {
    return(
        <ul className={classes.containers}>
            {dummy.data.map((data) =>{
              return(
                <a key={data.id} className={classes.review_item}>
                    <article className={classes.review_article}>
                        <article className = {classes.reviewItem_article}>
                            <div className ={classes.profile_wrapper}>
                                <img className={classes.profile_image} src = {`${data.avartar}`} alt='img'/>
                            </div>
                        </article>
                    </article>
                </a>
              )  
            })}
        </ul>
    )
}

export default Detail2;