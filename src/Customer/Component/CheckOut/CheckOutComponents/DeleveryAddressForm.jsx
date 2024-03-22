import React, { useEffect, useState } from 'react'
import { AddressComponent } from './AddressComponent'
import {Formik,Form,Field} from 'formik'
import { getUserAllAddress, postUserAddressApi, putCartSelectedAddress } from '../../Auth/API'
import { useNavigate } from 'react-router-dom'

export const DeleveryAddressForm = () => {
    const [address,setAddress]=useState()
    const navigate=useNavigate()
    useEffect(()=>loadPage,[])
    async function loadPage(){
        try{
            const response=await getUserAllAddress()
            setAddress(response.data)
        }
        catch{
            console.log("Error in fetching addresses")
        }
    }
    async function addAddress(prop){
        try{
            await postUserAddressApi(prop)
            loadPage()
        }
        catch{
            console.log("Errror in saving address")
        }
    }
    async function deleverHere(address){
        try{
            const response=await putCartSelectedAddress(address)
            navigate(`/checkout?step=3`)

        }
        catch{
            console.log("Fail to update Cart Address")
        }
    }
    // const [firstName,setFirstName]=useState("Heman")
  return (
    <div className='w-full   rounded-md flex flex-col md:flex-row md:h-screen my-8'>
        <div className='w-full h-96 overflow-scrol md:w-1/3'>
            {address!=null&&
            <div className='flex flex-col items-center md:h-screen overflow-scroll'>
            {
                address.map(addres=>(
                    <div id={addres.id} className='w-full flex flex-col items-center'>
                        <AddressComponent addres={addres}/>
                        <button className=' bg-indigo-500 text-white font-semibold m-2 p-2 px-10 rounded-md hover:bg-indigo-600' onClick={()=>deleverHere(addres)}>DELIVER HERE</button>
                        <hr />
                    </div>
                ))
            }
            </div>
            }
            
        </div>
        <div className='w-full h-auto md:h-screen md:w-2/3 bg-slate-100 rounded-md shadow-md p-3 border-gray-200 border-2'>
            <div className='py-10'>
                <Formik onSubmit={(items)=>addAddress(items)} enableReinitialize={true} initialValues={{}}>
                    {(props)=><Form className='flex flex-col '>
                        <div className='flex flex-col md:flex-row justify-between m-3'>
                            <fieldset  className=' flex flex-col my-3'>
                                <label className=' font-semibold' htmlFor="">First Name</label>
                                <Field  className='h-10 rounded-md border-gray-200 border-2' type="text" name="firstName" ></Field>
                            </fieldset>
                            <fieldset className=' flex flex-col my-3'>
                                <label className=' font-semibold' htmlFor="">Last Name</label>
                                <Field className='h-10 rounded-md border-gray-200 border-2' type="text" name="lastName" ></Field>
                            </fieldset>
                        </div>
                        <div className='flex flex-row m-3 '>
                        <fieldset className='flex flex-col w-full '>
                                <label className=' text-left font-semibold' htmlFor="">Street Address</label>
                                <Field className='h-10  overflow-auto  rounded-md border-gray-200 border-2' type="text" name="streetAddress" ></Field>
                            </fieldset>
                        </div>
                        <div className='m-3 flex flex-col md:flex-row justify-between'>
                        <fieldset className=' flex flex-col my-3'>
                                <label className=' font-semibold' htmlFor="">City</label>
                                <Field className=' h-10 rounded-md border-gray-200 border-2' type="text" name="city" ></Field>
                            </fieldset>
                            <fieldset className=' flex flex-col my-3'>
                                <label className=' font-semibold' htmlFor="">State</label>
                                <Field className=' h-10 rounded-md border-gray-200 border-2' type="text" name="state" ></Field>
                            </fieldset>
                            <fieldset className=' flex flex-col my-3'>
                                <label className=' font-semibold' htmlFor="">Pincode</label>
                                <Field className=' h-10 rounded-md border-gray-200 border-2' type="text" name="pincode" ></Field>
                            </fieldset>
                        </div>
                        <div className=''>
                        <fieldset className=' flex flex-col md:items-start m-3'>
                                <label className=' font-semibold' htmlFor="">Mobile</label>
                                <Field className=' h-10 rounded-md border-gray-200 border-2' type="text" name="mobile" ></Field>
                            </fieldset>
                        </div>
                        <div className='flex flex-col items-center my-10'>
                            <button type='submit' className=' bg-indigo-500 px-5  rounded-md font-semibold text-white pt-2 pb-3'>Add Address</button>
                        </div>
                    
                    </Form>}
                </Formik>
            </div>
        </div>
    </div>
  )
}
