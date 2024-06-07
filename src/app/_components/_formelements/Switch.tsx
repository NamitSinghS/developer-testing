"use client";
import React, { useState } from 'react'

const Switch = ({onChange}) => {

  const [category, setCategory] = useState("RENT");

  const handleChange = (event) => {
    const newVal = event.target.value;
    setCategory(event.target.value)
    if(onChange) onChange(newVal, 'category');
  }

  return (
    <div className="inline-flex overflow-hidden rounded-lg border border-blue-700 mb-4">
        <input className="hidden type-selector" type="radio" value="RENT" checked={category === 'RENT'} onChange={handleChange} name="typeRadio" id="RENT" />
        <label className="py-2 px-3.5 text-sm cursor-pointer transition border-r border-blue-700 text-gray-400 bg-white" htmlFor="RENT">Rent</label>
        <input className="hidden type-selector" type="radio" value="SALE" checked={category === 'SALE'} onChange={handleChange} name="typeRadio" id="SALE" />
        <label className="py-2 px-3.5 text-sm cursor-pointer transition text-gray-400 bg-white" htmlFor="SALE">Buy</label>
    </div>
  )
}

export default Switch;