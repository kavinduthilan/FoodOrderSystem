import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets.js";

const cartSlice = createSlice({
  name: "cart",
  
  initialState: {
    items: [],
    food_list,
    quantity: {},
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {

     const newItem = action.payload;
     const existingItem = state.items.find((item)=> item.id === newItem.id);

     if (existingItem){
          existingItem.quantity = newItem.quantity;
          state.quantity[newItem.id] = newItem.quantity;
     }else{
          state.items.push(newItem);
          state.quantity[newItem.id] = newItem.quantity;

     } 


    const newArr = state.items.map((item)=> (
      {
        foodId : item.id,
        price: item.price,
        amount: item.quantity,
        totalPrice: item.quantity * item.price
      }
    ));



    

    state.totalAmount = newArr.reduce((acc, item)=> acc + item.totalPrice, 0);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload._id;
      console.log("Removing from cart", itemId);

      const existingItemIndex = state.items.findIndex((item) => item.id === itemId);
      console.log("Existing item index", existingItemIndex);

      if (existingItemIndex !== -1) {
        // Remove item from items array
        state.items.splice(existingItemIndex, 1);
        // Set quantity to 0
        state.quantity[itemId] = 0;
        
        // Recalculate total amount
        const newArr = state.items.map((item) => ({
          foodId: item.id,
          price: item.price,
          amount: item.quantity,
          totalPrice: item.quantity * item.price
        }));

        state.totalAmount = newArr.reduce((acc, item) => acc + item.totalPrice, 0);
      }
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
