"use client"
import React from 'react';
import Image from 'next/image';
import Carousel from './Carousel';
import Img1 from '../../../public/pexels-fotoaibe-1571453.jpg';
import Img2 from '../../../public/pexels-heyho-8142972.jpg';
import Img3 from '../../../public/pexels-marywhitneyph-90319.jpg';
import Img4 from '../../../public/pexels-medhat-ayad-122846-439227.jpg';
import Img5 from '../../../public/pexels-timesaverhacks-2724749.jpg';


let slides = [Img1, Img2, Img3, Img4, Img5];

const Propertycard = ({
  title,
  bedrooms,
  price,
  area,
  description
}) => {
  return (
    <>
    <div className="w-60 rounded-2xl shadow-lg bg-white flex flex-col h-fit m-2">
      <div>
       <Carousel>
         {
          slides.map((s) =>  (
            <Image width={240} height={100} alt="none" src={s} className="rounded-t-2xl rounded-b-none" />
          ))
         }
        </Carousel>
      </div>
      <div className="px-2 mb-2">
        <h5 className="font-bold text-xl underline">{title}</h5>
      </div>
      <div className="px-2">
        <h5 className="font-semibold">price : {price} &#3647;</h5>
      </div>
      <div className="px-2">
        <h5 className="font-semibold">Bedrooms : {bedrooms}</h5>
      </div>
      <div className="px-2">
        <h5 className="font-semibold">Area(sqms) : {area}</h5>
      </div>
      <div className="px-2">
        <h5 className="font-semibold underline">Description</h5>
        <p className="text-sm">{description}</p>
      </div>
    </div>
    </>
    
  )
}

export default Propertycard;