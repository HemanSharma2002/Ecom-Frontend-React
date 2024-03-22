import React from 'react'
import { CartItem } from './CartItem'

export const Cart = ({cart}) => {
    console.log(cart)
    console.log(1)
  return (
    <div >
        <div className=' flex flex-row'>
        <div className=' h-screen w-4/6'>
          products
        </div>
        <div className=' h-screen w-2/6'>
          <div>
            <p>Price</p>
            <p>{cart.totalDiscountedPrice}</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
