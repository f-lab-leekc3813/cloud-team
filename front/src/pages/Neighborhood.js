
import classes from './Neighborhood.module.css';
import Content1 from '../component/NeighborhoodBody/Content1';
import Content2 from '../component/NeighborhoodBody/Content2';


function NeighborhoodPage() {
    return(
        <div className={classes.containers} >
            <div className={classes.container}>
                <Content1 />
                <Content2 />
            </div>
        </div>
        )
}

export default NeighborhoodPage;