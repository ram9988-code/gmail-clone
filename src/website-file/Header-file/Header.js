import React from 'react'
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './Logo-file/gmail1.jpg'
function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src={logo} alt="gmail-logo"/>
            </div>
            <div className="header__middle">
              <SearchIcon/>
              <input placeholder="Search mail" type="text"/>
               <ArrowDropDownIcon />
            </div>
            <div className="header__right">
              <IconButton>
                  <AppsIcon/>
              </IconButton>
              <IconButton>
                  <NotificationsIcon/>
              </IconButton>
              <Avatar/>

            </div>
        </div>
    )
}

export default Header
