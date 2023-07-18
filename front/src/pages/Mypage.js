import classes from './Mypage.module.css';
import Content1 from '../component/MyPage/Content1.js';



function Mypage() {
    return (
        <div className={classes.containers}>
        <div className={classes.container}>
            <Content1/>
        </div>     
    </div>
    )
};

export default Mypage;


