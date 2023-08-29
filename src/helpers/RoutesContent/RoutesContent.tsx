import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import WelcomePage from "../../components/UI/welcome/WelcomePage";
import MainPage from "../../components/UI/workplace/mainPage/MainPage";
import ArchivePage from "../../components/UI/workplace/archivePage/ArchivePage";

const RoutesContent = () => {
    return (
        <Routes>
            <Route  path="/" element={<WelcomePage/>}/>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="/archive" element={<ArchivePage/>}/>
            <Route path="*" element={<Navigate to='/home'/>}/>
        </Routes>
    );
};

export default RoutesContent;