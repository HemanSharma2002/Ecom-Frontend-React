
import React from "react";
export default function HomeSectionCard({product}){

    
    return (
        <div className=" mx-4  rounded-md border-2 h-80  flex flex-col items-center w-48">
            <div className=" bg-slate-500 h-52 w-full rounded-md">
                <img className=" object-cover object-top h-full w-full rounded-t-md " src={product.image} alt="" />
            </div>
            <div className=" p-1">
                <p className=" text-xl font-semibold">{product.brand}</p>
                <p className=" text-sm pt-1">{product.title}</p>
            </div>
        </div>
    )
}