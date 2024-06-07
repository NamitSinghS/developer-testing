"use client"
import React, { useState } from 'react';
import Paginatedlist from './Paginatedlist';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from "../../../graphql/queries";


let cards = [
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    },
    {
        title: 'The Base',
        bedrooms: 4,
        price: '2M',
        area: 32
    }
]

const Lists = ({requirementList}) => {

    const [filteredVals, setFilteredVals] = useState([]);

    let { type, minimumPrice, maximumPrice, bedrooms, minimumArea, maximumArea } = requirementList

    let queryVar = {};
    
    if(type){
        queryVar = {...queryVar, category: type}
    }
    if(bedrooms){
        queryVar = {...queryVar, bedroom: parseFloat(bedrooms)}
    }
    if(minimumPrice){
        queryVar = {...queryVar, minPrice: parseFloat(minimumPrice)}
    }
    if(maximumPrice){
        queryVar = {...queryVar, maxPrice: parseFloat(maximumPrice)}
    }
    if(minimumArea){
        queryVar = {...queryVar, minArea: parseFloat(minimumArea)}
    }
    if(maximumArea){
        queryVar = {...queryVar, maxArea: parseFloat(maximumArea)}
    }

   const {data, loading, error} = useQuery(GET_PROPERTIES, {
        variables: queryVar
      });

      if (loading)
      return (
        <p className="text-blue-700 text-xl text-center py-10">Please Wait...</p>
      );
    if (error)
      return (
        <p className="text-red-500 text-center py-10">Error: {error.message}</p>
      );

  //console.log(data?.properties);

  const propertyData = data?.properties || [];

  
  return (
    <>
      <Paginatedlist data={propertyData} />   
    </>
  )
}

export default Lists;