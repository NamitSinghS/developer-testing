"use client";
import React, { useState } from 'react'
import Input from './Input';

const Pricerange = ({onChange, names}) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-4">
        {   isOpen ?

            (
            <button onClick={() => setIsOpen((prev) => !prev)} className="border border-blue-700 rounded-lg bg-white h-8 w-60 text-gray-400 px-2 text-left">Enter price range</button>
            ) :
            (
            <>
              <Input placeholder="Enter minimum price" onChange={onChange} customName={names[0]} />
              <Input placeholder="Enter maximum price" onChange={onChange} customName={names[1]} />
            </>
            )
        }
    </div>
  )
}

export default Pricerange;