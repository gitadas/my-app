import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from './components/Global/Modal';

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        <Main />
        <Modal/>
        <Footer />        
    </div>
  );
}

export default App;

