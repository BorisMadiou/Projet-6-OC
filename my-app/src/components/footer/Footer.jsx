import React from 'react';
import logo from '../../assets/images/logo-footer.png';
import './footer.css';

function Footer() {
  return (
    <footer>
     <img className='logo-footer' src={logo} alt="Logo" />
     <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;