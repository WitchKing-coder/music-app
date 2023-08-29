import React from 'react';
import Header from "./components/UI/header/Header";
import './App.scss'
import RoutesContent from "./helpers/RoutesContent/RoutesContent";

function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesContent/>
    </div>
  );
}

export default App;