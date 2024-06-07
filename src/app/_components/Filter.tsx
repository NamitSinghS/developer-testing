"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Dropdown from './_formelements/Dropdown';
import Pricerange from './_formelements/Pricerange';
import Arearange from './_formelements/Arearange';
import Switch from './_formelements/Switch';
import Button from './_formelements/Button';


const Filter = () => {

  const router = useRouter();

  const [formState, setFormState] = useState({category:"RENT", minimumArea:"", maximumArea:"", minimumPrice:"", maximumPrice:"", bedrooms:""});

  function aggregateFormData(resultantValue, targetName){
    setFormState({...formState, [targetName]: resultantValue})
  }

  const handleClick = () => {
     router.push("/listing");
  }

  // const formIsComplete = formState.category && formState.bedrooms && formState.maximumArea && formState.minimumArea && formState.minimumPrice && formState.maximumPrice;
  return (
    <div className="py-4 px-4 bg-amber-100 w-fit rounded-2xl self-center">
        <h3 className="text-blue-700 text-xl font-bold mb-2">FILTER</h3>
        <Switch onChange={aggregateFormData} />
        <Pricerange onChange={aggregateFormData} names={["minimumPrice", "maximumPrice"]} />
        <Arearange onChange={aggregateFormData} names={["minimumArea", "maximumArea"]} />
        <Dropdown onChange={aggregateFormData} />
        <Link href={{
          pathname: '/listing',
          query: {
            type: formState.category,
            minimumPrice: formState.minimumPrice,
            maximumPrice: formState.maximumPrice,
            bedrooms: formState.bedrooms,
            minimumArea: formState.minimumArea,
            maximumArea: formState.maximumArea
          }
          }}><Button /></Link>
    </div>
  )
}

export default Filter