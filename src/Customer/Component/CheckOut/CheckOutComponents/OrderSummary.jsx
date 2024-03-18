import React from 'react'
import { AddressComponent } from './AddressComponent'
import { Cart } from '../../Cart/Cart'

export const OrderSummary = () => {
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
    <div>
        <div className=' border-2 border-gray-200 rounded-md '><AddressComponent addres={addres}/></div>
        <div><Cart/></div>
    </div>
  )
}
