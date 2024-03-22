import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { updateCartApi } from '../Auth/API'

export const CartItem = ({item}) => {
    console.log(item)
    // const item={
    //     imageUrl:"https://imagescdn.peterengland.com/img/app/product/7/741003-8305822.jpg?q=75&auto=format&w=342",
    //     brand:"Petter England",
    //     title:"Plain White Cotten Shirt With Cuban Coller",
    //     price:2000,
    //     discountedPrice:1000,
    //     discountPersent:50
    // }
  return (
    <div className='flex flex-col w-11/12 m-3 border-2 border-gray-200 hover:shadow-2xl p-2'>
        <div className=' flex flex-row'>
            <div className=' h-40 w-36 bg-white mr-6'>
                <img className=' object-cover object-top h-full w-full' src={item.product.images[0].imageUrl} alt="" />
            </div>
            <div>
                <p className='font-semibold'>{item.product.title}</p>
                <p className='p-1 text-sm font-semibold opacity-70 text-gray-600'>Size : {item.size}</p>
                <p className='p-1 text-sm font-semibold opacity-70 text-gray-600'>Quantity : {item.quantity}</p>
                <p className='p-1 text-sm font-semibold opacity-70 text-gray-600'>{item.product.brand}</p>
                <div className='flex flex-row p-2'>
                    <p className=' font-semibold'>₹ {item.product.discountedPrice}</p>
                    <p className='mx-3 md:mx-6 text-gray-500 line-through'>₹ {item.product.price}</p>
                    <p className='mx-2 md:mx-6 text-green-500'>{item.product.discountPresent} % off</p>
                </div>
            </div>
        </div>

    </div>
  )
}
