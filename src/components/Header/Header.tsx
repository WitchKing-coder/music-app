import React, {useState} from 'react';
import snailIcon from '../../assets/images/snailIcon.svg';
import profileIcon from '../../assets/images/profile.svg'
import './header.scss'
import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate()
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false)

    return (
        <div className="header_Container">
            <img onClick={() => navigate("/home")} src={snailIcon} alt=""/>
            <input type="text" placeholder="🔍︎"/>
            <img onClick={() => setIsOpenSettings(!isOpenSettings)} src={profileIcon} alt=""/>
        </div>
    );
};

export default Header;