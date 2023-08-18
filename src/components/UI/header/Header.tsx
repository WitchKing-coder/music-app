import React, {useState} from 'react';
import snailIcon from '../../../assets/images/snailIcon.svg';
import profileIcon from '../../../assets/images/profile.svg'
import './Header.scss'
import {useDispatch} from "react-redux";
import {setUrl} from "../../../store/slices/SearchValue";
import {useNavigate} from "react-router";


const Header = () => {
    const [searchType, setSearchType] = useState<string>("songs")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function searchSpotifyHandler(value: string) {
        dispatch(setUrl([value, searchType]))
    }

    return (
        <div className="header_Container">
            <img onClick={() => navigate('/')} src={snailIcon} alt=""/>
            <div className="search-block">
                <input className="search-field" onBlur={e => searchSpotifyHandler(e.target.value)} type="text" placeholder="🔍︎"/>
                <select className="select-types" onChange={e => setSearchType(e.target.value)}>
                    <option selected value="songs" className="select-option">songs</option>
                    <option value="playlists" className="select-option">playlists</option>
                    <option value="albums" className="select-option">albums</option>
                </select>
            </div>
            <img onClick={() => navigate("/archive")} src={profileIcon} alt=""/>
        </div>
    );
};

export default Header;