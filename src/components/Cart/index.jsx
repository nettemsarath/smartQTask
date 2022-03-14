import React, { useCallback } from 'react'
import "./index.css";

import useStore from '@/store';
import {selectItemsInCart, selectRemoveItemFromCart, selectRemoveallItemsFromCart} from "@/selectors";

import deleteIcon from "@/assets/delete.png"

function CartItem({item, removeItemFromCart}) {
  return (
    <>
      <div> {item.foodname} </div>
      <div> {item.quantity} </div>
      <div>
        <div> $ {item.quantity * item.price } </div>
        <img onClick={()=> removeItemFromCart(item) } className='cart_item-icon' src={deleteIcon} alt="cart_item-icon" />
      </div>
    </>
  )
};

function Cart() {
  const itemsInCart = useStore(selectItemsInCart);
  const removeItemFromCart = useStore(selectRemoveItemFromCart)
  const removeallItemsFromCart = useStore(selectRemoveallItemsFromCart);

  return (
    <div className='card cart_container' >

      <div className='cart_content' >
        <div className='cart_header' >
          <div> Cart Summary </div>
          <img onClick={removeallItemsFromCart} src={deleteIcon} />
        </div>
        <div className='cart_items' >
          {
            itemsInCart.length ? (<>
              <div>Item</div>
              <div>Qty</div>
              <div> Sub Total </div>
            </> ) : null
          }
        </div>
        <div className='cart_items' >
        {
          itemsInCart.map(order_item=> <CartItem item={order_item} removeItemFromCart={removeItemFromCart} />)
        }
        </div>
      </div>

      <button>Proceed</button>
    </div>
  )
}

export default Cart;