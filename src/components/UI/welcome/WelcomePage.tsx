import React, {useEffect} from 'react';
import './WelcomePage.scss';
import {authSpotify} from "../../../helpers/http/AuthHook";
import {useNavigate} from "react-router";

const WelcomePage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (sessionStorage.getItem('logged in'))
            navigate("/home")
    }, [navigate])
    function buttonClickHandler(){
        sessionStorage.setItem('logged in', 'true')
    }
    return (
        <div className="welcome-page-container">
            <button className="start-button">
                <a className="start-button-text" onClick={buttonClickHandler} href={authSpotify}>Start</a>
            </button>
        </div>
    );
};
export default WelcomePage;