import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';

import classes from './Header.module.css';
import LoginButton from './LoginButton';
import { LoginState } from '../store/LoginState';
import LikePage  from './like/like.container.js';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

    const navigate = useNavigate();

    const SearchHandler = (event) => {
        event.preventDefault();
        setSearchText(searchText);
        navigate('/search', { state: { searchText: searchText } });
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <div className={classes.header}>
            <div className={classes.header_wrap}>
                <div className={classes.header_content}>
                    <Link to='/'>
                      <img className={classes.header_image} src='/images/cloudlogo.jpg' alt='로고' />
                    </Link>
                </div>
                <div className={classes.header_content}>
                    <form className={classes.header_form} onSubmit={SearchHandler}>
                        <input className={classes.search_input} type="text" placeholder="통합검색"
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
                        <Button onClick={openModal} variant="warning" style={{marginRight : '5px', fontSize : '12px'}}>찜목록</Button>
                      : ''   }

                    <LoginButton  />
                    <LikePage isOpen = {isModalOpen} close = {closeModal}/>

                </div>
            </div>
        </div>
    )
}

export default Header;