import React from 'react';
import logo from '../Assets/img/logo.svg';
import Alert from 'react-bootstrap/Alert';

const Header = () => {
  return (
    <div className='header'>
      <h1>Guía de personajes de la serie</h1>
        <img src={logo} alt="logo" className='logo' />
        <Alert variant='danger' className='m-5 p-5'>
        <h3>¡Alerta de spoilers!</h3>
        <p>Esta api contiene información de las series Breaking Bad y Better Call Saul. Si no has visto o terminado las series, te recomiendo no ver la api original, ya que contiene spoilers.
        </p>
        </Alert>
    </div>
  )
}

export default Header