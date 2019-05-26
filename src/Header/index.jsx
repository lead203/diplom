import React from 'react';
import logo from '../assets/img/logo.png'
import './index.css'

function Header() {
  return (
    <header className="App-header">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <h1>Онлайн-бронирование</h1>
    </header>
  );
}

export default Header;
