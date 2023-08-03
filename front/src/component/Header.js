import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

import classes from './Header.module.css';
import LoginButton from './LoginButton';
import { LoginState } from '../store/LoginState';
import LikePage  from './like/like.container.js';

const items = [
    {

      label: "[Audiobooks]",
      key: "[Audiobooks]",
    },
    {
      label: "[African Americans]",
      key: "[African Americans]",
    },
    {
      label: "[World War, 1939-1945]",
      key: "[World War, 1939-1945]",
    },
    {
      label: "[English fiction]",
      key: "[English fiction]",
    },
    {
      label: "[Copyright]",
      key: "[Copyright]",
    },
    {
      label: "[American poetry]",
      key: "[American poetry]",
    },
    {
      label: "[American fiction]",
      key: "[American fiction]",
    },
    {
      label: "[Science fiction]",
      key: "[Science fiction]",
    },
    {
      label: "[Children]",
      key: "[Children]",
    },
    {
      label: "[Adventure stories]",
      key: "[Adventure stories]",
    },
    {
      label: "[France]",
      key: "[France]",
    },
    {
      label: "[Indians of North America]",
      key: "[Indians of North America]",
    },
    {
      label: "[Conduct of life]",
      key: "[Conduct of life]",
    },
    {
      label: "[England]",
      key: "[England]",
    },
    {
      label: "[Frontier and pioneer life]",
      key: "[Frontier and pioneer life]",
    },
    {
      label: "[Authors, American]",
      key: "[Authors, American]",
    },
    {
      label: "[Childrens literature]",
      key: "[Childrens literature]",
    },
    {
      label: "[Books]",
      key: "[Books]",
    },
    {
      label: "[California]",
      key: "[California]",
    },
    {
      label: "[Cats]",
      key: "[Cats]",
    }

  ];

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText,setSearchText] = useState("");

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

    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };
    

    return (
        <div className={classes.header}>
            <div className={classes.header_wrap}>
                <div className={classes.header_content}>
                    <img className={classes.header_image} src='/images/cloudlogo.jpg' alt='로고' />
                </div>
                <div className={classes.header_content}>
                <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
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