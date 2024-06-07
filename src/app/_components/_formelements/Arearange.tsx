"use client";
import React, { useState } from 'react'
import Input from './Input';

const Arearange = ({onChange, names}) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-4">
        {   isOpen ?

            (
            <button onClick={() => setIsOpen((prev) => !prev)} className="border border-blue-700 rounded-lg bg-white h-8 w-60 text-gray-400 px-2 text-left">Enter area range</button>
            ) :
            (
            <>
              <Input placeholder="Enter minimum area in sqm" onChange={onChange} customName={names[0]} />
              <Input placeholder="Enter maximum area in sqm" onChange={onChange} customName={names[1]} />
            </>
            )
        }
    </div>
  )
}

export default Arearange;