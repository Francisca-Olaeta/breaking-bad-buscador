import React from 'react';
import logo from '../Assets/img/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <h1>Personajes de</h1>
        <img src={logo} alt="logo" className='logo' />
    </div>
  )
}

export default Header