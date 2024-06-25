import React from 'react'
import '../sass/Menu.scss'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Menu = () => {

  const { menu_list } = useContext(StoreContext);
  
  const Clickhere = () => {
    
   }

  return (
    <div className='menu'>
        <h1>Discover our Delicious menu</h1>      
        <p className="menu-description">
              At Bites 404, we believe that food should be an experience, a
              journey of flavors that tantalize your taste buds.
              Our menu is carefully crafted to offer a delightful
              array of dishes, from classic favorites to innovative culinary
              creations. Each dish is prepared with the freshest ingredients,
              ensuring a burst of flavor in every bite. Whether you're in the
              mood for a hearty meal or a light snack, you'll find something
              to satisfy your cravings. Dive in and explore the delectable
              options we have to offer!
        </p>
        <div className='menu-category'>
        {menu_list.map((item, index) => {
          return (
            <div key={index} className='menu-category-item'>
              <img onClick={Clickhere()} src={item.menu_image} alt='' />
              <h2>{item.menu_name}</h2>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default Menu;
