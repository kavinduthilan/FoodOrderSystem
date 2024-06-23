import React from 'react'
import '../sass/FoodItem.scss'


const FoodItem = ({ image, name, description, price }) => {    

    console.log('FoodItem props:',{ image, name, description, price });

    return (
        <div className='food-item'>
            <img src={image} alt='' />
            <h2 className='food-name'>{name}</h2>
            <p className='food-description'>{description}</p>
            <h3 className='food-price'>${price}</h3>                       
        </div>
    )
}

export default FoodItem;
