import React from 'react'
import { assets } from '../assets/assets';
import '../sass/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-item'>
        <div className='footer-logo'>
          <img src={assets.logo} alt='' />
        </div>
        <div className='footer-content'>
          <p>Address: 1234 Street Name, City Name, United States</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Email:bites404@gmail.com</p>      
        </div>
        <div className='footer-social'>
          <img src={assets.facebook} alt='' />
          <img src={assets.instagram} alt='' />
          <img src={assets.tiktok} alt='' />
        </div>  
      </div>  
      <hr />
      <p>© 2024. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;
