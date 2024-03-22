import React, { useEffect, useState } from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'
import { getProductByid } from '../Auth/API'
import { useParams } from 'react-router-dom'

export const ProductPage = () => {
    const{id}=useParams()
    const[responce,setResponce]=useState()
    useEffect(()=>loadPage,[])
    async function loadPage(){
        await getProductByid(id).then(resp=>{
            setResponce(resp.data)
            console.log(resp)
        }).catch(resp=>console.log(resp))
    }
  return (
    <div>{responce!=null&&<ProductDetails product={responce} />}</div>
  )
}
