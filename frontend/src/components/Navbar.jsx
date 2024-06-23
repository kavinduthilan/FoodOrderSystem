import React from 'react'
import { assets } from '../assets/assets';
import '../sass/Navbar.scss'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='navbar-logo'>
              <img src={assets.logo} alt='' />
          </div>
            <ul className='navbar-menu'>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li> 
            </ul>
          <div className='navbar-right'>
              <div className='cart'>
                  <img src={assets.cart} alt='' />
              </div>
              <button>Sign in</button>
          </div>
    </div>
  )
}

export default Navbar;