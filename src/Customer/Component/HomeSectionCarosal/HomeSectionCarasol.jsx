import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeCard/HomeSectionCard';
import { KeyboardArrowLeft } from '@mui/icons-material';


const responsive = {
    0: { items: 2 },
    720: { items: 3.5 },
    1024: { items: 6 },
};



export const HomeSectionCarousel = ({item,section}) => {
    const items=item.map(item=><HomeSectionCard  product={item}/>)
    const[index,setActiveIndex]=useState(0)
    const slidePrev=()=>{
        console.log(index)
        setActiveIndex(index-1)
    }
    const slideNext=()=>setActiveIndex(index + 1)
    // const syncActiveIndex=({item})=>setActiveIndex(item.item)
    return(
      <div className=' px-1 md:px-6'>
        <div className='relative font-bold text-xl text-gray-700 my-4 mx-10 '>{section}</div>
        <div className='relative px-3'>
        <AliceCarousel
        items={items}
        responsive={responsive}
        disableDotsControls
        disableSlideInfo
        // onSlideChanged={syncActiveIndex}
        activeIndex={index}
        />
        {/* {index!==items.length-6 && <button className='m-1 rotate-180 p-1 bg-purple-300 hover:bg-purple-400 duration-150 text-white rounded-md absolute top-1/3 right-0' onClick={slideNext} > <KeyboardArrowLeft/></button>}
        { index!==0 &&<button className=' m-1  p-1 bg-purple-300 hover:bg-purple-400 duration-150 text-white rounded-md absolute top-1/3 left-0 bg-opacity-90' onClick={slidePrev} > <KeyboardArrowLeft/></button>} */}
        </div>
      </div>
    )
};



// -----Sample--------


