import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const mainCarosalData=[
    {
        image:""
    },
    {
        image:""
    },
    {
        image:""
    },
    {
        image:""
    },
    {
        image:""
    }
]

const MainCarousel = () => {
    const items = mainCarosalData.map(items=> <img className=' cursor-pointer' role='presentation' onClick={{}} src={items.image} alt=''/>)
    return(
        
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
     />
    )
}

export default MainCarousel