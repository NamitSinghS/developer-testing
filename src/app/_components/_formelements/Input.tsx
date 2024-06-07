import React, { useState } from 'react';

const Input = ({placeholder, onChange, customName}) => {

  const [inputValue, setInputValue] = useState('');
  const [errorState, setErrorState] = useState(false);

  function isValidNumber(str){
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  function handleChange(event){
     const re = /^[0-9\b]+$/;
     if (event.target.value === '' || re.test(event.target.value)) {
         setInputValue(event.target.value);
         if (onChange) onChange(event.target.value, event.target.name);
     }
  };

  return (
    <div className="mb-4">
        <input type='text'
           placeholder={placeholder}
           value={inputValue}
           onChange={handleChange}
           name={customName}
           className="outline-none border border-blue-700 rounded-lg px-2 h-8 w-60 text-gray-400 bg-white focus:border-2" 
        />
        {/*errorState ? <div className="text-xs text-red-500">Incorrect Input</div> : ""*/}
    </div>
  )
}

export default Input