import { createContext } from "react";
import { useState } from "react";
import { food_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const ContextProvider = (props) => {
  const [amount, setAmount] = useState({});
  const [token, setToken] = useState(null);
  const url = "https://localhost:7256/User";

  const addToCart = (itemId) => {
    if (!amount[itemId]) {
      setAmount((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setAmount((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setAmount((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in amount) {
      if (amount[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        console.log("itemInfo:", itemInfo);
        totalAmount += itemInfo.price * amount[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    amount,
    addToCart,
    removeFromCart,
    setAmount,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
