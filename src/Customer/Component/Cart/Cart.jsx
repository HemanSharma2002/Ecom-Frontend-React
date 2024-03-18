import React from 'react'
import { CartItem } from './CartItem'

export const Cart = () => {
    const item={
        imageUrl:"https://imagescdn.peterengland.com/img/app/product/7/741003-8305822.jpg?q=75&auto=format&w=342",
        brand:"Petter England",
        title:"Plain White Cotten Shirt With Cuban Coller",
        price:2000,
        discountedPrice:1000,
        discountPersent:50
    }
    const total={
        price:2000,
        discountedPrice:1500,
        discount:500,
        items:2

    }

  return (
    <div className=' flex flex-col md:flex-row md:h-screen p-2 '>
        <div className=' flex flex-col h-full overflow-scroll md:w-4/6 border rounded-lg' >
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        <CartItem item={item} quantity={2} size={"M"}/>
        </div>
        <div className='md:h-full w-full h-96 md:w-2/6 my-5 '>
            <div className=' border-2 border-gray-200 rounded-lg md:mx-2'>
                <p className=' text-left mx-5 text-2xl font-bold text-gray-500'>Price Detail</p>
                <div>
                    <div className=' flex  flex-row justify-between mx-10 font-semibold mt-2'>
                        <p>
                            Price ( {total.items} items)
                        </p>
                        <p className=' '> 
                        ₹ {total.price}
                        </p>
                    </div>
                    <div className=' flex  flex-row justify-between mx-10 font-semibold mt-2'>
                        <p>
                            Discount
                        </p>
                        <p  className=' text-green-500'>
                        ₹ {total.discount}
                        </p>
                    </div>
                    <div className=' flex  flex-row justify-between mx-10 font-semibold mt-2'>
                        <p  >
                            Dilevery Charge
                        </p>
                        <p className=' text-green-500'>
                            Free
                        </p>
                    </div>
                    <div className=' flex  flex-row justify-between mx-10 text-xl font-bold mt-2'>
                        <p>
                           Total Price 
                        </p>
                        <p  className=' text-green-500'>
                        ₹ {total.discountedPrice}
                        </p>
                    </div >
                    <div className=' w-full flex flex-col items-center py-10'>
                    <button className='bg-indigo-500 text-white font-semibold w-9/12 py-2 pb-3 rounded-lg hover:bg-indigo-600'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
