import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';

import classes from './Header.module.css';
import LoginButton from './LoginButton';
import { LoginState } from '../store/LoginState';

function Header() {

    const [searchText, setSearchText] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

    const navigate = useNavigate();

    const SearchHandler = (event) => {
        event.preventDefault();
        setSearchText(searchText);
        navigate('/search', { state: { searchText: searchText } });
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
        navigate('/mypage');
    }

    return (
        <div className={classes.header}>
            <div className={classes.header_wrap}>
                <div className={classes.header_content}>
                    <img className={classes.header_image} src='/images/cloudlogo.jpg' alt='로고' />

                </div>
                <div className={classes.header_content}>
                    <form className={classes.header_form} onSubmit={SearchHandler}>
                        <input className={classes.search_input} type="text" placeholder="물품이나 동네를 검색해보세요"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                            onKeyUp={(event) => {
                                if (event.key === 'Enter') {
                                    SearchHandler(event);
                                }
                            }}
                        />
                    </form>

                    {isLoggedIn ? 
                        <Button onClick={loginHandler} variant="warning" style={{marginRight : '5px', fontSize : '12px'}}>내정보</Button>
                      : ''   }
                    <LoginButton  />

                </div>
            </div>
        </div>
    )
}

export default Header;