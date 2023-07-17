import classes from './EstateDetail.module.css';
import Content1 from './EstateDetailContent/Content1';
import Content2 from './EstateDetailContent/Content2';
import Content3 from './EstateDetailContent/Content3';
import Content4 from './EstateDetailContent/Content4';
import Content5 from './EstateDetailContent/Content5';
import Content6 from './EstateDetailContent/Content6';

function EstateDetail () {
    return(
        <div className={classes.containers}>
            <main className={classes.main}>
                <Content1 />
                <Content2 />
                <div className={classes.grayline}></div>
                <Content3 />
                <Content4 />
                <Content5 />
                <Content6 />
            </main>
        </div>
    )
}

export default EstateDetail;