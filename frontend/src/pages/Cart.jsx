import React,{useContext} from 'react'
import { StoreContext } from '../context/StoreContext';
import '../sass/Cart.scss';

const Cart = () => {

    const {amount , food_list ,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className='cart-items'> 
        <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>      
        </div>
        <br />
        <hr />    
            {food_list.map((item, index) => {
                if (amount[item._id] > 0) {
                    return (
                        <div className='cart-items-list' key={index}>
                            <img src={item.image} alt='' />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{amount[item._id]}</p>
                            <p>{item.price * amount[item._id]}</p>
                            <p className='remove' onClick={()=> removeFromCart(item._id)}>X</p>
                        </div>
                    );
                }
                return null; // Add this line
            })}
          </div>
            <div className='cart-total'>
                <h2>Cart Total</h2>
                <div>
                    <div className='cart-total-details'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <div className='cart-total-details'>
                        <p>Delivery</p>
                        <p>$2</p>
                    </div>
                    <div className='cart-total-details'>
                        <p>Total</p>
                        <p>${getTotalCartAmount() + 2}</p>   
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
        </div>  
    </div>
  )
}

export default Cart
