import React, {useState} from 'react';
import snailIcon from '../../../assets/images/snailIcon.svg';
import profileIcon from '../../../assets/images/profile.svg'
import './Header.scss'
import {useDispatch} from "react-redux";
import {setUrl} from "../../../store/slices/SearchValue";
import {useLocation, useNavigate} from "react-router";


const Header = () => {
    const location = useLocation()
    const [searchType, setSearchType] = useState<string>("songs")
    const [limitSongs, setLimitSongs] = useState<string>("6")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function searchSpotifyHandler(value: string) {
        dispatch(setUrl([value, searchType, limitSongs]))
    }

    function setLimitSongsHandler(value: string) {
        if (+value < 1)
            setLimitSongs("1")
        else if (+value > 20)
            setLimitSongs("20")
        else
            setLimitSongs(value)
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
                <input value={limitSongs} onChange={(e) => setLimitSongs(e.target.value)} onBlur={(e) => setLimitSongsHandler(e.target.value)} className="limit-songs" type="number" min="1" max="20" placeholder="лимит"/>
            </div>
            <img onClick={() => navigate(location.pathname === "/archive" ? "/home" : "/archive")} src={profileIcon} alt=""/>
        </div>
    );
};

export default Header;