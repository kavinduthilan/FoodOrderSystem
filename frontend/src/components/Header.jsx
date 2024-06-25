import React from 'react'
import { assets } from '../assets/assets';
import '../sass/Header.scss'

const Header = () => {
  return (
    <div className='header'> 
        <img src={assets.head_4} alt='' />
    </div>
  )
}
 
export default Header;
