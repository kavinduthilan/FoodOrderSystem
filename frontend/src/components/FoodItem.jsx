import React from 'react'
import '../sass/FoodItem.scss'


const FoodItem = ({ image, name, description, price }) => {    

    console.log('FoodItem props:',{ image, name, description, price });

    return (
        <div className='food-item'>
            <img src={image} alt='' />
            <div className='food-item-content'>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>                    
        </div>
    )
}

export default FoodItem;
