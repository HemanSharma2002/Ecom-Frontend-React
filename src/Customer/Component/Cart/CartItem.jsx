import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export const CartItem = ({quantity,item,size}) => {
    const[noOfItems,setQuantity]=useState(quantity)
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
                <img className=' object-cover object-top h-full w-full' src={item.imageUrl} alt="" />
            </div>
            <div>
                <p className='font-semibold'>{item.title}</p>
                <p className='p-1 text-sm font-semibold opacity-70 text-gray-600'>Size : {size}</p>
                <p className='p-1 text-sm font-semibold opacity-70 text-gray-600'>{item.brand}</p>
                <div className='flex flex-row p-2'>
                    <p className=' font-semibold'>₹ {item.discountedPrice}</p>
                    <p className='mx-3 md:mx-6 text-gray-500 line-through'>₹ {item.price}</p>
                    <p className='mx-2 md:mx-6 text-green-500'>{item.discountPersent} % off</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row m-2'>
            <div className='flex flex-row pt-1'>
                <MinusCircleIcon onClick={()=>{
                    if(noOfItems>1){
                        setQuantity(noOfItems-1)
                    }
                }} className='h-6 w-6 text-indigo-500 '/>
                <p className=' mx-7'>{noOfItems}</p>
                <PlusCircleIcon onClick={()=>setQuantity(noOfItems+1)} className='h-6 w-6 text-indigo-500'/>
            </div>
            <button className='text-white ml-32 font-semibold bg-indigo-500 rounded-md px-5 py-1 pb-2 hover:bg-indigo-600'>Remove</button>
        </div>
    </div>
  )
}
