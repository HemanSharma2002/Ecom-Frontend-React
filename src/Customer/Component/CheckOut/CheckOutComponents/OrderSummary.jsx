import React, { useEffect, useState } from 'react'
import { AddressComponent } from './AddressComponent'
import { Cart } from '../../Cart/Cart'
import { CartPage } from '../../Pages/CartPage'
import { getCartApi } from '../../Auth/API'
import { CartItem } from '../../Cart/CartItem'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate=useNavigate()
    const [cart,setCart]=useState()
    useEffect(()=>loadPage,[])
    async function loadPage(){
      try{
        const response=await getCartApi()
        setCart(response.data)
        console.log(cart)
      }
      catch{
        console.log("failed To load OrderSumary page")
      }
    }
  return (
    <div>
      <div onClick={()=>navigate(`/checkout?step=2`)}><ArrowBack className='m-2 bg-gray-400 text-white rounded-full' /></div>
        {cart!=null&&
          <div>
            <div className=' border-2 border-gray-200 rounded-md '><AddressComponent addres={cart.selectedAddress}/></div>
            {/* <div><CartPage/></div> */}
            {/* product show */}
            <div>
              {
                cart.cartItems.map(item =>(
                  <CartItem item={item}/>
                ))
              }
            </div>
            {/* (Order price) */}
            <div>
        
        <div>
          <p>Price</p>
          <p>{cart.totalPrice}</p>
        </div>
        <div>
          <p>Discount</p>
          <p>{cart.totalDiscount} %</p>
        </div>
        <div>
          <p>Dilevery Charge</p>
          <p>Free</p>
        </div>
        <div>
          <p>Total</p>
          <p>{cart.totalDiscountedPrice}</p>
        </div>

            </div>
            <button className=' bg-indigo-500'>Proceed to payments</button>
          </div>
        }
    </div>
  )
}
