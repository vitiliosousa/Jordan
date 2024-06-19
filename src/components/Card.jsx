import React from "react"

export default function Card({image,title,brand,price}){
    return(
    <>
        <div className="mt-10 hover:scale-110 ease-in duration-300">
            <div className="bg-blue-50 p-6 w-80 mb-6 flex items-center justify-center">
                <img src={image} alt={title} className=" h-36 mb-4" />
            </div>
            <h2 className="text-base font-semibold mb-2">{title}</h2>
            <p className="text-blue-400 font-medium mb-4">{brand}</p>
            <p className="font-bold font-price text-xl">{price}</p>
        </div>
    </>
    )
}