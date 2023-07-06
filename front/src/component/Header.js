import {Link} from 'react-router-dom';

import classes from './Header.module.css';

function Header () {
    return (
        <div className = {classes.header}>
            <div className = {classes.header_wrap}>
                <div className = {classes.header_content}>
                    <img src='images/logo.png' alt='로고' />
                </div>

                    <Link to = '/' className = {classes.header_content}>
                        <span className={classes.header_menu_selected} >중고거래</span>
                    </Link>

                    <Link to = '/neighborhood' className = {classes.header_content}>
                        <span className={classes.header_menu} >동네 가게</span>
                    </Link>
                    <Link to = 'parttime' className = {classes.header_content}>
                        <span className={classes.header_menu} >알바</span>
                    </Link>
                    <Link to = 'estate' className = {classes.header_content}>
                        <span className={classes.header_menu} >부동산 직거래</span>
                    </Link>
                    <Link to='car' className = {classes.header_content}>
                        <span className={classes.header_menu} >중고차 직거래</span>
                    </Link>
                <div className = {classes.header_content}>
                    <form className={classes.header_form}>
                         <input className={classes.search_input} type="text" placeholder="물품이나 동네를 검색해보세요" />
                         <button className={classes.chat_button} type= "submit">로그인</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;