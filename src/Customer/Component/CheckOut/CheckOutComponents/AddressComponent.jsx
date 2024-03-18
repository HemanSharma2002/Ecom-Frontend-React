import { Phone } from '@mui/icons-material'
import React from 'react'


export const AddressComponent = ({addres}) => {
    // const addres={
    //     firstName:"Heman",
    //     lastName:"Sharama",
    //     address:"VPO Bhatoli",
    //     city:"Una",
    //     state:"Himachal Pradesh",
    //     pincode:"174315",
    //     mobile:"9876543210"
    // }
  return (
    <div className='w-full flex flex-col items-center my-5  rounded-lg hover:shadow-2xl'>
        <div className='  w-full p-2 px-5'>
            <div className=' font-semibold flex flex-row my-2'>
                <p className=''>{addres.firstName}</p>
                <p className=''>{addres.lastName}</p>
            </div>
            <div>
                <p>{addres.address} , {addres.city } , {addres.state}</p>
                <p className='text-gray-800'>{addres.pincode}</p>
            </div>
            <div className='my-2'>
                <p className=' font-semibold'>Phone Number</p>
                <p className=''><Phone className='text-indigo-500 mx-2'/>  {addres.mobile}</p>
            </div>
        </div>
    </div>
  )
}
