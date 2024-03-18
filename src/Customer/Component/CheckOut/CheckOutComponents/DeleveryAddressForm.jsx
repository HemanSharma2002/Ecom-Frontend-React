import React from 'react'
import { AddressComponent } from './AddressComponent'

export const DeleveryAddressForm = () => {
    const addres={
        firstName:"Heman",
        lastName:"Sharama",
        address:"VPO Bhatoli",
        city:"Una",
        state:"Himachal Pradesh",
        pincode:"174315",
        mobile:"9876543210"
    }
  return (
    <div className='w-full   rounded-md flex flex-col md:flex-row md:h-screen'>
        <div className='w-full h-96 overflow-scrol md:w-1/3'>
            <div className='flex flex-col items-center md:h-screen'>
            <AddressComponent addres={addres}/>
            <button className=' bg-indigo-500 text-white font-semibold p-2 px-10 rounded-md hover:bg-indigo-600'>DELIVER HERE</button>
            <hr />
            </div>
        </div>
        <div className='w-full h-auto md:h-screen md:w-2/3 bg-red-500 p-3'>Form</div>
    </div>
  )
}
