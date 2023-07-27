import classes from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';

export default function HomeUI() {
    return(
        <div className={classes.container1}>
            <div className={classes.container2}>
            <Link to='/categories'>
                카테고리(예림)
            </Link>
            <Link to='categories/1'>
                카테고리상세(지송)
            </Link>
            </div>
        </div>
    )
}

