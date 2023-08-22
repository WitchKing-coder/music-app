import React from 'react';
import Header from "./components/UI/header/Header";
import {Navigate, Route, Routes} from "react-router";
import WelcomePage from "./components/UI/welcome/WelcomePage";
import MainPage from "./components/UI/workplace/mainPage/MainPage";
import './App.scss'
import ArchivePage from "./components/UI/workplace/archivePage/ArchivePage";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route  path="/" element={<WelcomePage/>}/>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="/archive" element={<ArchivePage/>}/>
            <Route path="*" element={<Navigate to='/home'/>}/>
        </Routes>
    </div>
  );
}

export default App;