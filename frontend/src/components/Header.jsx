import React from 'react'
import { assets } from '../assets/assets';
import '../sass/Header.scss'

const Header = () => {
  return (
    <div className='header'> 
        <img src={assets.head_1} alt='' />
    </div>
  )
}
 
export default Header;
