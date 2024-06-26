import { createContext } from 'react';
import { useState } from 'react';
import { food_list, menu_list } from '../assets/assets.js';

export const StoreContext = createContext(null);

const ContextProvider = (props) => {

    const [amount, setAmount] = useState({});
    
    const addToCart = (itemId) => {
        if(!amount[itemId]) {
            setAmount((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setAmount((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => { 
        setAmount((prev)=>({...prev,[itemId]: prev[itemId]-1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in amount) {
            if (amount[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * amount[item];
                } else {
                    console.log(`Item with _id ${item} not found in food_list.`);
                    // Handle the case where itemInfo is undefined (optional)
                }
            }
        }
        return totalAmount;
    };

    
    const contextValue = {
        food_list,
        menu_list,
        amount,
        addToCart,
        removeFromCart,
        getTotalCartAmount
        
    };
    
    
    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default ContextProvider;


