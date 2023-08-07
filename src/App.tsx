import React from 'react';
import Header from "./components/UI/header/Header";
import {Navigate, Route, Routes} from "react-router";
import WelcomePage from "./components/UI/pages/WelcomePage";
import MainPage from "./components/UI/workplace/mainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route  path="/" element={<WelcomePage/>}/>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="*" element={<Navigate to='/home'/>}/>
        </Routes>
    </div>
  );
}

export default App;