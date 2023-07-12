import classes from './Estate.module.css';
import Content1 from '../component/EstateBody/Content1';
import Content2 from '../component/EstateBody/Content2';



function EstatePage() {
    return(
        <div className={classes.containers}>
            <div className={classes.container}>
                <Content1/>
                <Content2/>
            </div>     
        </div>
        )
}

export default EstatePage;