import React, { useState } from 'react'

let bedRooms = ["1","2","3","4","5"];

const Dropdown = ({onChange}) => {
 
  const [selectVal, setSelectVal] = useState("1")

  function handleChange(event){
    const newVal = event.target.value;
    setSelectVal(newVal);
    if(onChange) onChange(newVal, event.target.name)
  }

  return (
    <div className="mb-4">
        <select required name="bedrooms" onChange={handleChange} className="outline-none border border-blue-700 rounded-lg px-2 h-8 w-60 text-gray-400 bg-white focus:border-2">
          <option value="" disabled selected hidden>Bedrooms...</option>
          {
            bedRooms.map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))
          }
        </select>
    </div>
  )
}

export default Dropdown