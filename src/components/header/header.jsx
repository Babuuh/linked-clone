import React from 'react';
import './header.css';
import logo from './logo.png';
import avatar from './avatar.png';
import HeaderOptions from './header-options';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
   <div className="header">

    <div className="header-left">
        <img src={logo} alt='' />

        <div className="header-search">
            <SearchIcon />
            <input type="text" />
        </div>
    </div>

    <div className="header-right">
        <HeaderOptions title="Home" Icon={HomeIcon}/>
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOptions title="Messaging" Icon={ChatIcon}/>
        <HeaderOptions title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOptions avatar={avatar} title="me" />
    </div>

    </div>
  )
}

export default Header