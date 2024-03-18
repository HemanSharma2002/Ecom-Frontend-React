export default function ProductCard({item}){
    // const item={
    //     imageUrl:"https://imagescdn.peterengland.com/img/app/product/7/741003-8305822.jpg?q=75&auto=format&w=342",
    //     brand:"Petter England",
    //     title:"Plain White Cotten Shirt With Cuban Coller",
    //     price:2000,
    //     discountedPrice:1000,
    //     discountPersent:50
    // }
    return (
        <div>
            <div className="  w-60 h-96 m-10 border-2 border-gray-100 rounded-md group hover:shadow-2xl duration-200">
                <div className=" bg-red-500 rounded-t-md h-64 w-full group-hover:h-60 duration-200">
                    <img className=" h-full w-full object-cover object-top rounded-t-md" src={item.imageUrl} alt="" />
                </div>
                <div className=" p-2">
                    <p className="font-semibold text-gray-800">{item.brand}</p>
                    <p className=" pt-1">{item.title}</p>
                    <div className=" text-sm font-semibold flex flex-row justify-between px-3 pt-2">
                        <p>₹ {item.discountedPrice}</p>
                        <p className=" opacity-50 line-through">₹ {item.price}</p>
                        <p className=" text-green-600">{item.discountPersent}% off</p>
                    </div>
                </div>
            </div>
        </div>
    )
}