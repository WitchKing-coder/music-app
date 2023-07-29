import React from 'react';
import snailIcon from '../../assets/images/snailIcon.svg';
import profileIcon from '../../assets/images/profile.svg'
import './header.scss'

const Header = () => {
    return (
        <div className="header_Container">
            <img src={snailIcon} alt=""/>
            <input type="text" placeholder="🔍︎"/>
            <img src={profileIcon} alt=""/>
        </div>
    );
};

export default Header;