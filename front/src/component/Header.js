import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

import classes from './Header.module.css';
import LoginButton from './LoginButton';
import { LoginState } from '../store/LoginState';
import LikePage from './like/like.container.js';
import { SearchText } from '../store/Search'

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

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const [searchTextValue, setsearchTextValue] = useRecoilState(SearchText);

  const navigate = useNavigate();

  const SearchHandler = (event) => {
    event.preventDefault();
    navigate('/search/${searchTextValue}', { state: { SearchText: searchTextValue } });
  }

  const handleSearchKeyUp = (event) => {
    if (event.key === 'Enter') {
      SearchHandler(event);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    navigate(`./categories/${key}`)
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={classes.header}>
      <div className={classes.header_wrap}>
        <Link to='./' className={classes.header_content1} onClick={handleClick}>
          <img className={classes.header_image} src='/images/cloudlogo.jpg' alt='로고' />
        </Link>
        <div className={classes.header_content2}>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{color : "white"}}>
                Categories
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className={classes.header_content3}>
          <LoginButton />
          <LikePage isOpen={isModalOpen} close={closeModal} />
        </div>
      </div>
    </div>
  )
}

export default Header;