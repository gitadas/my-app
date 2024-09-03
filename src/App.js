import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation/>
        <Main />
        <Aside />
        <Footer />        
    </div>
  );
}

export default App;
