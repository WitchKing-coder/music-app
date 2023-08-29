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
        window.location.href = authSpotify
        sessionStorage.setItem('logged in', 'true')
    }
    return (
        <div className="welcome-page-container">
            <button formAction={authSpotify} onClick={buttonClickHandler} className="start-button">
                Start
            </button>
        </div>
    );
};
export default WelcomePage;