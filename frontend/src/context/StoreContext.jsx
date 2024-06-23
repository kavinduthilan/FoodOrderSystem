import { createContext } from 'react';
import { food_list } from '../assets/assets.js';

export const StoreContext = createContext(null);

const ContextProvider = ({children}) => {

    const contextValue = { food_list };
    
    console.log('ContextProvider food list :',food_list);

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default ContextProvider;


