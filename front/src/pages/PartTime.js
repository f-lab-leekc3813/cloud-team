import Content1 from "../component/PartTimeBody/Content1";
import classes from "./PartTime.module.css";
import Content2 from "../component/PartTimeBody/Content2";

function PartTimePage() {
    return(
        <div className={classes.containers}>
            <div className={classes.container}>
                <Content1 />
                <Content2 />
            </div>
        </div>
        )
}

export default PartTimePage;