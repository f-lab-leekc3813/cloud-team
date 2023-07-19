import {Link , useNavigate} from 'react-router-dom';
import { useRecoilState } from 'recoil';

import classes from './Header.module.css';
import LoginButton from './LoginButton';
import Button from 'react-bootstrap/Button';
import { LoginState } from '../store/LoginState';

function Header () {

    const [isLoggedIn,setIsLoggedIn] = useRecoilState(LoginState);
    const navigate = useNavigate();

    const loginHandler = () => {
        setIsLoggedIn(false);
        navigate('./mypage');
    }

    return (
        <div className = {classes.header}>
            <div className = {classes.header_wrap}>
                <div className = {classes.header_content}>
                    <img className={classes.header_image} src='/images/cloudlogo.jpg' alt='로고' />

                </div>
                    <Link to = '/' className = {classes.header_content}>
                        <button className={classes.header_menu_selected} >중고거래</button>
                    </Link>

                    <Link to = '/neighborhood' className = {classes.header_content}>
                        <button className={classes.header_menu} >동네 가게</button>
                    </Link>
                    <Link to = '/parttime' className = {classes.header_content}>
                        <button className={classes.header_menu} >알바</button>
                    </Link>
                    <Link to = '/estate' className = {classes.header_content}>
                        <button className={classes.header_menu} >부동산 직거래</button>
                    </Link>
                <div className = {classes.header_content}>
                    <form className={classes.header_form}>
                         <input className={classes.search_input} type="text" placeholder="물품이나 동네를 검색해보세요" />

                    </form>
                    {isLoggedIn ? <Button onClick={loginHandler} variant="warning" style={{marginRight : '10px'}}>내정보</Button>  : ''   }
                    <LoginButton  />
                </div>
            </div>
        </div>
    )
}

export default Header;