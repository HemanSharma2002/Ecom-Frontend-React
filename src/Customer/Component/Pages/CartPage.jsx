import React, { useEffect, useState } from 'react'
import { Cart } from '../Cart/Cart'
import { deleteCartItemApi, getCartApi } from '../Auth/API'
import { Delete } from '@mui/icons-material'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export const CartPage = () => {
  const navigate=useNavigate()
  const[cart,setCart]=useState()
  useEffect(()=>loadPage,[])
  async function loadPage(){
    getCartApi().then(response=>{
      console.log(response)
      setCart(response.data)
    }).catch(response=>console.log(response.data))
    console.log(cart)
  }
  async function deleteCartItem(cartID){
    // deleteCode
    await deleteCartItemApi(cartID).catch(console.log("Error"))
    loadPage()
  }
  return (
    <div >
      {cart!=null&&
      <div >
      <div className=' flex flex-row'>
        {/* Product Section */}
      <div className=' h-screen w-4/6'>
        {
          cart.cartItems.map(item=>(
            <div id={item.id}>
              <div>
                <div className='w-40'>
                  <img className=' object-contain object-top' src={item.product.images[0].imageUrl} alt="" />
                </div>
                <div>
                  <p>{item.product.title}</p>
                  <p>{item.product.brand}</p>
                  <p>Size: {item.size}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className=' w-5 h-5 font-bold'><MinusCircleIcon/></p>
                  <p>{item.quantity}</p>
                  <p className=' w-5 h-5 font-bold' ><PlusCircleIcon/></p>
                </div>
                <div onClick={()=>deleteCartItem(item.id)}>
                  <Delete/>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {/* price section */}
      <div className=' h-screen w-2/6'>
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
        <div><button className='bg-indigo-500' onClick={()=>navigate(`/checkout?step=2`)}>Place Order</button></div>
      </div>
    </div>
  </div>
      }
    </div>
  )
}
