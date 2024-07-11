import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';
import '../sass/FoodDisplay.scss'

const FoodDisplay = ({category}) => {
  
    const { food_list } = useContext(StoreContext);
    console.log('FoodDisplay food list:',food_list);

    return (
        <div className='food-display'>
        <h1 className='food-display-title'>Our top dishes</h1>        
        <div className='food-display-list'>
                {food_list.map((item, index) => {
                
                if(category ==="All" || category === item.category){
                return(
                    <FoodItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                    />
                    )
                }
            })}
        </div>        
    </div>    
    
  )
}

export default FoodDisplay;
