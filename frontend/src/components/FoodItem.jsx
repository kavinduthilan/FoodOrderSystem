import React,{useContext} from 'react'
import '../sass/FoodItem.scss'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';


const FoodItem = ({ id,image, name, description, price }) => {
    
    const {amount,addToCart,removeFromCart} = useContext(StoreContext);
    console.log(`Rendering FoodItem ${id}:`, amount[id]); // Debug log

    return (
        <div className='food-item'>
            <img src={image} alt='' />
            <div className='food-item-content'>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>${price}</h3>
                {
                    !amount[id] ?
                        <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />
                        : 
                        <div className='food-item-amount'>
                            <button onClick={()=> removeFromCart(id)}>-</button>
                            <p>{amount[id]}</p>
                            <button onClick={()=> addToCart(id)}>+</button>
                        </div>
                }
            </div>                    
        </div>
    )
}

export default FoodItem;
