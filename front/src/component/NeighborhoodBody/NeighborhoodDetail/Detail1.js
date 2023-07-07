import classes from './Detail1.module.css';
import dummy from '../../../data/neighborhoodData/detail.json'

function Detail1 () {

    return(
    <div className={classes.containers}>
        <ul className={classes.container}>
            {dummy.data.map((data) => {
                return(
                <li key={data.id} className={classes.content_list}>
                    <a className={classes.content_item} >
                        <div className={classes.content_leftside}>
                            <div className ={classes.content_left}>
                                <img className={classes.content_image} src={`${data.image}`} alt='img' />
                            </div>
                        </div>
                        <div className={classes.content_right}>
                            <div className={classes.content_rightwrapper}>
                                <span className ={classes.content_name}>{data.name}</span>
                                <span className = {classes.content_region}>{data.region}</span>
                            </div>
                            <span className={classes.content_description}>
                                {data.description}
                            </span>
                            <span className={classes.content_infos}>
                                {data.infos}
                            </span>
                        </div>
                    </a>
                </li>
                )
            })}
        </ul>
    </div>
    )
};

export default Detail1;