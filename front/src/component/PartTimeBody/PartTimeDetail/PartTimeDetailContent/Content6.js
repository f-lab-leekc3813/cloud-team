import MapComponent from '../../../Map/MapComponent';
import classes from './Content6.module.css';
import location from './location.json';



function Content6 (props) {
    return (
        <section className={classes.content6_section}>
            <h1 className={classes.content6_title}>주소</h1>
            <MapComponent />
            <address className={classes.content6_address}>
                {props.address}
            </address>
        </section>
    )
}

export default Content6;